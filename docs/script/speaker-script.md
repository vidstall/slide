---
name: 10-script-react-deck
description: Speaker script for the NEW React deck (github.com/vidstall/slide, src/presentation/slides.tsx @ 259e751). Keyed by slide id, not line number, so it survives Van's slide edits. Every number traces to 00-facts.md; each block carries a SYNC flag (ok / diverge / pending-van). Phase A = spine (cover, Motivation, Architecture, 4.1 Origin Test, Discussion). Phase B (Van's 4.2 quality + 4.3-4.6 resilience) is placeholder-only, pending Van.
metadata:
  type: reference
  area: meta
  status: draft
  created: 2026-08-13
  updated: 2026-08-13
  owner: quang
  authority: 00-facts.md — thesis repo (dvconf/docs/00-meta/defense-phanbien/00-facts.md); the reconciled fact sheet, every on-slide/spoken number traces to it
related: docs/DECK-FACT-REVIEW.md — deck fact & stance review (this repo)
---

# React deck — speaker script (Phase A)

Target deck: `vidstall/slide` -> `src/presentation/slides.tsx` at **`259e751`** (this repo).
Number authority: **`00-facts.md`** (Section A registry, Section C stances, Section D banned phrases). Rule 5: no number that is not in that sheet.

## How this script stays in sync with the deck (the trace mechanism)

- **One block per slide, keyed by the slide `id`** (e.g. ``eval-latency``), never by line number. When Van reorders or edits slides, the `id` still maps, so only the affected block needs a look.
- Each block carries a **`SYNC` flag**:
  - **`ok`** — spoken words match what the slide shows; nothing pending.
  - **`diverge -> <backlog id>`** — the slide has a `00-facts` issue; the script deliberately **speaks the safe version** and records the exact gap + backlog id (from `DECK-FACT-REVIEW.md`), so if the slide is later fixed the flag is dropped in one place.
  - **`pending-van`** — Van's content (4.2 / 4.3-4.6); numbers are not in `00-facts`; the script is a placeholder until Van confirms.
- The **TRACE TABLE** below lists every non-`ok` block in one place. When Van sends feedback, start here.

### TRACE TABLE — where script and deck currently diverge

| Slide `id` | Flag | What the script does differently, and why |
|---|---|---|
| `title` | diverge -> L-5 | Slide omits supervisor + project code; the open credits them verbally. Optional slide fix. |
| `webrtc-framework` | note | Slide says WebRTC media is "encrypted end-to-end (DTLS-SRTP)". True for the **standard's P2P** case; in DVConf's SFU the relay terminates DTLS-SRTP. Script keeps DTLS-SRTP as *transport* encryption and does **not** let it imply the DVConf relay is content-blind (that needs opt-in SFrame — see `architecture`). Prevents the Section D "relay never sees your video" trap. |
| `architecture` | diverge -> L-3, H-4 | (L-3) Node labelled "coturn TURN" — coturn was **never deployed**, only credentials issued (F-28); script says so, and the `designed-vs-implemented` slide backs it. (H-4) Deck has **no E2EE slide**; script weaves the +1.86 ms upper-bound result here as a bounded aside — flagged as a content gap to close later. |
| `evaluation-methodology` | diverge -> L-2 | Card reads "Cost"; script says **"Fee"** (Section D / F-41). |
| `eval-latency` | diverge -> H-1, H-2 | Script speaks **p50 64.8 / p95 70.9 ms as a one-way component-sum lower bound**; does **not** speak p99 = 72.0 (F-02), does **not** claim the sub-200 ms target was met (Section D) even though the slide title says "Below the 200ms Ceiling". |
| `eval-cost` | diverge -> H-3, M-2, M-1, L-1 | Script says **"Fee"**; headlines the two session totals from F-13/F-14 (irreversible **0.017 SUI ~ USD 0.026**, net **0.035 SUI ~ USD 0.05**); treats the slide's "0.0257 SUI irreversible" as a **mislabel** (0.0257 is the USD figure); does **not** enumerate the six per-function gas bars as authoritative (not in `00-facts`, Rule 5 / M-1). |
| `limitations` | diverge -> M-3 | Script **adds, verbally**, three disclosed limits the slide omits: E2EE opt-in/fails-open (W-04), `AdminCap` breadth (W-10), no project-wide threat model (W-17). The thesis raises all three itself. |
| `divider-4-2` .. `divider-4-6` + `eval-r1-*` | pending-van | Van's quality + resilience runs; not in `00-facts`. **Hand-off point.** Placeholder only — see Phase B. |

