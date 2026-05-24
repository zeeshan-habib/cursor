# Backlog — Zee's Claude System

Pick up any of these in a fresh session. Check items off as they're done and push the update.

---

## Investment

### Immediate — Monday/Tuesday May 11–12
- [x] **Buy NTR.TO** — executed 2026-05-11. 40.9805 shares at $97.97 CAD avg in TFSA. Stop: $84.00 CAD.
- [x] **Buy ABX.TO** — executed 2026-05-11. 100 shares at $60.50 CAD in TFSA. Stop: $54.45 CAD.
- [x] **Draw $4,000 from PLOC + buy LLY** — executed 2026-05-11. 3 shares LLY at $964.98 USD in Non-Reg. Stop: $850 USD. PLOC balance: $6,007.80 CAD used.
- [x] **Update `thresholds.json`** — NTR, ABX, LLY entries updated 2026-05-24.

### Portfolio Review — May 13, 2026
Buy recommendations (~$1,000 CAD budget each account):
- [ ] **RRSP — Buy VT** — 4 shares @ ~$155.40 USD (~$853 CAD). Stop-loss: $140 USD. Strong Buy consensus, +17% upside to $182 target.
- [ ] **TFSA — Buy AMZN** — 2 shares @ ~$270.13 USD (~$740 CAD). Stop-loss: $243 USD. Strong Buy, +28% upside to $345 target, EV = +20.9%. No earnings within 14 days.
- [ ] **FHSA — Buy XBAL.TO** — 28 shares @ ~$35.08 CAD (~$982 CAD). Stop-loss: $32 CAD. Default FHSA anchor, Risk Score 1.
- [ ] **FHSA — Trim POW.TO** — sell 10 shares @ ~$79 CAD. Risk Score 4: weak buy consensus, bearish technicals, upside to analyst target <10%, negative earnings surprise.
- [ ] **Non-Reg — Buy AVGO** — 1 share on/after May 16 @ ~$417 USD (~$571 CAD, PLOC). Stop-loss: $375 USD. EV = +26.7%. ⚠️ Earnings Jun 3 — do not buy before that date.

Flags from May 13 review:
- ⚠️ **LLY** — ex-dividend May 15. No action needed; already held.
- ⚠️ **AVGO** — earnings Jun 3. Binary risk event. Non-Reg buy must wait until post-earnings.
- ⚠️ **GOOG** — at ATH ($399). Upside to analyst avg target ~10% — insufficient reward. Do not add. Hold and let other positions dilute concentration.
- ⚠️ **POW.TO** — ⚠️ Reduce recommended. Risk Score 4. Analyst mean target $81.97 CAD; limited upside. Trim 10 shares.

### Ongoing / Monitor
- [ ] **POW.TO** — ⚠️ Reduce recommended (May 2026 review). Trim 10 shares @ ~$79 CAD. Risk Score 4: bearish technicals, weak consensus, analyst target only $81.97.
- [ ] **GOOG** — do not add. At ~15% of portfolio. Hold; let other positions grow to dilute concentration naturally.
- [ ] **TSM** — Strong Buy but near 52w high. Revisit on a 10–15% pullback (~$350 USD entry range).
- [ ] **AVGO (Non-Reg)** — needs ~$462 USD to hit 10% PLOC return. Monitor against $375 floor stop. Buy post-Jun 3 earnings.
- [ ] **MSFT Bear Put Spread** — take profit at $10.35 (50% gain). Price alert set at MSFT $435 for stop.

### Tooling / Skills
- [x] **Install surveillance agent** — installed and tested May 8 2026. Runs Mon–Fri 8:30am ET. Briefings at `agents/portfolio-agent/briefings/YYYY-MM-DD.md`.
- [x] **Fix surveillance agent paths** — repo-relative paths, thresholds.json, plist for zeeshanhabib (2026-05-24).
- [ ] **Re-install launchd plists** — copy from repo and `launchctl load` both portfolio + spousal PR agents.
- [ ] **Build `/deep-research` skill** — 5 parallel subagents (Fundamentals, Technicals, Sentiment, Competitive, Risk) synthesized into a single decision memo. More rigorous than `/investment-committee`. Use for any new position > $3,000.
- [ ] **Build backtesting loop** — reads past session recommendations, fetches historical returns, identifies systematic errors (currency mix-ups, premature stops), rewrites portfolio-review skill with corrective heuristics. Run monthly.
- [x] **Per-ticker investment thesis in memory** — documented May 8 2026. All 15 positions with thesis, exit signals, and concerns.

---

## Career

### Immediate
- [ ] **90-day MaintainX plan** — ✅ in progress (running `/career-coach` now, May 8 2026)
- [ ] **Update LinkedIn** — headline, about section, and experience to reflect MaintainX Lead Analyst, Growth Team role. Use `/career-coach` LinkedIn framework.

