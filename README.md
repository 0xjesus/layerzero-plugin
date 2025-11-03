# LayerZero (Stargate) Data Provider

Collects bridge data from Stargate Finance (Volume, Rates, Liquidity, Assets).

## Quick Test

```bash
bun install
bun dev  # Open http://localhost:3001
bun test # Verify all metrics work
```

## What It Does

Fetches data from:
- **Stargate API** → Rates, liquidity, supported assets
- **DefiLlama API** → 24h volume (fallback since Stargate lacks this endpoint)

## Verification

✓ **Web UI** (`bun dev`) shows live metrics
✓ **Tests pass** (`bun test`) confirms all data providers work
✓ **No API key needed** for Stargate endpoints

## Data Sources

| Metric | Endpoint |
|--------|----------|
| Rates & Fees | `GET /api/v1/quotes` |
| Liquidity | `GET /api/v1/quotes` (srcAmountMax) |
| Assets | `GET /api/v1/tokens` |
| Volume | DefiLlama `/summary/dexs/stargate` |