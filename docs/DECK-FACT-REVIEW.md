# Deck fact & stance review — please read before editing

**Reviewed:** `src/presentation/slides.tsx` @ commit `259e751`
**Date:** 2026-08-13 · **By:** Quang
**Number authority:** `00-facts.md` in the thesis repo (the reconciled fact sheet — every on-slide number/stance must trace to it). Ping me if you need a figure that isn't there; per its Rule 5 we don't invent or re-derive numbers.

This is a review to align on before we start editing the deck and writing the speaker script — not a set of changes already made. Nothing in `slides.tsx` has been touched. Let's agree on the **Gate 0** questions first; the rest are mostly mechanical.

---

## 1. Evaluation now has two parallel tracks — this is the thing to resolve

Commit `259e751` split section 03 (Evaluation) into sub-sections:

| Sub | Divider | Content | Where the numbers come from |
|---|---|---|---|
| **4.1 Origin Test** | "Localnet & synthetic baseline" | `eval-latency / -cost / -capacity / -failover` | the **thesis** evaluation (covered by `00-facts`) |
| **4.2 Quality Baseline** | "azure-devnet-sample" | `eval-r1-setup / -session-health / -media-quality / -summary` | a **new run**, not in the thesis / not in `00-facts` |
| **4.3–4.6** | 2/5/10/20-Bot Resilience | dividers only — "data pending" | `docs/evaluation/result02/` has data but no slides yet |

**The collision:** 4.1 and 4.2 both show a "latency" number by different methods:
- 4.1 `eval-latency` = **70.9 ms p95, one-way component-sum LOWER BOUND** (synthetic camera, both peers on one laptop; the thesis explicitly refuses to call this full-path latency).
- 4.2 `eval-r1-summary` = **~70–80 ms measured** (real getStats over a 5-region Azure deployment).

Two ~70 ms numbers, two meanings. The script can't call both "our latency result" — a reviewer will ask which one is real. **We need to decide (Gate 0):**
1. Is 4.2 *additional* evidence (live-deployment health) or a *replacement* for the thesis eval?
2. Does 4.2 go into the defense at all?
3. Which latency number governs, and how do we frame the other?

Three things about 4.2 that need care if we keep it:
- **Post-freeze data.** The thesis was frozen and pushed 2026-07-17. `result01/describe.md` says the run is "suitable to cite in the thesis evaluation" — but it is **not in the submitted PDF**. If shown, it must be labelled post-submission (same discipline the thesis uses for the +1.86 ms E2EE disposition). Never imply it's in the graded thesis.
- **The manual Vietnam join** (`eval-r1-setup`, `eval-r1-summary`) is **not in `scenario.toml`** — a single ad-hoc event. Fine as a labelled anecdote, risky as a "result".
- **"25 workers"** (`eval-r1-setup`) = 5 services × 5 VMs (infra containers), **not 25 users**. 4.1's capacity story is N≤15 users measured / N=100 projected — keep "workers" from being read as "users".

---

## 2. 4.1 fixes that are clearly correct (low debate — backed by `00-facts`)

These are on the thesis-eval slides and should be fixed regardless of the Gate 0 outcome:

| # | Slide | Line | Now | Should be | Why |
|---|---|---|---|---|---|
| H-1 | `eval-latency` | L610 | shows `p99 = 72.0` | remove the p99 bar | §5.2.6 reports p99 but **explicitly declines to treat it as a result** — it must not be on a slide. |
| H-2 | `eval-latency` | L604 | title "Below the 200ms Ceiling" | e.g. "One-Way Component-Sum, p95 = 70.9 ms" | 70.9 ms is a **lower bound**; claiming we met a sub-200 ms target is a banned overclaim. |
| H-3 | `eval-cost` | L643 | "**0.0257 SUI** irreversible" | **0.017 SUI** (or label 0.0257 as **USD**) | Irreversible fee = 0.017 SUI. 0.0257 is the **USD** figure at a *labelled* USD 1.50/SUI scenario — it's mislabelled as SUI. |
| M-1 | `eval-cost` | L627–632 | 6 per-function gas bars | verify vs raw JSONL or remove | Only the **session total** is in `00-facts`; per-function values aren't verified there yet. |
| M-2 | `eval-cost` | L623,L639 | "Cost" / "Fractions of a Cent" | "Fee" / "≈ USD 0.05 (about 5¢) at labelled USD 1.50/SUI" | Chapter is titled *Fee*; the USD number is a labelled scenario, not a market price. |

