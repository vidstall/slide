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
| `divider-4-2` .. `eval-r4-summary` | 18-29 | pending-van | Van's runs; numbers not in `00-facts`. See PHASE B notes — includes the **new 19.6 s vs 8-15 s budget trap**. |
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

> **HAND-OFF at slide 18 (`divider-4-2`).** 3.2 Quality Baseline + 3.3/3.4 Resilience are Van's runs — numbers **not in `00-facts`**. No spoken numbers scripted until Van confirms. Slides now carry real data (result01/result02/result04 Grafana panels).

- 18 `divider-4-2` — 3.2 Quality Baseline (25 workers · 5 VMs · 2 bots + 1 real join)
- 19-21 `eval-r1-*` — session health / media quality / summary
- 22 `divider-4-3` — 3.3 2-Bot Resilience (15 workers · 2 relay kills · 5.8-7.0s downtime)
- 23-25 `eval-r2-*`
- 26 `divider-4-5` — 3.4 10-Bot Resilience (15 workers · 4 relay kills · 7.6-19.6s downtime)
- 27-29 `eval-r4-*`

**Traps for whoever narrates this section:**
- **R-1:** 3.2's steady-state "~70-80 ms" collides with 3.1's 70.9 ms lower bound — different methods (Grafana panel average vs component-sum); say so if asked, never merge them.
- **R-4:** "25 workers" = 5 services x 5 VMs — infra processes, NOT users. 3.3/3.4: "15 workers" = 3 services x 5 VMs.
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
**Still open for Van:** confirm the 3.2-3.4 numbers into `00-facts` before anyone speaks them; R-1 (~70-80 ms vs 70.9 ms collision) stays a spoken-discipline note.