### Delivery discipline (carried from `01-script-15min.md`)
130 words/min planning ceiling (non-native speaker). **Every number carries its boundary in the same breath** — the boundary is the argument, not a hedge. Number-heavy slides have a *short variant* for when rehearsal runs long. Speaker split: **Quang** presents cover -> Discussion **and 4.1** (his localtest); **Van** takes over at `divider-4-2`. Word counts are approximate.

---

# PHASE A — spine script

## Section 00 — Cover

### `title` — Cover  |  SYNC: diverge -> L-5
**Slide:** "Innovating Video Conferencing Systems Through Blockchain" · VNU-HCMUS, Faculty of IT · Le Quoc Van · Duong Minh Quang.
**Spoken (~20s / ~45 words):**
> Good morning. Our thesis is *Innovating Video Conferencing Systems Through Blockchain*. I'm Duong Minh Quang; with me is Le Quoc Van. This is the Advanced Program in Computer Science at the University of Science, under the supervision of Assoc. Prof. Nguyen Dinh Thuc. Van and I will split the talk.
**Trace:** No number. **L-5** — supervisor name + project code T826/CTTT15 are spoken but not on the slide; optional to add. `[verify supervisor name against the front-matter before rehearsal]`.

---

## Section 01 — Motivation

### `intro-video-conferencing` — Introduction · "Nearly a Century of Video Calling"  |  SYNC: ok
**Slide:** Timeline [001], five points: 1927, 1964, 1990s, 2000s, 2020.
**Spoken (~55s / ~118 words):**
> Video calling is almost a hundred years old. In 1927 AT&T demonstrated the first public video call, scanned line by line off a mechanical disk. In 1964 Bell Labs' Picturephone launched — and flopped; it never reached even one percent of its projected hundred thousand units. The 1990s put camera kits on consumer PCs; the 2000s built life-size telepresence rooms. And in 2020, COVID made it universal overnight — Zoom's monthly meeting minutes grew roughly two-and-a-half-thousand-fold in three months. Across all of it, one thing never changed: what video conferencing *is*. What kept changing was the infrastructure underneath it — and that infrastructure is what we revisit.
**Trace:** Historical figures are cited to [001], not thesis results — no `00-facts` governance. Keep the arc; land on "infrastructure is what we revisit."

### `call-mesh` — Introduction · "What is Video Conferencing?"  |  SYNC: ok
**Slide:** Definition bullets + DeviceMesh graphic.
**Spoken (~35s / ~75 words):**
> So let's be precise about the term. Video conferencing is real-time, two-way transmission of audio and video between people in different places. The *two-way* part is what makes it "conferencing" — that 1927 call was one-way, image only. And it's a *conference* of participants, not just a single point-to-point link. The technology went from mechanical and analog to IP-based and cloud-delivered — but that definition held constant the whole way.
**Trace:** Definitional, cited [001]. No governed numbers.

### `cost-problem` — The Status Quo · "The Infrastructure Cost Problem"  |  SYNC: ok
**Slide:** three stat cards — High reliability · High fixed cost · Single-operator trust.
**Spoken (~40s / ~86 words):**
> Today's answer is the data-center cloud — AWS, Azure, GCP. It buys you three things. High reliability, on SLA-backed uptime — that's the default assumption for real-time media. But also high *fixed* cost: dedicated capacity, priced for peak load, paid whether it's idle or not. And single-operator trust: one company controls admission, quality assessment, and billing for the entire call. Those last two are the pressure points. That's where we ask whether there's a different substrate.
**Trace:** Framing cards, no thesis number. Sets up the gap.

### `idle-capacity-gap` — The Opportunity · "Idle Capacity vs. Data-Center Cloud"  |  SYNC: ok
**Slide:** ComparisonTable [003], rows: node reliability, marginal cost, trust model, real-time media support.
**Spoken (~50s / ~108 words):**
> Put the data-center cloud beside idle, spare capacity — the machines and bandwidth people already own and aren't using. On reliability the cloud wins: SLA-backed uptime versus high churn and no SLA. But on marginal cost it's reversed — dedicated capacity you pay for regardless, against capacity that would otherwise sit unused. On trust, a single operator against an untrusted, permissionless pool. And on real-time media, the cloud is mature — Zoom, Meet, LiveKit — while spare-capacity systems leave it *unaddressed*. That last cell is the gap this thesis targets: real-time conferencing on untrusted, spare capacity.
**Trace:** Cited [003] (volunteer-computing / sabotage tolerance). The "unaddressed" cell is the thesis's opening. No governed numbers.