### Medium-term
- [ ] **Staff Analyst promotion roadmap** — map current scope gaps vs Staff criteria (org-wide impact, multiplying other analysts, external visibility). Build a 12-18 month plan.
- [ ] **Skill development priority** — pick the next skill to build from the `/career-coach` roadmap (top candidates: causal inference, dbt, LLM/AI tooling, executive communication).
- [ ] **Personal board of advisors** — identify 2–3 senior people who will give honest feedback on career trajectory.

---

## Fashion

- [x] **Run `/fashion-stylist`** — profile locked in May 8 2026. Apple body type, warm undertone, $50-150 budget, smart casual.
- [x] **Create `~/wardrobe.csv`** — created May 8 2026 with full wardrobe inventory.
- [ ] **Buy: Burgundy merino crewneck** — Uniqlo Extra Fine Merino ~$50-60. Priority 1.
- [ ] **Buy: Charcoal slim-straight chinos** — Uniqlo Smart Ankle Pants ~$50. Priority 2.
- [ ] **Buy: Structured topcoat or overshirt jacket** — charcoal/dark navy, Uniqlo ~$80-130. Replaces bomber. Priority 3.

---

## Life / Discipline

### Phase 1 — Week of May 9, 2026
- [x] **Phone on work desk at night** — committed May 9. Shared apartment means no kitchen option; desk is the anchor.
- [ ] **Spousal visa (outland)** — use `@spousal-pr` skill; tracker at `immigration/application-status.md`. Submit when complete.
- [ ] **Book ADHD assessment** — $500. Committed May 9 2026.

### Immigration — Outland Spousal PR
- [x] **Create `@spousal-pr` skill + `immigration/` folder** — 2026-05-24
- [x] **Weekly accountability agent** — `agents/spousal-pr-agent/` Mon 9am ET
- [ ] **Audit documents vs IMM 5533** — first `@spousal-pr` session: confirm what's actually ready
- [ ] **Complete IMM 5532 relationship narrative** — highest-effort sponsor form
- [ ] **Submit application** — target date TBD after audit

### Phase 2 — After Phase 1 holds
- [ ] **Desk by 8am** — one morning anchor, nothing else added yet.
- [ ] **Pomodoro work blocks** — 25 min on, 5 off. Forest app or any timer.
- [ ] **Toronto Public Library card** — free Libby app. First audiobook: *The Psychology of Money*.

### Phase 3 — ~30 days in
- [ ] **Walk during 6:30am parents call** — movement attached to existing daily habit.
- [ ] **One audiobook/month** — via Libby. Non-fiction connected to investing, business, or psychology.

### Phase 4 — After Day 90 at MaintainX (August 2026)
- [ ] **Automate RRSP contributions** — $2,500/month auto-transfer. Set once, done.
- [ ] **Shopify scoping session** — 3 stores, nothing selling. Decide: keep one (likely CAEDUNIT + Printful), park the rest.
- [x] **Freelance analytics** — MaintainX non-compete confirmed clean (no clause). Homebase contract signed May 2026 at $100/hr (personal billing for now; route through CAEDUNIT once T2s filed).

### Phase 5 — When Wife Arrives
- [ ] **Open wife's FHSA immediately** — first week she has SIN. $8K/year × 5 years = $40K more home savings.
- [ ] **Joint financial plan** — redo $1M math with her income modeled.
- [ ] **Home purchase prep** — RRSP HBP option (up to $35K withdrawal). Start looking ~12 months after arrival.

### Recession Prep — Dedicated Session Needed
- [ ] **PLOC risk audit** — if TFSA drops in a recession, Wealthsimple can reduce PLOC credit limit. Review Non-Reg AVGO exposure.
- [ ] **Portfolio recession-proofing** — sector exposure, position sizing, what to hold vs. trim in a downturn.

---

## Income / Business (scope these out)

### $1M by 40 Math (revised May 9 2026)
- Target: $1M CAD by age 40 (6 years). Hard deadline: age 44 (10 years).
- Starting point: ~$216K total net worth (TFSA $50K + RRSP $70K + FHSA $26K + Cash $60K + Loan $10K)
- Portfolio alone at 15%/year grows to ~$500K by age 40. Need $500K more from savings = ~$4,300/month.
- Savings capacity after all real expenses (incl. India travel $550-700/month, rent $2,500 when wife arrives): ~$5,000–6,500/month. Buffer exists.
- Cash $60K kept as emergency fund intentionally — do not pressure Zee to deploy it.
- Improve HISA rate: move cash from 2.75% to EQ Bank/Simplii at 4%+ (easy $750/yr gain, no risk).
- RRSP tax refund (~$13-15K from $30K contribution) must go back into investments, not spending.

