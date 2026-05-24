---
owner: Zee
last_updated: 2026-05-24
review_cadence: as-needed
refs:
  - side-hustle/pod-business.md
  - side-hustle/CAEDUNIT-financials.md
---

# Shopify Stores

Registry of all three Shopify stores. Load when connecting via CLI, choosing which store to operate, or doing any store admin work.

---

## ⚠️ Plan is off limits — never change

All three stores are on the **Shopify Alumni** plan (free Advanced-tier benefits from Shopify departure).

**Do not change the store plan under any circumstance.** This is a hard rule for Zee and for any AI assistant:

- Never suggest upgrading, downgrading, or switching plans
- Never run CLI mutations or admin steps that alter billing/plan settings
- If a feature appears unavailable, find a workaround — do not change the plan to unlock it
- If Shopify prompts a plan change during setup, stop and ask Zee before proceeding

Losing Alumni plan access cannot be undone and would remove free Advanced-tier features on all stores.

---

## Store registry

| Store | Admin handle | CLI domain (`--store`) | Display name | Plan | Intended use |
|---|---|---|---|---|---|
| 1 | `cyclorama` | `cyclorama.myshopify.com` | **PRNT** | Shopify Alumni | Available — blank slate |
| 2 | `caedunit` | `caedunit.myshopify.com` | **Ink Line** | Shopify Alumni | **Primary POD store** (CAEDUNIT portrait business) |
| 3 | `supernormallife` | `haveyourgifts.myshopify.com` | **SuperNormal** | Shopify Alumni | Available — blank slate |

**Admin URLs:**

- Store 1: https://admin.shopify.com/store/cyclorama
- Store 2: https://admin.shopify.com/store/caedunit
- Store 3: https://admin.shopify.com/store/supernormallife

**Important:** Store 3's admin handle is `supernormallife`, but the permanent `.myshopify.com` domain is **`haveyourgifts.myshopify.com`**. Always use `haveyourgifts.myshopify.com` for CLI commands — `supernormallife.myshopify.com` will not work.

---

## CLI connection

All three stores are authenticated via Shopify CLI (`shopify store auth`). To target a store, always pass `--store`:

```bash
shopify store execute --store caedunit.myshopify.com --query 'query { shop { name } }'
```

Online tokens expire ~24 hours. Re-run `shopify store auth` for that store if auth fails.

**Default store for side-hustle work:** `caedunit.myshopify.com` (Ink Line) unless Zee specifies otherwise.

---

## Platform notes

- **Plan benefits:** Alumni plan includes Advanced-tier features at no cost; do not conflate with a paid Advanced subscription
- **Corp entity:** Revenue for the POD business flows through CAEDUNIT INC. — see `CAEDUNIT-financials.md`