### `huddle01-intro` — The Opportunity · "Huddle01: The Closest Existing Attempt"  |  SYNC: ok
**Slide:** four stat cards [004,011] — DePIN for RTC · mediasoup SFU · Arbitrum Orbit L2/L3 · $37M node sale, 840M+ minutes served.
**Spoken (~45s / ~97 words):**
> We're not first to the idea. Huddle01 is the closest existing attempt: a DePIN network where node operators contribute spare bandwidth for token rewards. Notably, it runs the *same* core media server we chose — mediasoup — but coordinates on its own purpose-built chain on Arbitrum Orbit. And it's real: a thirty-seven-million-dollar node sale, over eight hundred and forty million minutes served, mainnet live. So the question isn't "can this work at all" — Huddle01 shows it can. Our question is narrower: what does per-session *accountability* look like on that kind of substrate.
**Trace:** Huddle01 IS in the surveyed corpus (Section B) — fine to name. **Do not volunteer Livepeer / Theta / Helium** (Section B: zero hits in the thesis; if asked, one positioning sentence, pivot back to Huddle01/Datagram/Akash). $37M / 840M min are Huddle01's published figures via [004,011], not our numbers.

### `huddle01-tradeoffs` — The Opportunity · "Huddle01 vs. Traditional Cloud VC"  |  SYNC: ok
**Slide:** ComparisonTable [003,004] — reliability/SLA, infra cost, control & custody, QoS maturity, accountability evidence.
**Spoken (~40s / ~86 words):**
> Line them up honestly. Traditional cloud wins reliability — SLA-backed — and QoS maturity, from years of global routing. The DePIN model wins on cost economics and on custody: a permissionless node network, no single operator holding admission, data, and billing. But look at the last row — accountability evidence. Cloud vendors publish SLAs and audits; node-level quality in a DePIN network is *not* publicly documented. That missing row — verifiable, per-session quality evidence — is exactly what we set out to build.
**Trace:** Cited [003,004]. Honest both-sides table; lands on the accountability-evidence gap.

### `inheritance-advantages` — The Opportunity · "What We Inherit — and Where We Differ"  |  SYNC: ok
**Slide:** ComparisonTable [004] — SFU layer, coordination chain, node incentive model, accountability evidence, maturity.
**Spoken (~50s / ~108 words):**
> So here's what we inherit and where we diverge. We inherit mediasoup as the media layer — a deliberate, proven choice. We differ on the chain: not a custom purpose-built one, but a general-purpose chain, Sui with Move. We differ most on incentives: instead of rewarding raw uptime or bandwidth, we reward on a *dual-signed SessionProof* — per-session quality evidence. And on accountability, ours is explicit, hedged, and reported as measured-versus-designed. The honest trade is maturity: Huddle01 is funded and commercial; ours is an academic prototype — but a rigorously evaluated one. Our contribution is that integrated boundary, not a claim of complete decentralisation.
**Trace:** Matches the thesis's own three-contribution framing (F-39) and W-14 (novelty is combination-level — DEFEND). Last sentence pre-empts the "did you really decentralise it" question. No governed numbers.

### `webrtc-framework` — Background · "WebRTC: Real-Time Communication in Browsers"  |  SYNC: note (E2EE-bleed caution)
**Slide:** bullets [002,005,006] + FlowDiagram — W3C/IETF standard, 3 JS APIs, DTLS-SRTP mandatory, signaling undefined.
**Spoken (~55s / ~118 words):**
> One piece of background, because everything sits on it. WebRTC is the W3C and IETF standard that lets browsers exchange real-time audio, video, and data directly — no plugins, no installs. Three core APIs: MediaStream to capture, RTCPeerConnection to transport, RTCDataChannel for arbitrary data. Two properties matter for us. First, all WebRTC media is mandatorily encrypted on the wire by DTLS-SRTP — there is no unencrypted mode. Second — and this is deliberate — the standard leaves *signaling* undefined. How you exchange the session descriptions is left to the application. That undefined slot is precisely where a blockchain control plane can sit. Hold the encryption point, though — I'll come back to what it does and doesn't protect once a relay is in the path.
**Trace:** Cited [002,005,006]. **Caution:** DTLS-SRTP is end-to-end for the standard's P2P case, but in DVConf's SFU the relay terminates it. The last sentence deliberately defers the content-blindness claim to `architecture` so DTLS-SRTP is never spoken as "the DVConf relay can't see your media" (Section D banned).

