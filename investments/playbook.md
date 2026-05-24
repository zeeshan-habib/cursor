---
owner: Zee
last_updated: 2026-05-15
review_cadence: quarterly
next_review: 2026-08-15
refs:
  - investments/theses.md
  - investments/portfolio.csv
  - me/finances.md
---

Investment playbook — investor profile, Yahoo Finance scripts, analysis framework, portfolio conventions, and risk rules. Load at the start of every investment session.

---

## Investor Profile

- **Style:** Growth investing — companies expanding faster than the market
- **Target annual return:** 15–20%
- **Risk tolerance:** Low — protect capital first, grow second
- **Max allocation per stock:** 10% of portfolio
- **Target holdings:** 10–15 stocks (diversified, no concentration)
- Explain reasoning clearly — not a seasoned trader

---

## Portfolio File

Stored at: `~/investments/portfolio.csv`
Format: `Symbol, Shares, AvgCostBasis, Currency, Sector, DateBought, Account, Notes, LastPrice, LastPriceDate`

### Accounts

| Account | Purpose | Risk Level | Goal |
|---|---|---|---|
| RRSP | Retirement savings | Low | Long-term compounding, ETF-heavy |
| TFSA | Tax-free growth | Moderate-High | 15–20% annual return, growth stocks |
| FHSA | First home purchase | Lowest | Capital preservation, XBAL as anchor |
| Non-Registered | Leveraged growth (PLOC-funded) | Moderate | Maximise capital gains, avoid dividends/interest income |

### Non-Registered Account Rules (PLOC-funded)

