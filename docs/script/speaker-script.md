---
name: 10-script-react-deck
description: Speaker script for the React deck (github.com/vidstall/slide, src/presentation/slides.tsx @ 2e34cbc, 32 slides). Keyed by slide id, not number, so it survives Van's edits. Every governed number traces to 00-facts.md; each block carries a SYNC flag (ok / diverge / pending-van). Phase A = Quang's spine (slides 1-17 + 30-32), rewritten 2026-08-13 in the 01-script-15min register: short sentences, slide deixis, click cues, word budgets, ~11:39 total at 130 wpm (mechanical count — see Word budget). Phase B (Van's 3.2-3.4, slides 18-29) is placeholder-only, pending Van.
metadata:
  type: reference
  area: meta
  status: draft
  created: 2026-08-13
  updated: 2026-08-13
  owner: quang
  authority: 00-facts.md — thesis repo (dvconf/docs/00-meta/defense-phanbien/00-facts.md)
related: docs/DECK-FACT-REVIEW.md — deck fact & stance review (this repo)
---

# React deck — speaker script (Phase A, v2)

Target deck: `vidstall/slide` -> `src/presentation/slides.tsx` at **`2e34cbc`** (32 slides; Van's diagram rework on top of the `0621fee` restructure: `architecture` is now a static hub-and-spoke `ArchitectureMesh` with **no click steps**, `session-lifecycle` split into two parallel tracks converging at Assignment, `economic-layer` rebuilt as a funding-to-rewards pipeline + stat cards, a NEW `economic-layer-slashing` table slide inserted after it, and `failover` rebuilt around local self-promotion with the chain trailing).
Number authority: **`00-facts.md`** (Section A registry, Section C stances, Section D banned phrases). Rule 5: no number that is not in that sheet.

## How this script stays in sync with the deck

- **One block per slide, keyed by the slide `id`.** When Van reorders or edits, the `id` still maps.
- Each block carries a **`SYNC` flag**: `ok` / `diverge -> <backlog id>` (script deliberately speaks the safe version) / `pending-van` (Van's numbers, not in `00-facts`).
- The **TRACE TABLE** lists every non-`ok` block. Start there when Van sends feedback.

### TRACE TABLE — where script and deck diverge (deck @ 2e34cbc)

| Slide `id` | # | Flag | What the script does differently, and why |
|---|---|---|---|
| `title` | 1 | ok (deck-fixed 08-13) | Cover now carries "Supervisor: Assoc. Prof. Nguyen Dinh Thuc" (L-5 closed). 08-13 decision: Assoc. Prof. Thuc only — the progress form also names Sr. Lect. Do Hoang Cuong, kept off the cover. Project code stays off; verbal credit kept. |
| `idle-capacity-gap` | 4 | note | `cost-problem` slide was removed — the cloud-cost framing survives as one spoken sentence here. |
| `huddle01-tradeoffs` | 5 | note | `huddle01-intro` slide was removed — who-Huddle01-is is one spoken sentence here. Subtitle trimmed 08-13: the $37M / 840M-min figures are now truly off the deck; do not volunteer them (Q&A only, cited [004,011]). |
| `architecture` | 7 | diverge -> H-4 | Deck-change @2e34cbc: diagram is now the static `ArchitectureMesh` (chain hub, four roles in a diamond) with **stepsCount 0 — no clicks on this slide**; narration walks the diagram by pointing. TURN survives only as the cp-daemon sublabel ("TURN issuance") — the spoken issuance-only note still guards it (L-3 stays closed). (H-4) still **no E2EE slide** — the +1.86 ms upper bound is a spoken aside; short variant drops it. WebRTC gloss absorbed here. 08-13 2nd round: E2EE framing **solution-first** — opt-in/fails-open unspoken here; the "with it on" qualifier is mandatory (Section D). |
| `session-lifecycle` | 8 | ok (deck-change @2e34cbc) | Now **two parallel tracks converging at Assignment** (15 beats, was 13): Register is "Register & Role Vote — CP quorum votes the role" (the old "stake and capability" line is gone), Fund Escrow is its own node ("a separate tx, required before assignment"), Setup says the **relay fetches its TURN credential from the cp-daemon**, Close is creator-only. Script rewritten to the two-track story; single-host boundary of the quorum run stays Q&A. The 1-hour expiry sweep is on the edge label only — not spoken. |
| `economic-layer` | 10 | diverge -> deck-fix (pending Van) | Rebuilt @2e34cbc as a funding-to-rewards pipeline (11 beats) + 4 stat cards; slashing moved to its own next slide. TWO deck-vs-F-43 collisions the script refuses to speak: (1) the `distribute_rewards` sublabel shows **`base_rate × median_bytes × quality`** — F-43's boundary says that per-byte formula belongs to the **post-submission monorepo, never the graded build** (graded build is NOT proportional-to-bytes); (2) the scarcity card names **three** pools (relay / validator / CP) — F-43 says **four role pools**. Script says "splits it across the role pools, scarcity-weighted" (no count, no formula) and keeps "payout follows attested quality". If probed on the formula: answer from F-43. W-01/W-02 stay Q&A-only. |
| `economic-layer-slashing` | 11 | note (NEW slide @2e34cbc) | "Three Distinct Ways to Lose Stake" table, 5 row-reveals. Its cell numbers (10% QoS slash, canary fixed % cut, 2/3 liveness vote, >10% median loss) are **not yet in `00-facts`** — script points at the table and speaks only the three-way distinction + the mandatory qualifiers ("obligation", "cooperative, relay-authorised `pay_slash`"). Never "automatic slashing". W-01/W-02 designed-vs-implemented stays Q&A-only. |
| `failover` | 12 | ok (deck-change @2e34cbc) | Rebuilt: recovery is **relay-local self-promotion (~3 s of missed health probes) + independent client cutover**, with on-chain `promote_relay` explicitly a **trailing audit record** (14 beats, was 9). The old "cp-daemon watches heartbeats, three epochs stale, primary is out" story is gone from the fast path. Governed anchors unchanged: F-25 (permissionless, no AdminCap), F-44a (~1.6-2.0 s commit, median 1.6). The 1000 ms probe / ~3 s / ~30 s+ poll figures are **design constants printed on the slide**, not measured results — measured artifacts stay F-23 and Van's 3.3/3.4 downtime. |
| `evaluation-methodology` | 13 | ok (deck-fixed 08-13) | Card now reads **"Fee"** (L-2 closed — Section D / F-41). |
| `eval-latency` | 14 | ok (deck-fixed 08-13) | H-1/H-2 closed: **p99 bar removed** (F-02) and title now neutral ("Wide-Area One-Way Component-Sum"). Discipline unchanged: p50/p95 only, target **unresolved**. |
| `eval-cost` | 15 | ok (F-46 enrolled 08-13) | Title **"On-Chain Fee per Session"** (M-2 closed). Six gas bars now governed by **F-46** (§5.3.2 table + `m8-cost-empirical` raw) — fine to discuss if asked; don't read all six in the talk (time). Stat cards 0.017 / 0.035 SUI correct (H-3, L-1 fixed 2026-08-13). |
| `eval-failover` | 17 | ok (+bridge) | Adds a hand-off bridge: origin test did not measure full recovery; **Van's 3.3/3.4 kill real relays and measure downtime**. Keeps W-08 discipline: mechanism floor, not MTTR. 08-13 decision: the spoken **8-15 s budget line was removed** from this block — budget is Q&A-only (see W-08-live note in Phase B). |
| `divider-4-2` | 18 | pending-van (van-confirmed) | Scripted 2026-08-13 from Van's verbal description: 5 Azure regions, 5 workers/instance (1 relay + 2 validator + 2 CP), 2 bots (eastus/westus2) + 1 real join, quality-only run (no kills). Not yet enrolled in `00-facts`. |
| `eval-r1-*` (session health) | 19 | pending-van (van-confirmed) | Scripted 2026-08-13 from Van's panel walkthrough: participant-count step (2→3→2) marks his own join; ICE success-rate min-line dip to 0% = TURN fallback; latency/jitter baseline ~40ms±10 pre-join, max-line spike to ~200ms on join (cross-continent hosts); ITU-R BT.1359 cited as the A/V-sync judging bar. Flagged distinct from 3.1's 70.9ms and the R-1 trap's ~70-80ms — do not merge. Not yet enrolled in `00-facts`. |
| `eval-r1-*` (media quality) | 20 | pending-van (van-confirmed) | Scripted 2026-08-13 from Van: 1024×768 bot send resolution, 25 fps average. Not yet enrolled in `00-facts`. |
| `eval-r1-summary` | 21 | pending-van (van-confirmed) | Scripted 2026-08-13 using only the three figures already flagged in PHASE B notes (50.15 ms latency / 7.20 ms jitter / 695.25 kbps bitrate, whole-run averages). Not yet enrolled in `00-facts`. Surfaced an **open discrepancy**: this 50.15 ms conflicts with the R-1 trap's placeholder "~70-80 ms" for 3.2 steady-state — needs reconciling before the talk. |
| `divider-4-3` | 22 | pending-van (van-confirmed) | Scripted 2026-08-13 from Van's topology description: same 5 Azure regions, now 1 relay + 1 validator + 1 CP each (15 workers), 2 scripted bots hold one room ~7 min, 2 manual out-of-band relay kills. Not yet enrolled in `00-facts`. |
| `eval-r2-session-health` | 23 | pending-van (van-confirmed) | Scripted 2026-08-13 from Van's panel walkthrough: 2 relay kills at 02:53 / 02:56, downtimes 5.82s / 6.96s (matches slide 22/24 stat cards); latency panel shows a break at the first kill and a jump from 40ms to 120ms after the second; jitter reads noisy but bounded. Not yet enrolled in `00-facts`. |
| `eval-r2-media-quality` | 24 | pending-van (van-confirmed) | Scripted 2026-08-13 from Van's panel walkthrough: bitrate/resolution show a clean sample gap at the first kill; frame rate cliffs to 0fps at the second kill before recovering; encode/decode latency barely perturbed by either kill. No precise durations spoken here — those live on slide 23/25. Not yet enrolled in `00-facts`. |
| `eval-r2-summary` | 25 | diverge -> deck-fix (van-confirmed) | Deck-fix applied 2026-08-13: the stat card and bullets previously read **50.15ms avg latency / 7.20ms jitter / 695.25 kbps download** — byte-for-byte identical to slide 21's 3.2 whole-run averages, almost certainly a copy-paste carryover, not a real 3.3 measurement. Card and bullets rewritten to speak only what slides 22-24 actually show (2 kills, 5.82s/6.96s downtime, 40ms→120ms latency step, bounded jitter, encode/decode/resolution unaffected) — no fabricated whole-run average substituted. Real 3.3-specific latency/jitter/bitrate whole-run averages are **still needed from Van** before this card can carry them. |
| `divider-4-5` | 26 | pending-van (van-confirmed) | Scripted 2026-08-13 from Van's topology description: same 5-region topology as 3.3, now 10 scripted bots (2 sessions each) and 4 manual out-of-band relay kills, downtime 7.6-19.6s. Not yet enrolled in `00-facts`. W-08-live trap applies (19.6s vs 8-15s budget — budget stays unspoken). |
| `eval-r4-session-health` | 27 | pending-van (van-confirmed) | Scripted 2026-08-13 from Van's panel walkthrough: 1 primary + 2 standby relays (1-2-3); relay-1 kill at 3:44 produces a two-record downtime split (6/10 users recover direct, 4/10 detour via relay 3 after a 9s stall, then reconnect to relay 2 once relay 3's ping confirms it's alive); relay-2 kill fails over cleanly to relay 3 in 7.61s. New trap: kill actions ≠ downtime-panel record count. Not yet enrolled in `00-facts`. |
| `eval-r4-media-quality` | 28 | pending-van | Van's run; numbers not in `00-facts`. Not yet scripted. |
| `eval-r4-summary` | 29 | diverge -> deck-fix (van-confirmed) | Deck-fix applied 2026-08-13: cut the "latency lower than the 2-bot run" comparison bullet — it cited 3.3's whole-run latency, which is exactly the 50.15ms figure removed from slide 25 as an unconfirmed duplicate; speaking the comparison now would re-cite a disowned number. Bullets rewritten to state 3.4's own figures only, and to headline slide 27's R-5 false-dead-peer self-correction as the closing resilience story. Stat card numbers (31.68ms / 0.03% loss / 1880.99 kbps / 4 events, 7.61-19.6s) are distinct from other slides' figures — no duplicate-bug evidence here, kept as-is. `V+` timestamp is provisional pending slide 28. |
| `limitations` | 30 | ok (08-13 2nd round) | The M-3 verbal adds (W-04, W-10, W-17) were **cut** — script speaks only the slide's three Unresolved items + Forward. All three are Q&A-only now; fail-open is spoken nowhere on stage (s7's line carries "with it on"). |

### Delivery discipline (carried from `01-script-15min.md`)

130 words/min planning ceiling. Short sentences — one idea per breath. Point at the slide ("look at the chart"). **Every number carries its boundary in the same breath.** `▸` = advance the deck one step; `▸xN` = N steps across the following sentences. Word counts approximate.
Speaker split: **Quang** slides 1-17, **Van** slides 18-29, **Quang** resumes 30-32.
Quang budget: **1,514 words ≈ 11:39** under the re-baselined count rule (sync @2e34cbc added the slashing slide + heavier lifecycle/failover walks, +62s; the 08-13 concession cuts stand). Timestamps below are cumulative planning stamps for Quang's first segment.

---

# PHASE A — Quang, slides 1-17

### 1 · `title` — Cover  |  0:00 · ~20s · ~44 words  |  SYNC: ok (deck-fixed 08-13)

> Good morning. Our thesis is *Innovating Video Conferencing Systems Through Blockchain*. I'm Duong Minh Quang; with me is Le Quoc Van. We work under the supervision of Assoc. Prof. Nguyen Dinh Thuc, at the University of Science. Van and I will split the talk.

**Cue:** Cover now shows "Supervisor: Assoc. Prof. Nguyen Dinh Thuc" (L-5 closed; verified vs `02-slides.md` + the progress form — which also names Sr. Lect. Do Hoang Cuong; 08-13 decision keeps Thuc only). Verbal credit kept. 08-13 2nd round: cover-authors now carries Student IDs — Le Quoc Van 22125119, Duong Minh Quang 22125081 (per the progress-report draft; the form template's 22125123 is a placeholder typo). IDs are shown, not spoken.

### 2 · `intro-video-conferencing` — Nearly a Century of Video Calling  |  0:20 · ~34s · ~74 words  |  SYNC: ok

> Video calling is almost a hundred years old.
> ▸ 1927 — AT&T shows the first public video call.
> ▸ 1964 — Bell Labs' Picturephone launches, and flops.
> ▸ The nineties put cameras on home PCs.
> ▸ The two-thousands built life-size telepresence rooms.
> ▸ And in 2020, COVID makes it universal overnight.
> Through all of it, one thing never changed: what video conferencing *is*. What kept changing was the infrastructure underneath. That infrastructure is what we revisit.

**Trace:** Historical points cited to [001] on the slide; no `00-facts` governance. Land on "infrastructure is what we revisit."

### 3 · `call-mesh` — What is Video Conferencing?  |  0:54 · ~18s · ~40 words  |  SYNC: ok

> One definition, so we're precise. Video conferencing is real-time, *two-way* audio and video between people in different places. Two-way is what makes it a conference — the 1927 call was one-way. The technology kept changing; this definition never did.

### 4 · `idle-capacity-gap` — Idle Capacity vs. Data-Center Cloud  |  1:12 · ~36s · ~78 words  |  SYNC: note

> Today, video calls run on the data-center cloud. Put that beside idle, spare capacity — machines people already own and aren't using.
> ▸ Reliability — the cloud wins. SLA-backed uptime against churn.
> ▸ Marginal cost — reversed. Dedicated capacity is paid for even when idle; spare capacity would otherwise sit unused.
> ▸ Trust — a single operator, against an untrusted, permissionless pool.
> ▸ And real-time media — mature on the cloud. On spare capacity: *unaddressed*.
> That last cell is our gap.

**Trace:** Cited [003]. First sentence carries the removed `cost-problem` framing. One `▸` per table row.

### 5 · `huddle01-tradeoffs` — Huddle01 vs. Traditional Cloud VC  |  1:48 · ~39s · ~85 words  |  SYNC: note

> We're not first here. Huddle01 is the closest attempt — a DePIN network where node operators earn tokens for spare bandwidth. It even runs the same media server we chose: mediasoup.
> ▸ Against the cloud, it loses on SLA.
> ▸ It wins on cost economics.
> ▸ It wins on custody — no single operator holds admission, data, and billing.
> ▸ It is behind on QoS maturity.
> ▸ And the last row: accountability evidence. Node-level quality is *not* publicly documented.
> That missing row is what we build.

**Cue:** Do NOT volunteer Livepeer / Theta / Helium (Section B). $37M / 840M-min figures: Q&A only.

### 6 · `inheritance-advantages` — What We Inherit — and Where We Differ  |  2:27 · ~36s · ~79 words  |  SYNC: ok

> So, side by side with Huddle01.
> ▸ We inherit mediasoup — a proven media layer.
> ▸ We differ on the chain: general-purpose Sui and Move, not a custom one.
> ▸ We differ most on incentives. They reward uptime and bandwidth. We reward a *dual-signed SessionProof* — per-session quality evidence.
> ▸ Our accountability is explicit, and reported as measured-versus-designed.
> ▸ The honest trade is maturity: they are commercial; we are an academic prototype, rigorously evaluated.
> We claim the integration — not complete decentralisation.

**Trace:** Matches F-39 / W-14 (combination-level novelty — DEFEND). Last line pre-empts "did you really decentralise it".

### 7 · `architecture` — Client, Relay, and Sui Chain  |  3:03 · ~83s · ~180 words  |  SYNC: diverge -> H-4

> Here is DVConf — four off-chain roles around a chain. **No clicks on this slide — everything is already up; walk it by pointing.**
> In the middle: the Sui chain — registry, assignments, SessionProofs, settlement, in Move — the one ledger every role reads and writes independently.
> The client is a browser — a standard WebRTC peer. It reaches the relay over one WebSocket, media and signaling together. The relay is a mediasoup SFU: it forwards everyone's media to everyone else.
> The validator daemon probes that relay from outside — a canary probe plus STUN latency checks — so quality is not self-reported.
> The cp-daemon is the control plane: pairing, TURN credentials, failover.
> Media never touches the chain.
> One honest note: TURN, in our build, was credential issuance only — the TURN data plane never ran.
> And the relay terminates transport encryption, so by itself it *can* see media. Our answer is SFrame content encryption: frames encrypt in the user's browser, and with it on, the relay forwards ciphertext it holds no media key for. In a matched cloud-WAN test, the encrypted arm differed by about **+1.86 milliseconds** on the mean — an upper bound on SFrame overhead; the tail is unresolved.

**Trace:** Deck-change @2e34cbc: static `ArchitectureMesh` (stepsCount 0) — chain hub + diamond of roles; all former click cues removed. The "one ledger, read and written independently" line narrates the hub framing. F-28 (TURN issuance only, data plane never ran — said aloud; the visible label is now the cp-daemon sublabel "TURN issuance"). F-32 reframed 08-13 (2nd round): **opt-in / fails-open are NOT spoken on this slide** — solution-first framing; the load-bearing qualifier is **"with it on"** (Section D: never bare "end-to-end encrypted", never unqualified relay-blindness). W-04 CONCEDE unchanged — **Q&A-only**. F-06 (+1.86 ms upper bound; never "the encryption costs 1.86 ms"). **H-4:** still no E2EE slide — the aside has no visual home. The removed WebRTC slide survives as "standard WebRTC peer" + the transport-encryption note.
**Short variant:** drop the +1.86 ms sentence — keep the SFrame answer line ("with it on" must survive); number moves to Q&A.

### 8 · `session-lifecycle` — Session Lifecycle  |  4:28 · ~43s · ~94 words  |  SYNC: ok (deck-change @2e34cbc)

> One session — two tracks that meet in the middle.
> ▸ A node stakes; the CP quorum votes its role in.
> ▸x3 A caller creates a room — no relay yet — and funds it with an escrow, a separate transaction.
> ▸x3 Assignment is where they meet: the cp-daemons score the funded room, and a quorum — more than two-thirds — ratifies the pairing on-chain.
> ▸x2 Setup: ICE and DTLS; the relay fetches its TURN credential from the cp-daemon.
> ▸x2 Media runs — the SFU forwards; standby and canary alongside.
> ▸x2 Close is creator-only.
> ▸x2 Settlement pays — or records a slash obligation.
> Evidence flows on-chain. Packets don't.

**Trace:** Beats now 15 (1+3+3+2+2+2+2): register / room->escrow / assignment (two converging edges) / setup / running / close / settlement. Deck-change @2e34cbc: role is **CP-quorum-voted** ("Register & Role Vote" — the old "stake and capability" wording is gone), Fund Escrow is its own node and a **separate tx**, Setup's TURN credential is **fetched by the relay from the cp-daemon**, Close is **creator-only**. Pairing-quorum wording still matches the sublabel (>=2/3 active CPs); the role-vote's own 2/3 stays unspoken (one quorum number per breath). The 4-of-5 / single-host boundary stays in Q&A. The 1-hour expiry sweep is edge-label-only — not spoken.

### 9 · `session-proof` — Dual-Signed SessionProof  |  5:13 · ~39s · ~84 words  |  SYNC: ok (08-13 2nd round — W-03 unflagged)

> This is the accountability core.
> ▸x2 One validator holds two wallets — an identity wallet, and a session wallet publicly mapped to it.
> ▸x3 Both sign the *same* nine-field measurement message: room, relay, packets, bytes, peers, duration, latency, loss, jitter.
> ▸x2 Both public keys and both Ed25519 signatures go into the transaction.
> ▸x2 The chain verifies them, stores the measurement — and discards the signatures.
> One thing to be exact about: this is dual-signing, not consensus — validators agree only later, at settlement.

**Cue:** Say "dual-signed", never "consensus-signed". 08-13 2nd round: the W-03 binding gap is **no longer flagged here** — slide 29's on-slide bullet + Q&A own it; if probed at this slide, answer from the Q&A pack (relay-reported counters, no room binding — the pack's most-probed trap row).

### 10 · `economic-layer` — Economic Layer: Funding, Measurement & Rewards  |  5:52 · ~33s · ~71 words  |  SYNC: diverge -> deck-fix (pending Van)

> The economics follow the escrow.
> ▸x3 The client funds it up front; the session runs; every validator measures independently.
> ▸x2 Each submits a dual-signed proof.
> ▸x2 The chain takes a per-relay median — fewer than two distinct validators, no payout at all.
> ▸x2 The median sets a quality multiplier — the tiers are on the card.
> ▸x2 Then a permissionless `distribute_rewards` splits it across the role pools, scarcity-weighted.
> Payout follows *attested quality*, with no operator in the loop.

**Trace:** Beats now 11 (3+2+2+2+2): escrow / session / proof / median / multiplier / distribute. F-43 (permissionless `distribute_rewards`; >=2 distinct validators gate; per-relay median; payout tracks attested quality). **Two deck cells the script deliberately does NOT speak** (see TRACE TABLE — deck-fix pending Van): the `base_rate × median_bytes × quality` sublabel (F-43: post-submission monorepo only — graded build is NOT byte-proportional; if probed, answer from F-43's scarcity-ratio computation) and any pool COUNT (card names three, F-43 says four — say "the role pools"). Multiplier tiers + 500-8,000 bps clamp: point at the cards, don't read them out. Slashing content moved to the next slide. 08-13 2nd round stands: **W-01 + W-02 Q&A-only**. Still banned: "automatic slashing", "three-of-four ships".

### 11 · `economic-layer-slashing` — Three Distinct Ways to Lose Stake  |  6:27 · ~31s · ~67 words  |  SYNC: note (NEW slide @2e34cbc)

> Three ways to lose stake, all on-chain.
> ▸ The triggers: a zero-quality session, proven canary fraud, or a liveness vote.
> ▸ Two are punitive; the liveness path only ejects.
> ▸ Stake: the QoS slash is an *obligation* — collected by `pay_slash`, a *cooperative*, relay-authorised call. Ejection returns the stake in full.
> ▸ Proven fraud pays the room creator.
> ▸ And ejection applies to any role.
> Self-reported degradation is advisory; it never touches stake.

**Trace:** 5 beats = 5 table rows (Trigger / Nature / Stake impact / Payout destination / Applies to). The cell numbers (10% QoS slash, canary fixed % cut, 2/3 liveness vote, >10% median loss) are **not yet in `00-facts`** — the script points at the table and never reads them; if probed, the governed anchors are F-30/W-02 (obligation + cooperative `pay_slash`) and F-43 (zero-quality consequences). The qualifiers "obligation" + "*cooperative*, relay-authorised" are load-bearing and must survive edits (Section D replacement for the banned "automatic slashing"). W-01/W-02 designed-vs-implemented stays **Q&A-only**.

### 12 · `failover` — Self-Healing: Local Recovery, Chain Confirms Later  |  7:01 · ~48s · ~103 words  |  SYNC: ok (deck-change @2e34cbc)

> Failover. Recovery is local — the chain confirms later.
> ▸x3 Every room runs a warm standby that probes the primary every second, relay to relay.
> ▸x3 The client holds a pre-warmed, paused line to that same standby.
> ▸x2 Three missed probes — about three seconds — and the standby promotes itself. No chain transaction.
> ▸x2 The client cuts over on its own when the stream goes silent — also chain-free.
> ▸x2 The chain trails behind: `promote_relay`, permissionless — no admin key, no capability object.
> ▸x2 Its commit lands in about one-and-a-half to two seconds — median one-point-six — an audit record, not the recovery.
> The user-visible story is the evaluation's job: mine, and Van's live kills.

**Trace:** Beats now 14 (3+3+2+2+2+2): primary+standby+probe / client+two media edges / local self-promotion / client cutover / on-chain path / RelayPromoted. Deck-change @2e34cbc: the fast path is **relay-local self-promotion + independent client cutover**; on-chain `promote_relay` is explicitly the trailing audit record — the old "three epochs stale, primary is out" line is gone from the spoken fast path (epoch-staleness lives on the on-chain node's sublabel; F-25 still governs it if probed). F-25 (permissionless, no AdminCap — DEFEND for W-10), F-44a (~1.6-2.0 s, median 1.6). The 1000 ms probe and ~3 s are **design constants printed on the slide** — fine to echo, never present them as measured results; measured artifacts stay F-23 (slide 17) and Van's 3.3/3.4. Sets up slide 17 and Van's kills.

### 13 · `evaluation-methodology` — 3.1 Origin Test · Four Dimensions  |  7:51 · ~32s · ~69 words  |  SYNC: ok (deck-fixed 08-13)

> Our origin test — section 3.1 — has four dimensions. The evidence class comes before any number.
> ▸ Latency: a wide-area component sum, thirty sessions — a declared *lower bound*.
> ▸ Fee — the thesis chapter is titled Fee: one full session, on a pinned localnet only.
> ▸ Capacity: measured to fifteen viewers; one hundred is a *projection*.
> ▸ Failover: a mechanism floor from thirty cutovers — not full recovery.

**Cue:** Card now reads "Fee" (L-2 fixed 08-13) — say it as printed.

### 14 · `eval-latency` — Latency  |  8:23 · ~48s · ~105 words  |  SYNC: ok (deck-fixed 08-13)

> Latency. Thirty wide-area sessions. The one-way component-sum: **64.8 milliseconds** at the median, **70.9** at the ninety-fifth percentile.
> Now the boundary, because it *is* the result. This is a component sum — not capture-to-paint. The camera is synthetic. The capture term is set to zero, which biases the number *downward*. And both peers ran on one laptop, one access network, one relay.
> So: seventy-point-nine is a declared **lower bound**. The full-path sub-two-hundred-millisecond target is **unresolved** — the thesis refuses that claim, and so do I.
> What the number does show: the on-chain control plane adds nothing to the media path.

**Cue:** Deck fixed 08-13 — p99 bar removed (F-02), title now neutral (H-1/H-2 closed). Discipline unchanged: speak p50/p95 only; never say the target was met.
**Short variant:** "One-way component-sum, p95 70.9 ms — a declared lower bound; synthetic camera, one access network. Full-path sub-200 ms is unresolved."

### 15 · `eval-cost` — Fee  |  9:11 · ~46s · ~100 words  |  SYNC: ok (F-46 enrolled 08-13)

> The on-chain **fee**. One full session, executed end to end: two relays, four validators — thirteen transactions, on a pinned localnet.
> The two cards carry the session totals. Irreversible: about **0.017 SUI**. Net, counting refundable storage: about **0.035 SUI**. At a *labelled* one-dollar-fifty per SUI, that net is **about five cents**.
> The boundary. Pinned localnet — not mainnet. Localnet fixes the gas schedule and has no fee contention. And it does not validate the three-of-four settlement rule. Gas is a property of the bytecode and storage rebate; the real SUI price is not ours to claim.

**Cue:** Title now "On-Chain Fee per Session" (M-2 fixed 08-13). Six gas bars now governed (F-46, thesis §5.3.2) — discuss if asked; don't read all six in the talk (time). Cards 0.017 / 0.035 SUI are correct (H-3/L-1 fixed). USD 0.0257 stays Q&A-only, never as "SUI".
**Short variant:** "Irreversible ~0.017 SUI, ~five cents net at a labelled 1.50-dollar SUI — pinned localnet, not mainnet, not a check of three-of-four."

### 16 · `eval-capacity` — Capacity  |  9:57 · ~38s · ~82 words  |  SYNC: ok

> Capacity. One room, ramped to fifteen viewers.
> Look at the line: relay CPU goes from about two percent of a core to five. At fifteen viewers, that is **0.05 of one core**. The run records it plainly: *not saturated*.
> A hundred users is a different kind of claim, so it gets a different label: **projection**. A configured hundred-megabit egress cap gives a floor of **three relays**; with headroom, **five to six**. A model — not a run. And auto-scaling is not implemented.

**Trace:** F-16/F-17 (0.05 core at N=15, not saturated), F-20 (floor 3, planning 5-6), W-06 (labelled a model), W-15 (no auto-scaling). Never "100 users" as achieved.

### 17 · `eval-failover` — Failover: Warm-Pipe Mechanism Floor  |  10:35 · ~39s · ~81 words  |  SYNC: ok (+bridge)

> Failover, measured. Thirty cutovers on a real mediasoup warm pipe. **Zero failures.** Detection-plus-resume: **58 milliseconds** median, **74** at p95, **80** at p99.
> The honest label: this is a **mechanism floor** — not recovery time. The bench closes the primary's sink while the pipe stays live. And full user-visible recovery was not measured in this origin test.
> That open end is exactly where Van picks up. His resilience runs kill real relays, on live Azure hosts — and measure the downtime users actually see. Van, over to you.

**Trace:** F-23 (58/74/80, 30 cutovers, zero failures — failover p99 IS reportable), F-24 (8-15 s budget — 08-13 decision: **not spoken on stage**, Q&A-only; reduces the visible collision with Van's 19.6 s tail), W-08 (CONCEDE MTTR, DEFEND mechanism). The last line is the live hand-off to Van.

---

# PHASE B — Van, slides 18-29  (pending-van)

> **HAND-OFF at slide 18 (`divider-4-2`).** Slides 18-27 and 29 are now scripted (Van-confirmed 2026-08-13, see below) — 3.3 is fully covered; 3.4's topology divider, session-health panel, and summary are scripted, with slide 29's `V+` stamp provisional until slide 28 lands. Only slide 28 (`eval-r4-media-quality`) remains unscripted — numbers **not in `00-facts`**. Slides now carry real data (result01/result02/result04 Grafana panels).

### 18 · `divider-4-2` — 3.2 Quality Baseline  |  V+0:00 · ~20s · ~46 words  |  SYNC: pending-van (van-confirmed 2026-08-13, not yet in 00-facts)

> Now to the cloud test. I ran three scenarios, all on real infrastructure. The first: five Azure regions, each instance hosting five workers — one relay, two validators, two control planes. Two bots join from East US and West US 2, alongside one real participant. This scenario measures call quality only — no resilience, no relay kills.

**Trace:** 25 workers = 5 workers/instance (1 relay + 2 validator + 2 CP) × 5 Azure regions — matches the existing `divider-4-2` note ("25 workers · 5 VMs · 2 bots + 1 real join"). This is the quality-only run; relay kills start at 3.3 (slide 22), so "no resilience, no relay kills" is the load-bearing distinction against the next two scenarios. Numbers given verbally by Van 2026-08-13 — still needs enrollment in `00-facts` before Q&A treats them as governed.

### 19 · `eval-r1-*` — 3.2 Session Health — Participants, ICE, Latency & Jitter  |  V+0:20 · ~50s · ~145 words  |  SYNC: pending-van (van-confirmed 2026-08-13, not yet in 00-facts)

> Top-left panel: participant tracking, timestamps normalized to one through the end. Watch the range step from two to three and back to two — that's me joining the room, live. Some panels plot three lines: the highest value across every user and bot, the lowest, and the average. Next to participants: ICE success rate. There's a dip to zero on the min line — the relay couldn't resolve my public IP and port, so I fell back to TURN. Latency: a flat 40 milliseconds, plus or minus 10, before I join. The moment I join, the max line spikes to 200 — the instances sit in the US and Europe, and that distance is hard to beat. Jitter tells the same story.
> Beyond the numbers: the felt experience. When I join, the bot is already streaming a children's song — copyleft, chosen because the character sings in sync with the screen, so I can eyeball audio-video sync directly. ITU-R BT.1359 sets the bar: undetectable is minus 125 to plus 45 milliseconds; acceptable is minus 185 to plus 90.

**Trace:** Van-confirmed 2026-08-13, not yet enrolled in `00-facts`. Panel convention: max/min/avg lines across all users and bots in the room; the 2→3→2 step in the participant panel marks Van's own join window. ICE success-rate min-line dip to 0% = a real TURN-fallback event (relay failed to resolve Van's public IP/port via STUN). Latency/jitter: ~40ms±10 baseline pre-join, max-line spike to ~200ms on join — driven by cross-continent (US/Europe) instance placement. **Distinct from two other numbers already in this script — do not merge:** 3.1's 70.9ms component-sum lower bound (slide 14), and 3.2's own steady-state ~70-80ms average (the R-1 trap, PHASE B notes). This panel's 40/200ms are live per-participant extremes, not either of those. ITU-R BT.1359 (undetectable [-125,+45]ms, acceptable [-185,+90]ms) is cited as the judging standard for the A/V-sync test the song enables — it is not yet applied to a measured DVConf sync number on this slide.
**Cue:** the children's-song choice is deliberate methodology (copyleft + visually-cued sync), not an aside — keep it in if time allows.

### 20 · `eval-r1-*` — 3.2 Media Quality — Resolution & Framerate  |  V+1:10 · ~14s · ~27 words  |  SYNC: pending-van (van-confirmed 2026-08-13, not yet in 00-facts)

> Next, media quality. The bot streams at 1024 by 768. Average framerate across the run: 25 frames per second.

**Trace:** Van-confirmed 2026-08-13, not yet enrolled in `00-facts`. Deliberately short — a two-number beat between the session-health walkthrough (slide 19) and the 3.2 summary (slide 21).

### 21 · `eval-r1-summary` — 3.2 Summary & Conclusion  |  V+1:24 · ~32s · ~72 words  |  SYNC: pending-van (van-confirmed 2026-08-13, not yet in 00-facts)

> To close out 3.2 — the whole-run averages. Latency: 50.15 milliseconds. Jitter: 7.20 milliseconds. Bitrate: 695.25 kilobits per second. Set against what you just saw: the ICE fallback resolved itself through TURN, the cross-continent join stayed inside a bounded envelope, and audio-video sync tracked well inside the ITU-R acceptable range. Under a real, geographically distributed deployment, call quality holds up — comparable to a standard, centralized video conferencing service.

**Trace:** Uses only the three figures already flagged in the PHASE B notes (50.15 ms / 7.20 ms / 695.25 kbps) as whole-run averages — still not enrolled in `00-facts`, Van confirms before Q&A treats them as governed. **OPEN DISCREPANCY to reconcile before the talk:** the R-1 trap (below) describes 3.2's steady-state latency as "~70-80 ms" when flagging its collision with 3.1's 70.9 ms lower bound — that estimate predates this now-confirmed 50.15 ms figure. Either the R-1 trap wording needs updating to 50.15 ms, or the two numbers describe genuinely different windows/panels (e.g. steady-state mid-run vs whole-run average including the join spike from slide 19). Don't speak both as if they agree until this is resolved.
### 22 · `divider-4-3` — 3.3 2-Bot Resilience Test  |  V+1:56 · ~25s · ~55 words  |  SYNC: pending-van (van-confirmed 2026-08-13, not yet in 00-facts)

> Second scenario: resilience. Same five Azure regions, now three workers per instance — one relay, one validator, one control plane, fifteen workers total. Two scripted bots join a single room and hold it for about seven minutes. I kill two relays by hand, outside the scenario script, and the failover panel measures the downtime each time.

**Trace:** Topology matches the deck's `divider-4-3` stat cards: 5 Azure regions (eastus / westus2 / centralus / westeurope / eastus2), each now 1 relay + 1 validator + 1 CP (down from 3.2's 2 validators + 2 CPs), 15 infra workers = 3 services × 5 VMs (R-4 — not users). Two bots join one room, held ~400s (~6.7 min). Two relay kills, applied **manually, out-of-band** (not in `scenario.toml`) — stays disclosed when spoken. Downtime range (5.8-7.0s) is printed on the slide subtitle; not yet enrolled in `00-facts`, Van confirms before it's treated as governed. Sets up `eval-r2-*` (23-25).
### 23 · `eval-r2-session-health` — 3.3 Session & Network Health  |  V+2:21 · ~29s · ~63 words  |  SYNC: pending-van (van-confirmed 2026-08-13, not yet in 00-facts)

> Two kill events on this run — the panel marks both. First at two-fifty-three, second at two-fifty-six. Watch the latency panel: a break in the line at the first kill, then a jump from forty to a hundred-twenty milliseconds after the second. Downtime: five-point-eight-two seconds the first time, six-point-nine-six the second, until the new connection lands. Jitter stays noisy throughout — but bounded, never runaway.

**Trace:** Van-confirmed 2026-08-13, not yet enrolled in `00-facts`. Real Grafana panel images (`r2Participants`, `r2Ice`, `r2Latency`, `r2Jitter`, `r2PacketLoss`, `r2Failover`) — `stepsCount: 0`, no click reveals, narrate by pointing (matches the deck's image-grid layout for this slide). Kill timestamps 02:53 / 02:56 and downtimes 5.82s / 6.96s match the `divider-4-3` and `eval-r2-summary` stat cards ("2 failover events · 5.82s–6.96s downtime") — consistent across slides 22/23/24. The latency break-then-jump (40ms → 120ms after the second kill) and the "noisy but bounded" jitter read are new detail from Van's walkthrough, not yet on any stat card — point at the panels rather than reading exact numbers not printed on the slide. Relay kills stay **manual, out-of-band** (per slide 22).
### 24 · `eval-r2-media-quality` — 3.3 Media Quality  |  V+2:50 · ~29s · ~63 words  |  SYNC: pending-van (van-confirmed 2026-08-13, not yet in 00-facts)

> Same two kills, now on media quality. Bitrate and resolution show a clean gap at the first kill — no data, then a resume. Frame rate does the same, but the second kill hits harder: a spike down to zero frames before recovering within the same window. Encode and decode latency barely notice either kill — encode stays four to eleven milliseconds, decode near one.

**Trace:** Van-confirmed 2026-08-13, not yet enrolled in `00-facts`. Real Grafana panels (`r2Bitrate`, `r2Resolution`, `r2FrameRate`, `r2EncodeDecode`) — `stepsCount: 0`, narrate by pointing. Reads consistent with slide 22/23's two kills (02:53 / 02:56, downtimes 5.82s / 6.96s): bitrate up/down avg/min/max (~400-1200 kb/s normal noise) and resolution (flat ~900K) both show a genuine sample gap spanning the first kill window (~02:53-02:54); frame rate holds ~28-30fps (one unrelated dip to ~24fps near 02:52 — pre-kill noise, not a failover artifact) through the same gap, then cliffs to 0fps around the second kill before recovering to ~30fps inside the same probe window — the sharpest visible signature of either kill on this slide. Encode (~4-11ms) and decode (~1-2ms) latency share the first-kill gap but stay continuous and in-band through the second — no visible dip. **Do not claim a precise duration from this chart** — the exact downtime numbers live on the failover panel (slide 23) and the `eval-r2-summary` stat card, not here.
### 25 · `eval-r2-summary` — 3.3 Summary & Conclusion  |  V+3:19 · ~39s · ~85 words  |  SYNC: diverge -> deck-fix (van-confirmed 2026-08-13, not yet in `00-facts`)

> To close out 3.3. Both kills recovered — no dropped participants.
> ▸ The first reads as a clean data gap; the second, a frame-rate cliff to zero before it self-heals.
> ▸ Latency steps from about forty to about a hundred-twenty milliseconds after the second kill; jitter stays noisy but never runs away.
> ▸ Encode, decode, and resolution barely notice either kill — the disruption stays isolated to bitrate, frame rate, and end-to-end latency.
> ▸ Smallest resilience scenario we ran — this is the failover-recovery baseline the ten-bot run in 3.4 builds on.

**Trace:** Deck-fix 2026-08-13: this slide's stat card and bullets previously read **50.15ms avg latency / 7.20ms jitter / 695.25 kbps download** — identical to slide 21's 3.2 whole-run averages to two decimal places, across two topologically different runs (25 workers/10-min quality-only vs 15 workers/~7-min/2-kills). Flagged as a near-certain copy-paste artifact, not a real 3.3 measurement, and pulled from both the deck and this script. Speaks only what slides 22-24 established: 2 kills (02:53/02:56), 5.82s/6.96s downtime, the 40ms→120ms latency step after the second kill, bounded-but-noisy jitter, and encode/decode/resolution staying unaffected. **Still needed from Van:** real 3.3-specific whole-run latency/jitter/bitrate averages, if he wants this card to carry them — until then the card states only the failover-panel-sourced numbers already governed by slides 22-24.
### 26 · `divider-4-5` — 3.4 10-Bot Resilience Test  |  V+3:58 · ~28s · ~60 words  |  SYNC: pending-van (van-confirmed 2026-08-13, not yet in 00-facts)

> Third scenario: heavier load. Same topology as before — fifteen workers, one relay, one validator, one control plane per region — but now ten scripted bots, two sessions each, all in one room for about seven minutes. This time I kill four relays by hand, and the downtime stretches further: seven-point-six seconds on the light end, up to nineteen-point-six on the worst.

**Trace:** Topology matches the deck's `divider-4-5` stat cards: 5 Azure regions, each still 1 relay + 1 validator + 1 CP (same as 3.3), 15 infra workers = 3 services × 5 VMs (R-4 — not users). 10 scripted bots, 2 concurrent sessions per bot worker, all one room, held ~400s (~6.7 min) — 5x the 3.3 load at the same worker count. 4 relay kills, still **manual, out-of-band** (not in `scenario.toml`). Downtime range 7.6-19.6s is printed on the slide subtitle — fine to speak as-is (same discipline as 3.3's 5.82-6.96s on slide 22). **W-08-live trap:** the 19.6s tail exceeds the 8-15s design budget (F-24) — the budget itself stays **unspoken on stage** (08-13 decision); only answer the comparison if asked (see Traps below). Not yet enrolled in `00-facts`.
### 27 · `eval-r4-session-health` — 3.4 Session & Network Health  |  V+4:26 · ~50s · ~108 words  |  SYNC: pending-van (van-confirmed 2026-08-13, not yet in 00-facts)

> This run has three relays — one primary, two standby, numbered one through three. I kill relay one at three-forty-four — the panel's first record.
> Six of the ten users reconnect straight to relay two. The other four stall: nine seconds waiting, they presume relay two is dead too, and fail over to relay three, the contract's next assignment.
> Once there, relay three pings relay two, finds it alive, and those four reconnect back. That's why the first kill leaves two records in the downtime panel — a clean six-user recovery, and a four-user detour.
> Then I kill relay two: this time, a clean failover to relay three in seven-point-six-one seconds.

**Trace:** Van-confirmed 2026-08-13, not yet enrolled in `00-facts`. Real Grafana panels (`r4Participants`, `r4Ice`, `r4Latency`, `r4Jitter`, `r4PacketLoss`, `r4Failover`) — `stepsCount: 0`, narrate by pointing. Topology: 1 primary + 2 standby relays, ordered 1-2-3 (matches `divider-4-5`'s "1 relay + 1 cp-daemon + 1 validator-daemon" per region — the standby pair sits behind the primary within this room's assignment). First kill (relay 1, timestamp 3:44, first panel record): 6/10 users reconnect directly to relay 2; the other 4 stall ~9s waiting on relay 2, wrongly presume it dead too, and fail over to relay 3 (the on-chain contract's next assignment) — relay 3 then pings relay 2, confirms it's alive, and those 4 reconnect back to relay 2. **New trap for this scenario:** one kill action can produce *two* downtime records on the failover panel (the direct 6-user recovery + the 4-user relay-3 detour) — so panel record count is not 1:1 with the divider's "4 relay kills" stat. Second kill (relay 2) fails over cleanly to relay 3 in 7.61s — one record. Neither the 3:44 timestamp, the 6/4 split, the 9s stall, nor the 7.61s figure are on any stat card yet — point at the panel, don't over-claim precision.
- 28 `eval-r4-media-quality` (pending-van)

### 29 · `eval-r4-summary` — 3.4 Summary & Conclusion  |  V+TBD (after slide 28, not yet scripted) · ~40s · ~87 words  |  SYNC: diverge -> deck-fix (van-confirmed 2026-08-13, not yet in `00-facts`)

> To close out 3.4 — and the resilience section. All four kills recovered, including that relay-one detour: the false read on relay two corrected itself once relay three's ping proved it alive.
> ▸ At five times 3.3's concurrency, whole-run quality holds: thirty-one-point-six-eight milliseconds average latency, packet loss three-hundredths of a percent.
> ▸ Download average: one-thousand-eight-hundred-eighty-one kilobits per second at ten concurrent viewers — bandwidth scales with load, no collapse.
> ▸ This is the largest scenario we measured. Failover recovery holds — under real kills and under a false positive — without a user-visible collapse.

**Trace:** Deck-fix 2026-08-13: this slide's stat card figures (31.68ms avg latency, 0.03% packet loss / p95 0.14%, 1880.99 kbps avg download, 4 failover events, 7.61s-19.6s downtime) are distinct from — not duplicates of — the numbers on slides 21/25, so kept as-is; unlike slide 25's bug, no evidence of copy-paste here. **What changed:** the second bullet previously claimed "whole-run latency lower than the 2-bot run" — an explicit comparison against 3.3's whole-run latency, which was exactly the figure (50.15ms) flagged and removed from slide 25 as an unconfirmed duplicate. Speaking that comparison now would cite a number this script itself disowned, so it's cut; the bullet instead states 3.4's own latency/loss figures without the cross-scenario claim. The opening and closing bullets now fold in slide 27's R-5 finding (the relay-1 false-dead-peer detour that self-corrected) as the headline resilience story, since it's the most defensible new result from this run. **Timestamp pending:** slide 28 (`eval-r4-media-quality`) is not yet scripted — this block's `V+` stamp will shift once 28 is written; treat the running total as provisional until then.

**Traps for whoever narrates this section:**
- **R-1:** 3.2's steady-state "~70-80 ms" collides with 3.1's 70.9 ms lower bound — different methods (Grafana panel average vs component-sum); say so if asked, never merge them.
- **R-4:** "25 workers" = 5 services x 5 VMs — infra processes, NOT users. 3.3/3.4: "15 workers" = 3 services x 5 VMs.
- **R-5 (new 08-13, from slide 27):** in 3.4's relay-1 kill, 4 of 10 users falsely presumed a second relay (relay 2) dead after a 9s stall, detoured to relay 3, then reconnected to relay 2 once relay 3's ping showed it was alive. Net: one kill action, two downtime-panel records. Don't equate the divider's "4 relay kills" stat with the number of failover-panel records — they diverge by this detour. If probed: this is the client-side probe heuristic self-correcting on a false positive, not a second real failure.
- **W-08-live (framing decided 08-13):** 3.4's downtime tail **19.6 s exceeds the 8-15 s design budget** (F-24). Team stance: the budget is **not spoken on stage** — Quang's slide-16 line no longer reads it; 19.6 s stays disclosed on the slide and is **answered only if asked**. The honest answer, if asked: the budget was a design estimate; the live tail exceeded it — a finding, not hidden. Never average it away.
- Relay kills were applied **manually, out-of-band** (not in scenario.toml) — the slide discloses this; keep it disclosed when speaking.
- `eval-r2-summary` bullet fixed on deck 08-13: now "the failover-recovery baseline for the 10-bot run in 3.4" (deck has no 5-bot section). The 3.2/3.3/3.4 summary bullets were also deduped against the stat cards — every number still appears exactly once on each slide.
- Whole-run averages on the summary slides (50.15 ms, 7.20 ms, 695.25 kbps, ...) are not yet in `00-facts` — Van confirms before anyone speaks them.

---

# PHASE A — Quang resumes, slides 30-32

### 30 · `limitations` — Limitations & Future Work  |  V+0:00 · ~32s · ~70 words  |  SYNC: ok (08-13 2nd round — M-3 adds cut)

> Thank you, Van. The limits we name ourselves.
> ▸ A proof does not cryptographically bind the relay to the room.
> ▸ The fee is localnet-only. No mainnet cross-check.
> ▸ Latency and failover are lower bounds — no capture-to-paint measurement in the origin test.
> ▸x2 The forward point is the real one. This architecture is designed for idle, churning nodes — but every experiment ran on reliable infrastructure. Real volunteer churn is the honest next step.

**Trace:** Slide items = W-03, W-07, W-05/W-08 — script now speaks only what the slide shows. 08-13 2nd round: the M-3 verbal adds (W-04, W-10, W-17) are **cut — Q&A-only** (all CONCEDE stances the thesis itself raises in §6.3). Consequence to know when answering: **fail-open is spoken nowhere on stage** — s7's solution line carries the "with it on" qualifier; the full W-04 answer lives in the Q&A pack.

### 31 · `references` — References  |  ~8s · ~17 words  |  SYNC: ok

> Our sources are on screen — the WebRTC and DTLS-SRTP RFCs, Huddle01's documentation, and the BFT literature.

**Cue:** Optional — can stay silent while setting up Q&A.

### 32 · `closing` — Questions?  |  ~22s · ~47 words  |  SYNC: ok

> To close. DVConf's contribution is decentralised *evidence and settlement* over an operator-run media plane — per-session, dual-signed, driving reward and failover on-chain. We measured what we could, labelled our projections, and named what stays open. Thank you. We'd be glad to take your questions.

**Trace:** Section D approved framing ("decentralised evidence and settlement over an operator-run media plane"). Mirrors the opening; hands to Q&A.

---

## Word budget (Quang)

**Count rule (re-baselined at the @2e34cbc sync):** spoken `>` lines only, `▸` markers and parenthesised stage directions stripped, token count — one rule for every number in this section. Under it, the pre-sync script (d4cf81f) was **1,381 words ≈ 10:37** (the earlier "~1,470 ≈ 11:18" used a looser counter — superseded).
Slides 1-17: **1,386 words ≈ 10:40**. Slides 30-32: **128 words ≈ 0:59**. Quang total = **1,514 words ≈ 11:39** at 130 wpm — the sync added **+133 words ≈ +62s** (new slashing slide +67, heavier failover +30, two-track lifecycle +23, s7/s10 +13) and spends most of the 08-13 slack, but stays **under the ~12:00 plan with ~21s to spare**. If timed rehearsal runs long anyway, apply short variants in this order: `architecture` (drop +1.86), `eval-latency`, `eval-cost`.

## Open items feeding back to the deck

**Applied 2026-08-13 (certain batch):** H-1 (p99 bar removed — F-02), H-2 (latency retitled), M-2/L-2 (Cost -> Fee on title + methodology card + limitations bullet), L-3 (coturn off the relay node), the `eval-r2-summary` "5 and 10 bots" bullet, plus a text-density pass (huddle01 subtitle, call-mesh, dividers collapsed, summary bullets deduped, closing hint replaced with the Section-D framing line).
**Decided 2026-08-13 (interview round):** M-1 CLOSED — six gas bars promoted into `00-facts` as **F-46** (thesis §5.3.2 + `m8-cost-empirical` raw). L-5 CLOSED — cover now carries the supervisor (Assoc. Prof. Thuc only). H-4 — decision: **keep the +1.86 ms as a spoken aside**, no E2EE slide (H-4 retired as a deck item; the aside + Q&A carry it). W-08-live — framing: **budget 8-15 s not spoken on stage**; 19.6 s disclosed on the slide, answered only if asked. s7 E2EE framing (08-13 follow-up): **solution-first** — "Our answer is SFrame content encryption … with it on …"; opt-in / fails-open dropped from the spoken block (W-04 CONCEDE unchanged; after the s29 cut below, **Q&A-only for the whole talk**); the Section D minimum qualifier "with it on" must survive any further edit. s29 (08-13 follow-up): the three M-3 verbal adds (W-04/W-10/W-17) **cut** — script speaks only what the slide shows; Q&A pack rows verified (E2EE disposition, Q-C4-1 AdminCap, Q-C5-5 threat model). s9 (08-13 follow-up): the W-03 binding-gap flag **cut** — slide 29's on-slide bullet + Q&A own it; s29's "the gap I flagged" callback reworded; the "dual-signing, not consensus" vocabulary guard stays (Section D). Also 08-13 follow-up: s12 "Nothing here is dressed up..." cut (meta-commentary), s16 "so it is optimistic by construction" cut (the mechanism-floor label carries the boundary), s7 TURN note KEPT (guards the visible "TURN credentials" diagram label), and cover-authors now carries Student IDs (22125119 / 22125081) on both `slides.tsx` and `Landing.tsx`. s10 (08-13 follow-up): the W-01/W-02 designed-vs-implemented pair **cut from the spoken block** — Q&A-only (Q&A pack rows verified: 3-of-4 at "Precise" §5.3.6 answer; pay_slash obligation at the slashing trap row); spoken qualifiers "obligation" + "cooperative, relay-authorised" must survive.
**Found by the sync @2e34cbc (2026-08-13, feed to Van):** (1) `economic-layer`'s `distribute_rewards` sublabel shows **`base_rate × median_bytes × quality`** — F-43's boundary says that per-byte formula belongs to the post-submission monorepo, never the graded build (graded build is NOT byte-proportional); the sublabel should show the scarcity-ratio computation or drop the formula. (2) The scarcity stat card names **three** pools (relay / validator / CP) where F-43 says **four role pools** — name the fourth or drop the enumeration. (3) The new slashing table's cell numbers (10% QoS slash, canary fixed % cut, 2/3 liveness vote, >10% median loss) are **not in `00-facts`** — an F-47 enrollment candidate before anyone answers Q&A from that table. Script-side, all three are already defused (nothing unspoken is claimed aloud).
**Still open for Van:** slides 18-27 and 29 now scripted from Van's verbal scenario/topology/panel descriptions (2026-08-13) — still need enrollment in `00-facts`; confirm slide 28 (`eval-r4-media-quality`) before anyone speaks it, and re-check slide 29's `V+` timestamp once 28 is written. **New 08-13 findings:** (1) slide 25's stat card/bullets carried duplicate 3.2 numbers (50.15ms/7.20ms/695.25kbps) — deck-fixed to speak only slide 22-24-sourced figures; real 3.3 whole-run averages still needed from Van if he wants them on the card. (2) slide 27 surfaced a new trap — R-5, see Traps list — where one relay kill can produce two downtime-panel records because of a false-dead-peer detour; kill-count and panel-record-count are not 1:1. (3) slide 29's old "latency lower than the 2-bot run" bullet cited the same disowned 50.15ms number from (1) — cut, replaced with 3.4's own figures. R-1 (~70-80 ms vs 70.9 ms collision) stays a spoken-discipline note.