---

## Section 02 — Proposed Architecture

### `architecture` — System Architecture · "Client, Relay, and Sui Chain"  |  SYNC: diverge -> L-3, H-4
**Slide:** FlowDiagram [007,008] — Client · Relay (mediasoup SFU + coturn TURN) · Validator Daemon (composite STUN + relay-counter probe) · Sui Chain (Registry · SessionProof · Settlement).
**Spoken (~75s / ~160 words):**
> Here's DVConf. Three roles. The **client** is an ordinary WebRTC browser peer. The **relay** is a mediasoup SFU — it forwards each participant's media to the others. The **validator daemon** independently probes the relay — a composite STUN plus relay-counter measurement — so quality isn't self-reported. And the **Sui chain** holds three things in Move: the registry of nodes, the SessionProofs, and settlement. Media stays off-chain, client-to-relay under DTLS-SRTP; only control and evidence go on-chain.
> Two honest boundaries here. One — that relay box lists coturn TURN, but in our build TURN was only ever *credential issuance*; the coturn data plane was never deployed. Two, on the encryption I flagged: DTLS-SRTP protects the wire, but the SFU terminates it, so on its own the relay *can* see plaintext media. Content-blindness is an additional, opt-in layer — SFrame — and it fails open. In a matched cloud-WAN test the encryption-enabled arm differed by about **+1.86 milliseconds** on the mean, interval excluding zero; because only that arm logged per frame, we treat it as an *upper bound* on SFrame overhead, and the tail is unresolved.
**Trace:** F-32 (E2EE opt-in, fails open), F-06 (+1.86 ms upper bound; Section D exact wording — never "the encryption costs 1.86 ms"), F-31 (probe = STUN + relay-reported counters). **L-3:** coturn never deployed (F-28) — stated aloud; backed later by `designed-vs-implemented`. **H-4:** the +1.86 ms result has **no slide** — it is spoken here as an aside. *Recommend Van add a small Trust-Model / E2EE slide so this has a visual home.* **Short variant:** drop the +1.86 ms sentence, keep "opt-in SFrame that fails open" — the number can move to Q&A.

### `session-lifecycle` — System Architecture · "Session Lifecycle"  |  SYNC: ok
**Slide:** FlowDiagram — Register -> Create Room -> Assignment -> Client Setup -> Media Running -> Close -> Settlement.
**Spoken (~55s / ~118 words):**
> One session, end to end. A node **registers** — it stakes and declares capability. A caller **creates a room**, which also creates an escrow object that funds it. **Assignment** is score-gated: the chain ranks eligible relays and validators and picks them. **Client setup** issues ICE, DTLS-SRTP, and TURN credentials. Then **media runs** — the SFU forwards, and nodes emit heartbeats. On **close**, the session ends. And **settlement** either rewards the relay or records a slash obligation. The important design point: admission and settlement are on-chain and rule-driven, while the media itself never touches the chain. Evidence flows on-chain; packets don't.
**Trace:** Matches lifecycle nodes. "Score-gated" assignment and escrow-funded room are design facts. No governed number spoken.

### `session-proof` — Trust Model · "Dual-Signed SessionProof"  |  SYNC: ok
**Slide:** FlowDiagram — Wallet A + Wallet B -> 9-field BCS measurement message -> tx args (2 pubkeys + 2 Ed25519 sigs) -> stored SessionProof (measurement fields only, signatures discarded).
**Spoken (~70s / ~150 words):**
> This is the accountability core. A SessionProof is a nine-field measurement message in BCS — room, relay, packets, bytes, peers, duration, latency, loss, jitter. It is **dual-signed by one validator's two wallets**: its identity wallet, and a session wallet that is publicly mapped to that identity — both signing the *same* message. Both public keys and both Ed25519 signatures go into the transaction; the chain verifies them, then stores only the measurement fields — the signatures are discarded once verified. Two things I want to be exact about. This is *not* consensus-signing — cross-validator agreement happens only later, at settlement. And the probe combines the validator's own STUN observations with *relay-reported* counters, and it does not independently prove the relay actually forwarded the media, or that this relay was assigned to this room. We disclose that binding gap directly; it's in the limitations.
**Trace:** Section D approved dual-signing phrasing (row 2026-08-09) — used verbatim in intent; F-31 / W-03 binding gap stated unprompted. Never "consensus-signed." No governed number.