- Portfolio Line of Credit at **4.45%** (secured against TFSA only — non-reg doesn't qualify yet)
- Rate tracks Bank of Canada rate directly with no spread. Reduces to 3.95% at $500K AUM.
- Credit limit is dynamic: 35% of TFSA value × risk factor of holdings
- Current balance: $6,007.80 | Available: $7,892.20 | Limit: $13,900
- Keep ~50% buffer on limit at all times (TFSA drops reduce the facility)
- Target return on any PLOC-funded position: minimum 10–12% annually
- Capital gains only in Non-Reg — dividends and interest taxed at full marginal rate
- Do NOT use margin facility on top of PLOC
- Set a hard stop-loss on every position immediately after purchase
- Interest deductible ONLY on non-registered investments (CRA ITA 20(1)(c))
- Effective borrowing cost after-tax: ~2.09% at 53% marginal rate

---

## Portfolio Analysis Conventions

- **Currency:** Canadian tickers (.TO suffix or TSX-listed) are always CAD. US tickers are always USD. Never mix them.
- **Share-count math:** Always show: `shares = dollar_amount ÷ price_per_share`. Round to 2 decimal places.
- **FX conversion:** Fetch live CAD/USD rate at session start. Show the rate used whenever converting. Report all portfolio totals in both CAD and USD.
- **Account context:** TFSA = tax-free growth (max 10% single stock); RRSP = long-term compounding (ETFs/dividends); FHSA = capital preservation only; Non-Reg = capital gains only, PLOC-funded.
- **Stop-losses:** Whenever a new position is opened, always provide a stop-loss level (% and absolute $). Anchor to the 200-day MA where possible.
- **Earnings binary risk:** Always check earnings date before any buy recommendation. Flag ⚠️ BINARY RISK if earnings are within 14 days.

---

## Tool Fallback Order

1. **Yahoo Finance Python scripts** (v8/finance/chart for prices, v10/finance/quoteSummary for analyst data) — always try first
2. **Yahoo Finance MCP** (`mcp__yahoo-finance__*`) — only if Python scripts fail with persistent network/auth errors
3. **WebSearch / WebFetch** — news, analyst commentary, supplemental research
4. **Never retry a failing MCP more than once** — fall back to the next tier immediately
5. **PATH in subshells:** Always prefix npx commands with `export PATH="$HOME/.bun/bin:$PATH"`

---

## Yahoo Finance Python Scripts

**The Yahoo Finance MCP disconnects frequently. Always use these Bash/Python scripts.**

### Bulk Price Fetch (portfolio refresh)
```bash
python3 -c "
import urllib.request, json
symbols = ['RY.TO','TRP.TO','SCHD','VT','GOOG','AVGO','AMZN','ABX.TO','NTR.TO','GLD','AOM','ENB.TO','POW.TO','TD.TO','XBAL.TO','LLY']
for sym in symbols:
    url = f'https://query1.finance.yahoo.com/v8/finance/chart/{sym}?interval=1d&range=1d'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())
            price = data['chart']['result'][0]['meta']['regularMarketPrice']
            print(f'{sym}: {price}')
    except Exception as e:
        print(f'{sym}: ERROR - {e}')
"
```

### Full Single-Stock Quote (price, 52-week range, P/E, analyst rating, earnings date)
```bash
python3 -c "
import urllib.request, json, sys
sym = 'SYMBOL'  # replace with ticker
url = f'https://query1.finance.yahoo.com/v10/finance/quoteSummary/{sym}?modules=price,summaryDetail,defaultKeyStatistics,financialData,calendarEvents,recommendationTrend'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, timeout=10) as resp:
    d = json.loads(resp.read())['quoteSummary']['result'][0]
    p = d.get('price', {})
    sd = d.get('summaryDetail', {})
    fd = d.get('financialData', {})
    rt = d.get('recommendationTrend', {}).get('trend', [{}])[0]
    ce = d.get('calendarEvents', {})
    print('Price:          ', p.get('regularMarketPrice',{}).get('fmt'))
    print('52w High:       ', sd.get('fiftyTwoWeekHigh',{}).get('fmt'))
    print('52w Low:        ', sd.get('fiftyTwoWeekLow',{}).get('fmt'))
    print('Forward P/E:    ', sd.get('forwardPE',{}).get('fmt'))
    print('Trailing P/E:   ', sd.get('trailingPE',{}).get('fmt'))
    print('Target Price:   ', fd.get('targetMeanPrice',{}).get('fmt'))
    print('Target High:    ', fd.get('targetHighPrice',{}).get('fmt'))
    print('Target Low:     ', fd.get('targetLowPrice',{}).get('fmt'))
    print('Analyst Rating: ', fd.get('recommendationKey'))
    print('Strong Buy:     ', rt.get('strongBuy'))
    print('Buy:            ', rt.get('buy'))
    print('Hold:           ', rt.get('hold'))
    print('Sell:           ', rt.get('sell'))
    earnings = ce.get('earnings',{}).get('earningsDate',[])
    if earnings:
        print('Earnings Date:  ', earnings[0].get('fmt'))
"
```

### 30-Day Historical Data (trend analysis)
```bash
python3 -c "
import urllib.request, json, datetime
sym = 'SYMBOL'  # replace with ticker
url = f'https://query1.finance.yahoo.com/v8/finance/chart/{sym}?interval=1d&range=1mo'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, timeout=10) as resp:
    data = json.loads(resp.read())
    result = data['chart']['result'][0]
    timestamps = result['timestamp']
    closes = result['indicators']['quote'][0]['close']
    for ts, c in zip(timestamps, closes):
        if c:
            date = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d')
            print(f'{date}: {c:.2f}')
"
```

### Recent News (10 headlines)
```bash
python3 -c "
import urllib.request, json
query = 'COMPANY NAME'  # replace with company name
url = f'https://query1.finance.yahoo.com/v1/finance/search?q={query}&newsCount=10&enableFuzzyQuery=false'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, timeout=10) as resp:
    data = json.loads(resp.read())
    for item in data.get('news', []):
        print(item.get('providerPublishTime',''), '|', item.get('title',''))
"
```

### Fundamentals Time Series
```bash
python3 -c "
import urllib.request, json
sym = 'SYMBOL'  # replace with ticker
url = f'https://query1.finance.yahoo.com/v10/finance/quoteSummary/{sym}?modules=incomeStatementHistory,cashflowStatementHistory,balanceSheetHistory'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, timeout=10) as resp:
    d = json.loads(resp.read())['quoteSummary']['result'][0]
    for stmt in d.get('incomeStatementHistory', {}).get('incomeStatementHistory', []):
        print(stmt.get('endDate',{}).get('fmt'), '| Revenue:', stmt.get('totalRevenue',{}).get('fmt'), '| Net Income:', stmt.get('netIncome',{}).get('fmt'))
"
```

---

## Single Stock Analysis — Always Do All of These

When asked to analyze any stock, run through all of these steps:

### 1. Price & 30-Day Trend
- Get current price and 30-day historical data
- Calculate: 30-day return %, distance from 52-week high/low
- Flag if down >15% from recent high (elevated risk)

### 2. Analyst Consensus
- Get analyst rating and consensus score (1.0–2.0 = Strong Buy, 2.0–3.0 = Buy, etc.)
- Get price targets (low, average, high) and calculate upside % from current price
- Flag if upside to average target is below 10% (low reward)

### 3. Valuation
- Get trailing P/E and forward P/E
- Compare to sector average — note if premium or discount
- Check Trading Central valuation (Overvalued / Fair Value / Undervalued)
- Flag if Morningstar or Trading Central calls it Overvalued

### 4. Technical Signals
- Report short-term, intermediate-term, and long-term technical outlook
- Flag if intermediate or long-term is Bearish

### 5. Recent News & Catalysts
- Check last 10 news headlines
- Identify: earnings surprises, product launches, regulatory risks, analyst upgrades/downgrades
- Note upcoming earnings date as potential catalyst or risk

### 6. Risk Score (1–5)
- 1 = Very Low Risk: Strong Buy consensus, bullish technicals, fair/undervalued, low volatility
- 2 = Low Risk: Buy consensus, mostly bullish, near fair value
- 3 = Moderate Risk: Mixed signals, near resistance, or elevated valuation
- 4 = High Risk: Weak/mixed analyst consensus, bearish intermediate trend, overvalued
- 5 = Very High Risk: Sell consensus, bearish technicals, major news risks

### 7. Growth Investor Verdict
One of: **Strong Buy** / **Buy** / **Hold — Wait for Dip** / **Avoid**
- Include ideal entry price range if not a Strong Buy

---

## Full Portfolio Review — Run These Every Time

When asked to "review my portfolio" or "check my portfolio":

1. **Fetch current prices** for all holdings in `~/investments/portfolio.csv`
2. **Calculate for each position:** current value (shares × price), unrealized gain/loss, % gain/loss
3. **Sector concentration:** group by sector, flag if any sector exceeds 30% of portfolio
4. **Single-stock concentration:** flag any position exceeding 10% of total portfolio value
5. **Performance ranking:** sort by 30-day return, show best and worst performers
6. **Overvalued flags:** cross-check each holding against analyst fair value — flag any trading above average target
7. **Technical risk check:** flag any holding with intermediate or long-term Bearish signals
8. **Rebalancing suggestions:** if concentration or risk flags exist, suggest trim/add amounts
9. **Portfolio score:** estimate whether current mix is on track for 15–20% annual return

---

## Risk Management Rules

- Never recommend adding to a position that already exceeds 10% of portfolio
- Flag any stock with beta > 1.5 as elevated volatility
- If more than 3 stocks have a Risk Score of 4 or 5 → flag portfolio as high risk overall
- Prefer stocks with "Strong Buy" or "Buy" consensus ratings
- Avoid recommending "Sell"-rated stocks as additions
- Always check for upcoming earnings before suggesting a buy — earnings are binary risk events
