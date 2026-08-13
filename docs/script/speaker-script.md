---
name: 10-script-react-deck
description: Speaker script for the React deck (github.com/vidstall/slide, src/presentation/slides.tsx @ 0621fee, 31 slides). Keyed by slide id, not number, so it survives Van's edits. Every governed number traces to 00-facts.md; each block carries a SYNC flag (ok / diverge / pending-van). Phase A = Quang's spine (slides 1-16 + 29-31), rewritten 2026-08-13 in the 01-script-15min register: short sentences, slide deixis, click cues, word budgets, ~12:00 total at 130 wpm. Phase B (Van's 3.2-3.4, slides 17-28) is placeholder-only, pending Van.
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

Target deck: `vidstall/slide` -> `src/presentation/slides.tsx` at **`0621fee`** (31 slides; Van's restructure: dividers folded into eyebrows, eval renumbered 4.x -> 3.x, `webrtc-framework` / `cost-problem` / `huddle01-intro` / `eval-r1-setup` / `designed-vs-implemented` slides REMOVED, result02/result04 resilience data ADDED as 3.3 / 3.4).
Number authority: **`00-facts.md`** (Section A registry, Section C stances, Section D banned phrases). Rule 5: no number that is not in that sheet.

## How this script stays in sync with the deck

- **One block per slide, keyed by the slide `id`.** When Van reorders or edits, the `id` still maps.
- Each block carries a **`SYNC` flag**: `ok` / `diverge -> <backlog id>` (script deliberately speaks the safe version) / `pending-van` (Van's numbers, not in `00-facts`).
- The **TRACE TABLE** lists every non-`ok` block. Start there when Van sends feedback.

### TRACE TABLE — where script and deck diverge (deck @ 0621fee)

| Slide `id` | # | Flag | What the script does differently, and why |
|---|---|---|---|
| `title` | 1 | diverge -> L-5 | Cover omits supervisor + project code; the open credits him verbally. |
| `idle-capacity-gap` | 4 | note | `cost-problem` slide was removed — the cloud-cost framing survives as one spoken sentence here. |
| `huddle01-tradeoffs` | 5 | note | `huddle01-intro` slide was removed — who-Huddle01-is is one spoken sentence here. Subtitle trimmed 08-13: the $37M / 840M-min figures are now truly off the deck; do not volunteer them (Q&A only, cited [004,011]). |
| `architecture` | 7 | diverge -> H-4 | (L-3 closed 08-13: "coturn TURN" removed from the relay node; the TURN-issuance-only note stays spoken.) (H-4) still **no E2EE slide** — the +1.86 ms upper bound is a spoken aside; short variant drops it. Also absorbs a one-breath WebRTC gloss (the `webrtc-framework` slide was removed). |
| `session-lifecycle` | 8 | ok (deck-change) | Assignment is now "cp-daemon quorum (>=2/3 active CPs) ratifies pairing on-chain" — script updated to match; single-host boundary of the quorum run stays Q&A. |
| `economic-layer` | 10 | note | `designed-vs-implemented` slide was removed. The two mandatory concessions (W-01 settlement = 2 proofs + mean; W-02 slashing = cooperative obligation, not seizure) are now **spoken here**, one breath each. Never "automatic slashing", never "three-of-four ships". |
| `evaluation-methodology` | 12 | ok (deck-fixed 08-13) | Card now reads **"Fee"** (L-2 closed — Section D / F-41). |
| `eval-latency` | 13 | ok (deck-fixed 08-13) | H-1/H-2 closed: **p99 bar removed** (F-02) and title now neutral ("Wide-Area One-Way Component-Sum"). Discipline unchanged: p50/p95 only, target **unresolved**. |
| `eval-cost` | 14 | diverge -> M-1 | Title now **"On-Chain Fee per Session"** (M-2 closed 08-13). Six per-function gas bars stay: raw-traceable (`m8-cost-empirical`, e2-provenance row 107) but **not in `00-facts`** — never read them off. Stat cards 0.017 / 0.035 SUI are correct (H-3, L-1 fixed 2026-08-13). |
| `eval-failover` | 16 | ok (+bridge) | Adds a hand-off bridge: origin test did not measure full recovery; **Van's 3.3/3.4 kill real relays and measure downtime**. Keeps W-08 discipline: mechanism floor, not MTTR. |
| `divider-4-2` .. `eval-r4-summary` | 17-28 | pending-van | Van's runs; numbers not in `00-facts`. See PHASE B notes — includes the **new 19.6 s vs 8-15 s budget trap**. |
| `limitations` | 29 | diverge -> M-3 | Script adds, verbally: E2EE opt-in/fails-open (W-04), AdminCap breadth (W-10), no threat model (W-17). All raised by the thesis itself. |

### Delivery discipline (carried from `01-script-15min.md`)

130 words/min planning ceiling. Short sentences — one idea per breath. Point at the slide ("look at the chart"). **Every number carries its boundary in the same breath.** `▸` = advance the deck one step; `▸xN` = N steps across the following sentences. Word counts approximate.
Speaker split: **Quang** slides 1-16, **Van** slides 17-28, **Quang** resumes 29-31.
Quang budget: **~1,560 words ≈ 12:00**. Timestamps below are cumulative for Quang's first segment.

---

# PHASE A — Quang, slides 1-16

### 1 · `title` — Cover  |  0:00 · ~20s · ~44 words  |  SYNC: diverge -> L-5

> Good morning. Our thesis is *Innovating Video Conferencing Systems Through Blockchain*. I'm Duong Minh Quang; with me is Le Quoc Van. We work under the supervision of Assoc. Prof. Nguyen Dinh Thuc, at the University of Science. Van and I will split the talk.

**Cue:** Verify supervisor name before rehearsal. Credit him aloud — the cover omits it.

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

### 7 · `architecture` — Client, Relay, and Sui Chain  |  3:03 · ~72s · ~156 words  |  SYNC: diverge -> H-4

> Here is DVConf — four off-chain roles and a chain.
> ▸x3 The client is a browser — a standard WebRTC peer. It reaches the relay over one WebSocket, media and signaling together. The relay is a mediasoup SFU: it forwards everyone's media to everyone else.
> ▸x2 The validator daemon probes that relay from outside — a canary probe plus STUN latency checks — so quality is not self-reported.
> ▸x2 The cp-daemon is the control plane: pairing, TURN credentials, failover.
> ▸x5 And the Sui chain holds the registry, the assignments, the SessionProofs, and settlement — in Move.
> Media never touches the chain.
> Two honest notes. TURN, in our build, was credential issuance only — the TURN data plane never ran. And the relay terminates transport encryption, so by itself it *can* see media. Content-blindness is an opt-in layer — SFrame — and it fails open. In a matched cloud-WAN test, the encrypted arm differed by about **+1.86 milliseconds** on the mean — an upper bound on SFrame overhead; the tail is unresolved.

**Trace:** F-28 (TURN issuance only, data plane never ran — said aloud; L-3 closed 08-13, coturn off the relay node), F-32 (E2EE opt-in, fails open), F-06 (+1.86 ms upper bound; never "the encryption costs 1.86 ms"). **H-4:** still no E2EE slide — the aside has no visual home. Deck-change: cp-daemon node + canary-probe sublabel narrated. The removed WebRTC slide survives as "standard WebRTC peer" + the transport-encryption note; never say bare "end-to-end encrypted" of the relay path (Section D).
**Short variant:** drop the +1.86 ms sentence — keep "opt-in SFrame that fails open"; number moves to Q&A.

### 8 · `session-lifecycle` — Session Lifecycle  |  4:15 · ~37s · ~81 words  |  SYNC: ok (deck-change)

> One session, end to end.
> ▸x3 A node registers — stake and capability. A caller creates a room, and an escrow that funds it.
> ▸x2 Assignment: the cp-daemons score candidates, and a quorum — more than two-thirds — ratifies the pairing on-chain.
> ▸x2 Setup issues ICE, DTLS, and TURN credentials.
> ▸x2 Then media runs — the SFU forwards, nodes heartbeat.
> ▸x4 Close ends the session, and settlement pays the relay — or records a slash obligation.
> Evidence flows on-chain. Packets don't.

**Trace:** Quorum wording matches the new sublabel (>=2/3 active CPs). The 4-of-5 / single-host boundary stays in Q&A unless asked.

### 9 · `session-proof` — Dual-Signed SessionProof  |  4:52 · ~51s · ~110 words  |  SYNC: ok

> This is the accountability core.
> ▸x2 One validator holds two wallets — an identity wallet, and a session wallet publicly mapped to it.
> ▸x3 Both sign the *same* nine-field measurement message: room, relay, packets, bytes, peers, duration, latency, loss, jitter.
> ▸x2 Both public keys and both Ed25519 signatures go into the transaction.
> ▸x2 The chain verifies them, stores the measurement — and discards the signatures.
> Two things to be exact about. This is dual-signing, not consensus — validators agree only later, at settlement. And the probe leans on relay-reported counters; it does not prove this relay served this room. That binding gap is ours, and it's in the limitations.

**Cue:** Say "dual-signed", never "consensus-signed". State the binding gap unprompted (W-03).

### 10 · `economic-layer` — Economic Layer: Rewards & Slashing  |  5:43 · ~43s · ~93 words  |  SYNC: note

> The economics run off that proof.
> ▸x3 A stored proof feeds a quality check.
> ▸x2 Good quality: a permissionless `distribute_rewards` splits the room's escrow across four role pools. Payout follows *attested quality* — not bytes, not stake.
> ▸x2 Zero quality: the chain records a `RelaySlashed` obligation.
> ▸x2 Collecting it is `pay_slash` — a *cooperative* call, authorised by the relay. Designed: automatic seizure. Implemented: this obligation ledger. Same honesty on settlement — designed three-of-four; implemented two proofs and their mean.
> One proof drives both outcomes, with no operator in the loop.

**Trace:** F-43 (permissionless distribute_rewards, four pools; payout tracks attested quality). W-01 + W-02 spoken here — the `designed-vs-implemented` slide is gone, so the two concessions moved into this block (one breath each). Still banned: "automatic slashing", "three-of-four ships".

### 11 · `failover` — Self-Healing: Relay Failover  |  6:26 · ~39s · ~85 words  |  SYNC: ok (deck-change)

> Failover, concretely.
> ▸x2 Every room carries a warm standby — a paused transport, pipe already up.
> ▸x3 The cp-daemon watches heartbeats. Three epochs stale, and the primary is out.
> ▸x2 Then *anyone* can call `promote_relay`. No admin key. No capability object.
> ▸x2 The on-chain commit lands in about one-and-a-half to two seconds — median one-point-six.
> That number is the chain commit — not what a user sees. The full recovery story is in the evaluation: mine, and Van's live kills.

**Trace:** F-25 (permissionless, >3 epochs, no AdminCap — DEFEND for W-10), F-44a (~1.6-2.0 s, median 1.6). Watcher is now labelled "cp-daemon: Heartbeat Watcher" — narrated as cp-daemon. Sets up slide 16 and Van's 3.3/3.4.

### 12 · `evaluation-methodology` — 3.1 Origin Test · Four Dimensions  |  7:05 · ~36s · ~78 words  |  SYNC: ok (deck-fixed 08-13)

> Our origin test — section 3.1 — has four dimensions. The evidence class comes before any number.
> ▸ Latency: a wide-area component sum, thirty sessions — a declared *lower bound*.
> ▸ Fee — the thesis chapter is titled Fee: one full session, on a pinned localnet only.
> ▸ Capacity: measured to fifteen viewers; one hundred is a *projection*.
> ▸ Failover: a mechanism floor from thirty cutovers — not full recovery.
> Nothing here is dressed up as more than it is.

**Cue:** Card now reads "Fee" (L-2 fixed 08-13) — say it as printed.

### 13 · `eval-latency` — Latency  |  7:41 · ~48s · ~105 words  |  SYNC: ok (deck-fixed 08-13)

> Latency. Thirty wide-area sessions. The one-way component-sum: **64.8 milliseconds** at the median, **70.9** at the ninety-fifth percentile.
> Now the boundary, because it *is* the result. This is a component sum — not capture-to-paint. The camera is synthetic. The capture term is set to zero, which biases the number *downward*. And both peers ran on one laptop, one access network, one relay.
> So: seventy-point-nine is a declared **lower bound**. The full-path sub-two-hundred-millisecond target is **unresolved** — the thesis refuses that claim, and so do I.
> What the number does show: the on-chain control plane adds nothing to the media path.

**Cue:** Deck fixed 08-13 — p99 bar removed (F-02), title now neutral (H-1/H-2 closed). Discipline unchanged: speak p50/p95 only; never say the target was met.
**Short variant:** "One-way component-sum, p95 70.9 ms — a declared lower bound; synthetic camera, one access network. Full-path sub-200 ms is unresolved."

### 14 · `eval-cost` — Fee  |  8:29 · ~46s · ~100 words  |  SYNC: diverge -> M-1

> The on-chain **fee**. One full session, executed end to end: two relays, four validators — thirteen transactions, on a pinned localnet.
> The two cards carry the session totals. Irreversible: about **0.017 SUI**. Net, counting refundable storage: about **0.035 SUI**. At a *labelled* one-dollar-fifty per SUI, that net is **about five cents**.
> The boundary. Pinned localnet — not mainnet. Localnet fixes the gas schedule and has no fee contention. And it does not validate the three-of-four settlement rule. Gas is a property of the bytecode and storage rebate; the real SUI price is not ours to claim.

**Cue:** Title now "On-Chain Fee per Session" (M-2 fixed 08-13). Still do NOT read the six per-function gas bars — raw-traceable (`m8-cost-empirical`) but not in `00-facts` (M-1). Cards 0.017 / 0.035 SUI are correct (H-3/L-1 fixed). USD 0.0257 stays Q&A-only, never as "SUI".
**Short variant:** "Irreversible ~0.017 SUI, ~five cents net at a labelled 1.50-dollar SUI — pinned localnet, not mainnet, not a check of three-of-four."

### 15 · `eval-capacity` — Capacity  |  9:15 · ~38s · ~82 words  |  SYNC: ok

> Capacity. One room, ramped to fifteen viewers.
> Look at the line: relay CPU goes from about two percent of a core to five. At fifteen viewers, that is **0.05 of one core**. The run records it plainly: *not saturated*.
> A hundred users is a different kind of claim, so it gets a different label: **projection**. A configured hundred-megabit egress cap gives a floor of **three relays**; with headroom, **five to six**. A model — not a run. And auto-scaling is not implemented.

**Trace:** F-16/F-17 (0.05 core at N=15, not saturated), F-20 (floor 3, planning 5-6), W-06 (labelled a model), W-15 (no auto-scaling). Never "100 users" as achieved.

### 16 · `eval-failover` — Failover: Warm-Pipe Mechanism Floor  |  9:53 · ~46s · ~100 words  |  SYNC: ok (+bridge)

> Failover, measured. Thirty cutovers on a real mediasoup warm pipe. **Zero failures.** Detection-plus-resume: **58 milliseconds** median, **74** at p95, **80** at p99.
> The honest label: this is a **mechanism floor** — not recovery time. The bench closes the primary's sink while the pipe stays live, so it is optimistic by construction. Our design budget for full recovery was eight to fifteen seconds — and in this origin test, we did not measure it.
> That open end is exactly where Van picks up. His resilience runs kill real relays, on live Azure hosts — and measure the downtime users actually see. Van, over to you.

**Trace:** F-23 (58/74/80, 30 cutovers, zero failures — failover p99 IS reportable), F-24 (8-15 s budget, unmeasured in 4.1/3.1), W-08 (CONCEDE MTTR, DEFEND mechanism). The last line is the live hand-off to Van.

---

# PHASE B — Van, slides 17-28  (pending-van)

> **HAND-OFF at slide 17 (`divider-4-2`).** 3.2 Quality Baseline + 3.3/3.4 Resilience are Van's runs — numbers **not in `00-facts`**. No spoken numbers scripted until Van confirms. Slides now carry real data (result01/result02/result04 Grafana panels).

- 17 `divider-4-2` — 3.2 Quality Baseline (25 workers · 5 VMs · 2 bots + 1 real join)
- 18-20 `eval-r1-*` — session health / media quality / summary
- 21 `divider-4-3` — 3.3 2-Bot Resilience (15 workers · 2 relay kills · 5.8-7.0s downtime)
- 22-24 `eval-r2-*`
- 25 `divider-4-5` — 3.4 10-Bot Resilience (15 workers · 4 relay kills · 7.6-19.6s downtime)
- 26-28 `eval-r4-*`

**Traps for whoever narrates this section:**
- **R-1:** 3.2's steady-state "~70-80 ms" collides with 3.1's 70.9 ms lower bound — different methods (Grafana panel average vs component-sum); say so if asked, never merge them.
- **R-4:** "25 workers" = 5 services x 5 VMs — infra processes, NOT users. 3.3/3.4: "15 workers" = 3 services x 5 VMs.
- **W-08-live (NEW):** 3.4's downtime tail **19.6 s exceeds the 8-15 s design budget**. Honest line: the budget was a design estimate; the live tail exceeded it — that is a finding to report, not to hide. Do not average it away.
- Relay kills were applied **manually, out-of-band** (not in scenario.toml) — the slide discloses this; keep it disclosed when speaking.
- `eval-r2-summary` bullet fixed on deck 08-13: now "the failover-recovery baseline for the 10-bot run in 3.4" (deck has no 5-bot section). The 3.2/3.3/3.4 summary bullets were also deduped against the stat cards — every number still appears exactly once on each slide.
- Whole-run averages on the summary slides (50.15 ms, 7.20 ms, 695.25 kbps, ...) are not yet in `00-facts` — Van confirms before anyone speaks them.

---

# PHASE A — Quang resumes, slides 29-31

### 29 · `limitations` — Limitations & Future Work  |  V+0:00 · ~48s · ~105 words  |  SYNC: diverge -> M-3

> Thank you, Van. The limits we name ourselves.
> ▸ A proof does not cryptographically bind the relay to the room — the gap I flagged at the SessionProof.
> ▸ The fee is localnet-only. No mainnet cross-check.
> ▸ Latency and failover are lower bounds — no capture-to-paint measurement in the origin test.
> Three more the slide keeps short: encryption is opt-in and it fails open. A broad set of operations still sits under the deployer's AdminCap. And there is no project-wide threat model yet.
> ▸x2 The forward point is the real one. This architecture is designed for idle, churning nodes — but every experiment ran on reliable infrastructure. Real volunteer churn is the honest next step.

**Trace:** Slide items = W-03, W-07, W-05/W-08. **M-3:** W-04, W-10, W-17 added verbally — all CONCEDE stances the thesis raises itself.
**Short variant:** keep the three slide items + the churn point; move the three spoken adds to Q&A.

### 30 · `references` — References  |  ~8s · ~17 words  |  SYNC: ok

> Our sources are on screen — the WebRTC and DTLS-SRTP RFCs, Huddle01's documentation, and the BFT literature.

**Cue:** Optional — can stay silent while setting up Q&A.

### 31 · `closing` — Questions?  |  ~22s · ~47 words  |  SYNC: ok

> To close. DVConf's contribution is decentralised *evidence and settlement* over an operator-run media plane — per-session, dual-signed, driving reward and failover on-chain. We measured what we could, labelled our projections, and named what stays open. Thank you. We'd be glad to take your questions.

**Trace:** Section D approved framing ("decentralised evidence and settlement over an operator-run media plane"). Mirrors the opening; hands to Q&A.

---

## Word budget (Quang)

Slides 1-16: ~1,390 words ≈ **10:40**. Slides 29-31: ~170 words ≈ **1:20**. Quang total ≈ **12:00** at 130 wpm — matches the 20-minute joint-talk plan (Van 3.2-3.4 ≈ 6-8 min). If rehearsal runs long, apply short variants in this order: `architecture` (drop +1.86), `eval-latency`, `eval-cost`, `limitations`.

## Open items feeding back to the deck

**Applied 2026-08-13 (certain batch):** H-1 (p99 bar removed — F-02), H-2 (latency retitled), M-2/L-2 (Cost -> Fee on title + methodology card + limitations bullet), L-3 (coturn off the relay node), the `eval-r2-summary` "5 and 10 bots" bullet, plus a text-density pass (huddle01 subtitle, call-mesh, dividers collapsed, summary bullets deduped, closing hint replaced with the Section-D framing line).
**Still open:** M-1 (six gas bars — raw-traceable via `m8-cost-empirical` / e2-provenance row 107, but not in `00-facts`: promote them or keep unspoken), H-4 (an E2EE/Trust-Model slide — the +1.86 ms aside still has no visual home), L-5 (supervisor on cover). For Van: how 3.4's 19.6 s tail is framed against the 8-15 s budget.