### `economic-layer` — Trust Model · "Economic Layer: Rewards & Slashing"  |  SYNC: ok
**Slide:** FlowDiagram — SessionProof -> Quality Check -> distribute_rewards (RewardsDistributed) / RelaySlashed -> pay_slash (cooperative deduction from StakePosition).
**Spoken (~65s / ~140 words):**
> The economics run off that proof. A permissionless `distribute_rewards` call reads the stored proofs, checks per-relay median quality, and splits the room's escrow across four role pools — inverse-count shares, clamped and normalised. Two honest boundaries. Reward is **not** proportional to forwarded bytes and **not** stake-weighted — bytes are an attested input, nothing more. And on the penalty side: a zero-quality relay gets no reward and a `RelaySlashed` event — but that event records an *obligation*. It is **not** automatic seizure. The actual deduction needs a later, relay-authorised `pay_slash` — collection is cooperative. Settlement itself accepts **two** proofs and takes their arithmetic mean; the three-of-four design target is configured but not enforced. We concede that plainly rather than dress it up.
**Trace:** F-43 (permissionless distribute_rewards, four pools, clamps; NOT per-byte / NOT stake-weighted), F-30/W-01 (two proofs, arithmetic mean; three-of-four unenforced — CONCEDE), W-02 (obligation, cooperative pay_slash). Section D: never "automatic slashing", never "three-of-four ships". No governed number spoken.

### `failover` — Trust Model · "Self-Healing: Relay Failover"  |  SYNC: ok
**Slide:** FlowDiagram — Primary + Standby -> RelayHeartbeatWatcher (heartbeat > 3 epochs) -> promote_relay (permissionless, no AdminCap) -> RelayPromoted (on-chain commit ~1.6-2.0s).
**Spoken (~60s / ~130 words):**
> Failover is where decentralisation gets concrete. Each room carries a warm standby relay — a paused transport, pipe already up. A heartbeat watcher checks staleness; if the primary's heartbeat is more than three epochs old, any assigned relay can call `promote_relay`. And that call is genuinely **permissionless** — it takes no `AdminCap`, no capability object. On-chain, the promotion commits in about **one-and-a-half to two seconds**, median one-point-six. That's the one part of failover we instrumented. I'll be careful about what it means: it's the *on-chain* commit time, not the user-visible recovery. Full kill-to-rendered-media recovery we did not measure — I'll show the mechanism number in the evaluation and say exactly what it does and doesn't cover.
**Trace:** F-25 (permissionless, >3 epochs, no AdminCap — DEFEND asset for W-10), F-44a (~1.6-2.0 s, median 1.6 s, three localnet runs). Boundary: candidate freshness not contract-enforced; this is chain-commit, not MTTR. Sets up `eval-failover`.

---

## Section 03 — Evaluation · 4.1 Origin Test (Quang)

### `divider-4-1` — Evaluation · 4.1 "Origin Test"  |  SYNC: ok
**Slide:** sub-divider — "Origin Test · Localnet & synthetic baseline measurements".
**Spoken (~15s / ~32 words):**
> Onto evaluation. Van structured this into three tracks. First, the origin test — the thesis's own localnet and synthetic-baseline measurements. Four dimensions, each with an evidence class stated up front.
**Trace:** Frames 4.1 as the governed thesis eval; distinguishes it from Van's 4.2/4.3-4.6 to come.

### `evaluation-methodology` — Evaluation · "Four Dimensions"  |  SYNC: diverge -> L-2
**Slide:** four stat cards — Latency (WAN one-way component-sum, n=30, reduced-fidelity lower bound) · Cost (per-function gas + K=2 N=4 session, pinned localnet) · Capacity (relay CPU/egress through N=15, N=100 projection) · Failover (warm-pipe mechanism floor, 30 cutovers, not full recovery).
**Spoken (~45s / ~97 words):**
> Four dimensions, and I want the evidence class visible before any number. **Latency** — a wide-area one-way component-sum over thirty sessions; a reduced-fidelity *lower bound*, not a full-path measurement. **Fee** — per-function gas plus one full session, on a pinned localnet only. **Capacity** — relay CPU and egress measured through fifteen viewers; a hundred users is a *projection*, not a run. **Failover** — a warm-pipe mechanism floor from thirty cutovers, not full user-visible recovery. Notice none of these is dressed up as more than it is. That discipline is the point.
**Trace:** Card labels are honest and match F-01/F-12/F-16-F-20/F-23. **L-2:** the card reads "Cost" -> speak **"Fee"** (Section D / F-41). Establishes the four evidence classes so each following slide inherits its boundary.

