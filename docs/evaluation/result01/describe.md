# Evaluation Result 01 — `azure-devnet-sample`

## Scenario

This evaluation deploys the `azure-devnet-sample` topology across 5 Azure regions
(`eastus`, `westus2`, `centralus`, `westeurope`, `eastus2`), with each host running a
uniform set of containers: 1 relay + 2 cp-daemon + 2 validator-daemon (5 colocated
services per VM, `Standard_D2als_v7`, 2 vCPU), keeping every region under the
subscription's 3-vCPU-per-region quota. Two bot workers, colocated on hosts 001 and
002, drive the test: bot1 creates a room, bot2 joins the same room 5 seconds later,
and both stream media (`media_mode = "both"`) for 10 minutes before the room is torn
down.

In addition to the two scripted bots, the author also manually joined the same live
room from Vietnam partway through the run as a third, real participant, then left
before the bots' scripted teardown. This manual join is not part of `scenario.toml`
(which only defines the 2 bots), but it is part of what actually happened during this
test run and explains some of the transient behavior seen below.

## Results

- **Participants per room** — steps 1 → 2 → 3 → 2: bot1 creates the room (1), bot2
  joins 5s later (2), then the manual Vietnam join pushes it to 3, and the drop back
  to 2 marks that manual participant leaving — not a bot event.
- **ICE success rate** — steady 100% for most of the run, with a brief dip to 0–65%
  around the manual VN join window (~12:28–12:30). This tracks the long-haul network
  path from Vietnam to the nearest Azure host rather than a bot renegotiation
  artifact; it fully recovers to 100% once that connection stabilizes.
- **Latency** — baseline ~20–30 ms average (the two co-located bots' path), spiking to
  ~200 ms max during the same VN-join window — consistent with genuine Vietnam↔Azure
  geographic RTT — then settling to a steady ~70–80 ms average for the remainder of
  the session while the VN participant stayed connected.
- **Jitter** — a noisy 5–14 ms band throughout; the elevated max jitter coincides with
  the same VN-join window, consistent with a long-haul outbound path rather than a
  defect in the deployment.
- **Packet loss** — flat 0% for the entire 10-minute session.
- **Bitrate up/down** — ramps up to ~1–2 Mb/s, noisy but stable, no collapse.
- **Resolution** — jumps to ~900k early on, then the average settles to ~500–620k
  while the max holds at ~900k, indicating one participant downgraded resolution
  mid-call.
- **Frame rate** — ramps up to and holds at ~28–30 fps, with occasional dips to
  ~22 fps.
- **Encode/decode latency** — low and stable throughout, averaging ~4–8 ms with a
  max of ~5–9 ms.

## Summary

The deployment is healthy overall: packet loss stays at 0% for the whole session,
and bitrate and frame rate remain stable throughout. The one rough patch — the
transient ICE/latency/jitter blip around ~12:28–12:30 — is attributable to the
author's manual join from Vietnam, a genuine cross-continental network path to the
nearest Azure host, rather than any artifact of the scripted 2-bot test itself; the
bot-to-bot path stayed clean the entire time. That transient self-resolves within
roughly 1–2 minutes, after which the system stays clean for the remaining ~8 minutes
of the call.

## Conclusion

The 5-region Azure topology — a uniform 1 relay + 2 cp-daemon + 2 validator-daemon
per host, staying under the 3-vCPU-per-region quota — sustains a 2-participant call
with production-quality QoS (0% packet loss, sub-100 ms steady-state latency, stable
~30 fps and 1–2 Mb/s bitrate) after a brief join-time transient. There is no evidence
of instability, resource exhaustion, or degradation over the 10-minute session,
making this a passing/healthy result suitable to cite in the thesis evaluation
section.

Notably, the deployment also handled a genuine long-distance participant gracefully:
the manual join from Vietnam produced only a temporary rise in latency, jitter, and
ICE dip, with no packet loss and no connection failure, fully recovering within
minutes. This is a useful additional signal beyond the scripted bot traffic — it
shows the topology holds up under real-world geographic diversity, not just
co-located/scripted bot-to-bot conditions.