## 3. Content gaps

- **No E2EE slide anywhere.** The +1.86 ms encryption-overhead result (a headline in the thesis) and "what the relay can't see" are missing. E2EE should be in the main narrative — we need one slide (protection: content-blind relay + SFrame AES-GCM; overhead: +1.86 ms **upper bound**, tail unresolved; boundary: opt-in, fails open).
- **`limitations` (L1028) is thin.** Add the disclosed limits the thesis raises itself: E2EE opt-in/fails-open, `AdminCap` breadth, no project-wide threat model.

## 4. Already correct — don't touch

`session-proof`, `economic-layer`, `failover` (its p99=80 ms **is** valid — the failover bench reports p99, unlike latency), `eval-capacity`, `designed-vs-implemented`, and the new `huddle01-*` motivation slides (Huddle01 is in our surveyed corpus — good; just never name Livepeer/Theta/Helium as surveyed).

---

## 5. Checklist (work through in order; check off as done)

> Collaborative repo. Before touching `slides.tsx`: `git fetch origin && git status`, and re-confirm the line numbers below (they move whenever the file changes). Edit on a branch, don't push code straight to `main` without a heads-up.

**Gate 0 — coordinate (blocks everything below)**
- [ ] Agree 4.2's role: *additive* live-deployment evidence vs *replacement* for the thesis eval — and whether 4.2 ships in the defense at all.
- [ ] Decide the single governing **latency** result (4.1 lower-bound 70.9 ms vs 4.2 measured ~70–80 ms) and how the other is framed.

**Gate 1 — 4.1 safe fixes (backed by `00-facts`, low coordination)**
- [ ] H-1 — remove the `p99 = 72.0` bar (`eval-latency`, L610)
- [ ] H-2 — retitle latency slide, drop "Below the 200ms Ceiling" (L604)
- [ ] H-3 — `0.0257 SUI` → `0.017 SUI`, or relabel as USD (`eval-cost`, L643)
- [ ] M-2 — "Cost"→"Fee" + labelled USD-scenario clause (L623, L639)
- [ ] M-1 — per-function gas bars: verify vs raw JSONL or remove (L627–632)

**Gate 2 — content completeness**
- [ ] H-4 — add the E2EE slide (protection + +1.86 ms upper bound + opt-in/fails-open)
- [ ] M-3 — strengthen `limitations` (E2EE opt-in, `AdminCap` breadth, no threat model) (L1028)

**Gate 3 — 4.2 hardening (only if Gate 0 keeps it)**
- [ ] R-3 — add "post-submission / not in graded thesis" label to 4.2
- [ ] R-2 — label the Vietnam join as unscripted single occurrence (or cut it from the result claim)
- [ ] R-4 — disambiguate "workers" (infra containers) vs "users/participants"
- [ ] R-5 — provenance-check the `r1*` chart series against `result01/` raw

**Gate 4 — polish**
- [ ] L-1 net "0.0351 SUI" → "about 0.035 SUI" (L647) · L-2 methodology card "Cost"→"Fee" (L579) · L-3 relay "coturn TURN" reads as deployed (L87) · L-4 SFU row: floor ≠ MTTR · L-5 title: add supervisor + T826
- [ ] Write the speaker script — **only after Gates 0–2 are settled**

Please add comments / disagree inline. Once Gate 0 is settled I'll start Gate 1 on a branch.