### `eval-latency` — Evaluation · "Latency"  |  SYNC: diverge -> H-1, H-2
**Slide:** BarChart p50 64.8 / p95 70.9 / **p99 72.0** ms; title **"Below the 200ms Ceiling"**; subtitle already says "one-way component-sum, reduced-fidelity lower bound, not capture-to-paint".
**Spoken (~75s / ~160 words):**
> Latency. Over thirty wide-area sessions, the one-way component-sum was **64.8 milliseconds at the median and 70.9 at the ninety-fifth percentile**. Now the boundary, because it *is* the result: this is a component sum, not capture-to-paint. It uses a synthetic camera; the present-time term is set to zero, which biases the estimate *downward*; scan-out is a fixed constant; and both browser peers ran on one laptop and one access network against a single relay — so ISP and NAT asymmetry isn't exercised at all. So I'll state it precisely: seventy-point-nine milliseconds is a declared **lower bound**. The full-path, sub-two-hundred-millisecond target is **unresolved** — the thesis refuses that headroom claim, and so do I. What this does show is that the on-chain control plane adds nothing to the media path — the number is dominated by network legs, not by our design.
**Trace — DIVERGENCE:** F-01 (64.8 / 70.9) + its boundary clause. **H-1:** the slide shows a **p99 = 72.0 bar** — F-02 says p99 "exists but is not a reportable result"; **do not speak it**, and it should come off the slide. **H-2:** the slide title "Below the 200ms Ceiling" is the Section D banned "sub-200 achieved"; the script says the target is **unresolved** instead. W-05 = DEFEND. **Short variant:** "one-way component-sum, p95 70.9 ms — a declared lower bound with a synthetic camera and both peers on one access network; full-path sub-200 ms is unresolved."

### `eval-cost` — Evaluation · "Fee"  |  SYNC: diverge -> H-3, M-2, M-1, L-1
**Slide:** title **"Cost: Fractions of a Cent per Call"**; BarChart of six per-function gas bars (millions of MIST); stat cards **"0.0257 SUI — Irreversible"** and **"0.0351 SUI — Net"**.
**Spoken (~70s / ~150 words):**
> The on-chain **fee** — and I say fee deliberately; the thesis chapter is titled *Fee*, not cost. We ran one full executed trajectory: two assigned relays, four validators — that's eight proof submissions plus five fixed lifecycle calls, thirteen transactions in all — on a pinned localnet. The whole session's **irreversible fee was about 0.017 SUI**; **net, including refundable storage, about 0.035 SUI**. At a *labelled* scenario of one-and-a-half US dollars per SUI, that net is **about five cents** — a cent-scale fee. The boundary: this is pinned-localnet gas, **not** mainnet fee, and **not** validation of the three-of-four settlement rule. Gas is a property of bytecode execution and storage rebate; what localnet can't tell you is the real SUI price and fee contention — and the thesis says exactly that.
**Trace — DIVERGENCE:** F-13 (0.017134988 irreversible / 0.035048188 net -> short "about 0.017 / about 0.035 SUI"), F-14 (USD 0.025702 / 0.052572 at labelled 1.50; authorised short "about five cents"), F-12/F-12a (K=2 relays, N=4 validators, 13 tx), W-07 (DEFEND — gas is bytecode/storage, not network). **H-3:** slide's "0.0257 **SUI** irreversible" is a **mislabel** — 0.0257 is the *USD* figure; irreversible in SUI is **0.017**. Script speaks 0.017 SUI + separately the ~USD 0.026. **M-2:** title "Cost" -> "Fee". **M-1:** six per-function gas bars are **not in `00-facts`** (Rule 5) — do **not** read them off as authoritative; speak only the two verified session totals. **L-1:** "0.0351" -> "about 0.035 SUI net". **Short variant:** "irreversible fee about 0.017 SUI — roughly five cents net at a labelled 1.50-dollar SUI — pinned localnet, not mainnet, not a check of three-of-four."