### Shopify Stores (3 stores — unscoped)
- [ ] **Scope all 3 stores** — what do they sell, what's the traffic/revenue, why not performing? Run a session dedicated to this. Potential to activate as side income without starting from scratch.
- [ ] **Decide: consolidate or specialize** — 3 underused stores is 3× the overhead. Pick the one with most potential, kill or park the rest.
- [ ] **CAEDUNIT relaunch** — Ideogram V3 + Printful print-on-demand. Needs nil T2 filings first (see Personal Finance). Could be 1 of the 3 Shopify stores.

### Other Income Options
- [ ] **Freelance analytics consulting** — Zee's skills (attribution, MMM, SQL, Python) are worth $150-200/hr. Even 5 hrs/month = $750-1,000 CAD. CAEDUNIT is the billing vehicle once T2s are clean.
- [ ] **Second job / contract** — open option. Explore remote data/analytics contracts that don't conflict with MaintainX. Do not pursue until 90-day MaintainX plan is stable (day 90 = early August 2026).

---

## Personal Finance

- **CAEDUNIT INC. T2 filings** — financial statements prepared 2026-05-12. [Google Sheet (Draft for CPA)](https://docs.google.com/spreadsheets/d/1kGmxI7IHrVTEdZjXIczYbaWwePnjHyRKEUHfynQ9T4A/edit). Max tax exposure: ~$209 (FY2021/22 worst case only). Detail: `side-hustle/CAEDUNIT-financials.md`.
  - [ ] **Pre-CPA prep**: Call RBC — destination accounts for 6 FY2021/22 transfers ($1,790.45 total). Find Dec 2021 flight email ($900). Find accountant invoice ~$400. Write cash memo for $240 ATM withdrawal.
  - [ ] **FY2021/22** — Paper-file T2 with CPA (first return must be paper). $2,745.73 revenue. Up to $208.90 tax.
  - [ ] **FY2022/23** — File T2 with CPA. $0 revenue, -$208.81 net income, $0 tax.
  - [ ] **FY2023/24** — Self-file T2 (nil). $4.28 interest income, -$35.37 net income, $0 tax.
  - [ ] **FY2024/25** — Self-file T2 immediately (overdue since Feb 28 2026). $5.37 interest, $0.66 tax owing.
  - [ ] **Google Sheet cleanup** — delete rows starting with `====` (formula errors in Sheets). Share with CPA before meeting.
  - [ ] **CRA My Business Account** — log in with BN 779161207, verify which years show as outstanding.
- [ ] **Spouse arrival financial planning** — model the financial impact: CCB eligibility, EI parental leave, spouse tax credit, childcare costs, joint RRSP/TFSA strategy, home purchase timing interaction.
- [x] **Net worth tracker** — created ~/net-worth.csv May 8 2026. Fill in current values and update monthly.
- [ ] **Make GitHub repo private** — go to github.com/zeeshan-habib/claude → Settings → Danger Zone → Change visibility → Private.

### Quebec Payroll Tax — May 2026 (estimates, pending May 15 pay stub)
$165,000 gross | Semi-monthly (24 periods) | Method B assumed (full rate until annual max hit)

| Scenario | Early Year (Jan–~Aug, all deductions active) | Late Year (~Sep–Dec, QPP/EI/QPIP maxed) | Monthly Avg |
|---|---|---|---|
| No RRSP | ~$4,193/period | ~$4,748/period | ~$8,986/mo |
| $800 RRSP/period | ~$3,773/period | ~$4,328/period | ~$8,160/mo |

- QPP1 ($430.67/period) maxes ~period 10 | EI ($90.06/period) maxes ~period 10 | QPIP ($33.96/period) maxes ~period 15
- Late year jump (no RRSP): +$555/period when all payroll deductions stop
- Income tax withholding (~$1,001 federal + ~$1,109 Quebec) stays constant throughout year
- ⚠️ Confirm method from May 15 pay stub — Method A (prorated flat all year) is also common

### RRSP + FHSA Tax Refund (2026 tax return)
| Contribution | Amount | Marginal Rate | Estimated Refund |
|---|---|---|---|
| RRSP (by Feb 28, 2027 — applies to 2026) | $20,000 | ~47.5% combined | ~$9,492 |
| FHSA (must be by Dec 31, 2026) | $8,000 | ~47.5% combined | ~$3,797 |
| **Total** | **$28,000** | | **~$13,289** |

- ⚠️ **FHSA deadline is Dec 31, 2026.** Unlike RRSP, there is no first-60-days carry-back rule for FHSA. Contributing in Feb 2027 costs the full ~$3,797 refund.
- All refund dollars must go back into investments (not spending) — required for $1M plan math.

---

## System / Tooling

- [ ] **`/deep-research` skill** — see Investment section above.
- [ ] **Backtesting loop** — see Investment section above.
- [ ] **Per-ticker thesis memory** — see Investment section above.

---

*Last updated: 2026-05-14*