### `eval-capacity` — Evaluation · "Capacity: Measured to N=15, Projected to N=100"  |  SYNC: ok
**Slide:** LineChart relay CPU 2.3 / 4.0 / 5.0 % of one core at N=5 / 10 / 15; stat cards "<=15 viewers measured (0.05 of one core at N=15)" and "~3-6 relays projected — modeled floor for N=100".
**Spoken (~55s / ~118 words):**
> Capacity. We ramped a single room to fifteen viewers. Relay CPU rose from about two to five percent of one core — that's **0.05 of a core at fifteen viewers**, nowhere near saturation; the run explicitly records "not saturated". So through fifteen, the relay is not the bottleneck. A hundred users is a different kind of claim, and I'll label it as such: it's a **projection**. A configured hundred-megabit-per-relay egress limit gives a floor of **three relays**; with burst and utilisation headroom, a planning estimate of **five to six**. That's a model, not a hundred-user run — and importantly, participant-driven auto-scaling isn't implemented. But the projection doesn't lean on anything we didn't measure at fifteen.
**Trace:** F-17 (0.023/0.040/0.050 core = 2.3/4.0/5.0% — slide matches), F-16 (N=15, not-saturated), F-20 (floor 3 / planning 5-6), W-06 (DEFEND — labelled a model), W-15 (auto-scaling not implemented). Slide and script agree; boundary spoken.

### `eval-failover` — Evaluation · "Failover: Warm-Pipe Mechanism Floor"  |  SYNC: ok
**Slide:** BarChart p50 58 / p95 74 / p99 80 ms; stat cards "1.6-2.0 s promote_relay -> RelayPromoted (median 1.6s)" and "Unmeasured — full kill-to-rendered-media recovery".
**Spoken (~55s / ~118 words):**
> Failover, measured. In an in-process bench with a real mediasoup warm pipe, thirty cutovers, **zero failures**, detection-plus-resume was **58 milliseconds at the median, 74 at the ninety-fifth, 80 at the ninety-ninth**. And on-chain, as I showed, the promotion commits in about one-and-a-half to two seconds. Here's the honest label: this is a **mechanism floor**, not mean-time-to-recovery. The bench models primary failure by closing the primary's client sink while the publisher and pipe stay live — it's an *optimistic* floor. The ADR design budget was eight to fifteen seconds for a full SFU recovery, and that full interval we did **not** measure. So: strong evidence for the switching mechanism, an open question on end-to-end recovery.
**Trace:** F-23 (58/74/80, 30 cutovers, zero failures — **failover p99 IS reportable**, unlike latency), F-44a (~1.6-2.0 s), F-24 (8-15 s design budget, full recovery unmeasured), W-08 (CONCEDE MTTR, DEFEND mechanism). Slide and script agree.

---

## Section 03 — Evaluation · 4.2 + 4.3-4.6  (VAN — PHASE B, pending)

> **HAND-OFF TO VAN at `divider-4-2`.** These sub-sections are Van's runs (quality baseline + resilience), **not in `00-facts`**. Per the Option-A decision, Phase A leaves them as placeholders. Do not script spoken numbers here until Van confirms (a) whether 4.2's ~70-80 ms measured latency is additive to, or a replacement for, 4.1's lower bound; (b) that 4.2 is labelled post-submission / not in the graded thesis; (c) how the manual Vietnam join is framed. See `DECK-FACT-REVIEW.md` Gate 0/Gate 3.

- `divider-4-2` — "Quality Baseline · azure-devnet-sample"  |  **pending-van**
- `eval-r1-setup`  |  **pending-van**  (note: "25 workers" = 5 services x 5 VMs, NOT users — R-4)
- `eval-r1-session-health`  |  **pending-van**
- `eval-r1-media-quality`  |  **pending-van**
- `eval-r1-summary`  |  **pending-van**  (note: "~70-80 ms" collides with 4.1's 70.9 ms lower bound — R-1; manual VN join not in scenario.toml — R-2)
- `divider-4-3` .. `divider-4-6` — 2/5/10/20-Bot Resilience  |  **pending-van**  (dividers only, "data pending")

---

## Section 04 — Discussion (Quang)

### `divider-discussion` — Discussion  |  SYNC: ok
**Slide:** sub-divider — "Discussion · What's implemented vs. what's designed".
**Spoken (~12s / ~26 words):**
> Let me close on the honest ledger — what we designed against what we actually implemented and measured. This slide is the one I'd least want to skip.
**Trace:** Frames the honesty centerpiece.

### `designed-vs-implemented` — Discussion · "Designed vs. Implemented"  |  SYNC: ok
**Slide:** ComparisonTable [009,010] — Validator quorum (3-of-4 BFT / 2 proofs, arithmetic mean) · Slashing (automatic seizure / cooperative pay_slash) · TURN coturn (operational / issuance + credentials only, never deployed) · SFU recovery (8-15 s design / 58-74-80 ms mechanism floor).
**Spoken (~65s / ~140 words):**
> Four rows, and every one is a place we scaled the claim down to what we built. We designed a three-of-four BFT quorum; we implemented settlement on two proofs and their arithmetic mean. We designed automatic seizure on misbehaviour; we implemented a *cooperative* `pay_slash` — an obligation, collected with the relay's authorisation. We designed an operational relay-side coturn; we implemented credential issuance only — the TURN data plane was never deployed. And we set an eight-to-fifteen-second recovery budget; what we measured is a fifty-eight-to-eighty-millisecond mechanism floor — a different, narrower thing. I show this table on purpose. The contribution is decentralised *evidence and settlement over an operator-run media plane* — not complete decentralisation — and being precise about that line is what makes the rest credible.
**Trace:** F-28 (Table 6.1 scope reductions), F-30/W-01/W-02 (quorum, slashing), L-3 (coturn never deployed — this slide is its backing), F-24/W-08 (recovery budget vs floor). Section D "decentralised evidence and settlement over an operator-run media plane". Honesty centerpiece.

### `limitations` — Discussion · "Limitations & Future Work"  |  SYNC: diverge -> M-3
**Slide:** RevealList — Unresolved: proof-to-relay binding · fee localnet-only · latency/failover lower bounds. Forward: designed for idle/churn but ran on reliable infra · validate under real churn next.
**Spoken (~70s / ~150 words):**
> The limits we name ourselves. Three unresolved. A submitted proof does **not** cryptographically bind the relay to the room — the binding gap I flagged earlier. The fee figures are localnet-only, with no mainnet price cross-check. And the latency and failover numbers are reduced-fidelity lower bounds — no real-camera, capture-to-paint measurement. I'll add three more the slide keeps short but the thesis raises: end-to-end encryption is **opt-in and fails open**; a broad set of operations still sits under the deployer's `AdminCap`; and there is **no project-wide threat model** — no STRIDE analysis or attack tree yet. Then the forward point, which is the real one: this architecture is *designed* for idle, high-churn nodes, but every experiment ran on reliable, single-workstation or data-center infrastructure. Validating DVConf under genuine volunteer churn — not controlled kill-tests on reliable infra — is the honest next step.
**Trace — DIVERGENCE (additive):** slide items = F-31/W-03, W-07, W-05/W-08. **M-3:** script **adds verbally** W-04 (E2EE opt-in/fails-open), W-10 (AdminCap breadth), W-17 (no threat model) — all CONCEDE stances the thesis raises itself; strengthens the honesty without needing a slide edit. **Short variant:** keep the three slide items + the churn forward-point; move the three added concessions to Q&A.

### `references` — Sources · "References"  |  SYNC: ok
**Slide:** numbered [001]-[011].
**Spoken (~8s / ~17 words):**
> Our sources are on screen — WebRTC and DTLS-SRTP RFCs, the Huddle01 documentation, the BFT literature, and the survey work.
**Trace:** No narration numbers. Optional to speak at all; can be silent during Q&A setup.

### `closing` — Thanks · "Questions?"  |  SYNC: ok
**Slide:** "Questions?"
**Spoken (~20s / ~43 words):**
> To close: DVConf puts real-time conferencing on untrusted, spare capacity, with per-session, dual-signed evidence anchoring reward and failover on-chain — and we've been deliberate about what's measured, what's projected, and what's still open. Thank you. We'd be glad to take your questions.
**Trace:** Mirrors the opening thesis statement; hands to Q&A. No governed number.

---

## Phase A word budget (rough)

Spine spoken total ~ **2,050 words** across cover + 8 Motivation/Background + 5 Architecture + 6 (4.1) + 4 Discussion. At 130 wpm that's ~**16 minutes for the spine alone**, before Van's 4.2/4.3-4.6. Two consequences to settle at rehearsal (P4): (1) with Van's tracks added the joint talk will run long — plan the short variants on `eval-latency` / `eval-cost` / `architecture` / `limitations` first; (2) confirm the Quang/Van speaker split and the exact hand-off wording at `divider-4-2`.

## Open items feeding back to the deck (from the TRACE TABLE)
Deck edits that would let a `diverge` flag be dropped — **not** to be applied without the Gate-1 coordination in `DECK-FACT-REVIEW.md`: H-1 (drop p99 bar), H-2 (retitle latency), H-3 (fix 0.0257 SUI label), M-2/L-2 (Cost -> Fee), M-1 (per-function gas), H-4 (add an E2EE/Trust-Model slide), L-3 (coturn note), L-5 (supervisor on cover).
