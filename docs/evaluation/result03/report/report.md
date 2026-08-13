# Scenario report: simple-15wk-5host-5bot

- Env: `devnet`
- Run: `20260813T084823`
- Started: 2026-08-13T01:48:37.550000+00:00
- Ended: 2026-08-13T01:55:30.136000+00:00
- Duration: 413s

## Actions

| type | ok | error | no_after_event |
|---|---|---|---|
| bot.create_room | 1 | 0 | 0 |
| bot.delete_room | 5 | 0 | 0 |
| bot.join_room | 4 | 0 | 0 |

Full detail: [csv/actions.csv](csv/actions.csv)

## Steps

| step | concurrency | duration (s) | ticks | avg latency (ms) | avg jitter (ms) | avg packet loss | avg down bitrate (kbps) |
|---|---|---|---|---|---|---|---|
| 0 | 5 | 344 | 9 | 51.73 | 9.27 | 0.0037 | 2065.35 |
| whole_run | - | - | 19 | 68.55 | 9.08 | 0.0030 | 1718.70 |

Full detail: [csv/step_summary.csv](csv/step_summary.csv), [csv/room_metrics.csv](csv/room_metrics.csv), [csv/user_metrics.csv](csv/user_metrics.csv)

## Charts

![concurrency](charts/concurrency.png)

![quality_over_time](charts/quality_over_time.png)

![quality_by_step](charts/quality_by_step.png)

## Grafana panels

![1-node-exporter-targets-up](../img/infrastructure/azure-001-exp/1-node-exporter-targets-up.png)

![10-coturn-scrape-up](../img/infrastructure/azure-001-exp/10-coturn-scrape-up.png)

![11-psi-pressure-cpu-memory-io-oom-kills](../img/infrastructure/azure-001-exp/11-psi-pressure-cpu-memory-io-oom-kills.png)

![12-disk-i-o-throughput](../img/infrastructure/azure-001-exp/12-disk-i-o-throughput.png)

![13-network-errors-drops](../img/infrastructure/azure-001-exp/13-network-errors-drops.png)

![14-conntrack-tcp-established-connections](../img/infrastructure/azure-001-exp/14-conntrack-tcp-established-connections.png)

![2-cpu-usage-per-droplet](../img/infrastructure/azure-001-exp/2-cpu-usage-per-droplet.png)

![3-memory-available](../img/infrastructure/azure-001-exp/3-memory-available.png)

![4-network-throughput](../img/infrastructure/azure-001-exp/4-network-throughput.png)

![5-disk-space-available](../img/infrastructure/azure-001-exp/5-disk-space-available.png)

![6-load-average](../img/infrastructure/azure-001-exp/6-load-average.png)

![7-filesystem-used](../img/infrastructure/azure-001-exp/7-filesystem-used.png)

![8-host-uptime](../img/infrastructure/azure-001-exp/8-host-uptime.png)

![9-open-file-descriptors-tcp-sockets](../img/infrastructure/azure-001-exp/9-open-file-descriptors-tcp-sockets.png)

![1-node-exporter-targets-up](../img/infrastructure/azure-002-exp/1-node-exporter-targets-up.png)

![10-coturn-scrape-up](../img/infrastructure/azure-002-exp/10-coturn-scrape-up.png)

![11-psi-pressure-cpu-memory-io-oom-kills](../img/infrastructure/azure-002-exp/11-psi-pressure-cpu-memory-io-oom-kills.png)

![12-disk-i-o-throughput](../img/infrastructure/azure-002-exp/12-disk-i-o-throughput.png)

![13-network-errors-drops](../img/infrastructure/azure-002-exp/13-network-errors-drops.png)

![14-conntrack-tcp-established-connections](../img/infrastructure/azure-002-exp/14-conntrack-tcp-established-connections.png)

![2-cpu-usage-per-droplet](../img/infrastructure/azure-002-exp/2-cpu-usage-per-droplet.png)

![3-memory-available](../img/infrastructure/azure-002-exp/3-memory-available.png)

![4-network-throughput](../img/infrastructure/azure-002-exp/4-network-throughput.png)

![5-disk-space-available](../img/infrastructure/azure-002-exp/5-disk-space-available.png)

![6-load-average](../img/infrastructure/azure-002-exp/6-load-average.png)

![7-filesystem-used](../img/infrastructure/azure-002-exp/7-filesystem-used.png)

![8-host-uptime](../img/infrastructure/azure-002-exp/8-host-uptime.png)

![9-open-file-descriptors-tcp-sockets](../img/infrastructure/azure-002-exp/9-open-file-descriptors-tcp-sockets.png)

![1-node-exporter-targets-up](../img/infrastructure/azure-003-exp/1-node-exporter-targets-up.png)

![10-coturn-scrape-up](../img/infrastructure/azure-003-exp/10-coturn-scrape-up.png)

![11-psi-pressure-cpu-memory-io-oom-kills](../img/infrastructure/azure-003-exp/11-psi-pressure-cpu-memory-io-oom-kills.png)

![12-disk-i-o-throughput](../img/infrastructure/azure-003-exp/12-disk-i-o-throughput.png)

![13-network-errors-drops](../img/infrastructure/azure-003-exp/13-network-errors-drops.png)

![14-conntrack-tcp-established-connections](../img/infrastructure/azure-003-exp/14-conntrack-tcp-established-connections.png)

![2-cpu-usage-per-droplet](../img/infrastructure/azure-003-exp/2-cpu-usage-per-droplet.png)

![3-memory-available](../img/infrastructure/azure-003-exp/3-memory-available.png)

![4-network-throughput](../img/infrastructure/azure-003-exp/4-network-throughput.png)

![5-disk-space-available](../img/infrastructure/azure-003-exp/5-disk-space-available.png)

![6-load-average](../img/infrastructure/azure-003-exp/6-load-average.png)

![7-filesystem-used](../img/infrastructure/azure-003-exp/7-filesystem-used.png)

![8-host-uptime](../img/infrastructure/azure-003-exp/8-host-uptime.png)

![9-open-file-descriptors-tcp-sockets](../img/infrastructure/azure-003-exp/9-open-file-descriptors-tcp-sockets.png)

![1-node-exporter-targets-up](../img/infrastructure/azure-004-exp/1-node-exporter-targets-up.png)

![10-coturn-scrape-up](../img/infrastructure/azure-004-exp/10-coturn-scrape-up.png)

![11-psi-pressure-cpu-memory-io-oom-kills](../img/infrastructure/azure-004-exp/11-psi-pressure-cpu-memory-io-oom-kills.png)

![12-disk-i-o-throughput](../img/infrastructure/azure-004-exp/12-disk-i-o-throughput.png)

![13-network-errors-drops](../img/infrastructure/azure-004-exp/13-network-errors-drops.png)

![14-conntrack-tcp-established-connections](../img/infrastructure/azure-004-exp/14-conntrack-tcp-established-connections.png)

![2-cpu-usage-per-droplet](../img/infrastructure/azure-004-exp/2-cpu-usage-per-droplet.png)

![3-memory-available](../img/infrastructure/azure-004-exp/3-memory-available.png)

![4-network-throughput](../img/infrastructure/azure-004-exp/4-network-throughput.png)

![5-disk-space-available](../img/infrastructure/azure-004-exp/5-disk-space-available.png)

![6-load-average](../img/infrastructure/azure-004-exp/6-load-average.png)

![7-filesystem-used](../img/infrastructure/azure-004-exp/7-filesystem-used.png)

![8-host-uptime](../img/infrastructure/azure-004-exp/8-host-uptime.png)

![9-open-file-descriptors-tcp-sockets](../img/infrastructure/azure-004-exp/9-open-file-descriptors-tcp-sockets.png)

![1-node-exporter-targets-up](../img/infrastructure/azure-005-exp/1-node-exporter-targets-up.png)

![10-coturn-scrape-up](../img/infrastructure/azure-005-exp/10-coturn-scrape-up.png)

![11-psi-pressure-cpu-memory-io-oom-kills](../img/infrastructure/azure-005-exp/11-psi-pressure-cpu-memory-io-oom-kills.png)

![12-disk-i-o-throughput](../img/infrastructure/azure-005-exp/12-disk-i-o-throughput.png)

![13-network-errors-drops](../img/infrastructure/azure-005-exp/13-network-errors-drops.png)

![14-conntrack-tcp-established-connections](../img/infrastructure/azure-005-exp/14-conntrack-tcp-established-connections.png)

![2-cpu-usage-per-droplet](../img/infrastructure/azure-005-exp/2-cpu-usage-per-droplet.png)

![3-memory-available](../img/infrastructure/azure-005-exp/3-memory-available.png)

![4-network-throughput](../img/infrastructure/azure-005-exp/4-network-throughput.png)

![5-disk-space-available](../img/infrastructure/azure-005-exp/5-disk-space-available.png)

![6-load-average](../img/infrastructure/azure-005-exp/6-load-average.png)

![7-filesystem-used](../img/infrastructure/azure-005-exp/7-filesystem-used.png)

![8-host-uptime](../img/infrastructure/azure-005-exp/8-host-uptime.png)

![9-open-file-descriptors-tcp-sockets](../img/infrastructure/azure-005-exp/9-open-file-descriptors-tcp-sockets.png)

![1-is-bot](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-190f22e2-0a54-41e1-b044-4c4ee46dcbf9/9-freeze-count-live.png)

![1-is-bot](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-92ad7472-a094-4b3a-bd54-1c50c47b2de6/9-freeze-count-live.png)

![1-is-bot](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-943e9574-15dc-4df3-b739-21c9139540bf/9-freeze-count-live.png)

![1-is-bot](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-e6e422ed-5c7f-42ce-afa9-2f413bd13c69/9-freeze-count-live.png)

![1-is-bot](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd-bot-fc76b617-a5cc-43d0-abaf-fff4a47a9d52/9-freeze-count-live.png)

![1-active-rooms](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/1-active-rooms.png)

![10-encode-decode-latency-all-users](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/10-encode-decode-latency-all-users.png)

![11-freeze-count-all-users](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/11-freeze-count-all-users.png)

![12-pause-count-all-users](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/12-pause-count-all-users.png)

![13-connection-setup-time-all-users](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/13-connection-setup-time-all-users.png)

![14-reconnect-time-all-users](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/14-reconnect-time-all-users.png)

![15-ice-success-rate-all-users](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/15-ice-success-rate-all-users.png)

![16-packet-reordering-rate-all-users](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/16-packet-reordering-rate-all-users.png)

![17-relay-failover-downtime-all-users](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/17-relay-failover-downtime-all-users.png)

![2-participants-per-room](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/2-participants-per-room.png)

![3-room-duration-distribution](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/3-room-duration-distribution.png)

![4-latency-all-users](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/4-latency-all-users.png)

![5-jitter-all-users](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/5-jitter-all-users.png)

![6-packet-loss-all-users](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/6-packet-loss-all-users.png)

![7-bitrate-up-down-all-users](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/7-bitrate-up-down-all-users.png)

![8-resolution-all-users](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/8-resolution-all-users.png)

![9-frame-rate-all-users](../img/rooms/0xed36b0b7e12751fafaaffa6c192aa5a98017771297f2d417101bcc5d9ed46edd/9-frame-rate-all-users.png)

![102-cpu-usage-5m-rate](../img/workers/average-all-workers/102-cpu-usage-5m-rate.png)

![103-resident-memory](../img/workers/average-all-workers/103-resident-memory.png)

![104-event-loop-lag](../img/workers/average-all-workers/104-event-loop-lag.png)

![105-role-assignment-wait-time-p95](../img/workers/average-all-workers/105-role-assignment-wait-time-p95.png)

![106-role-assignment-wait-outcome-rate](../img/workers/average-all-workers/106-role-assignment-wait-outcome-rate.png)

![107-chain-tx-latency-by-method](../img/workers/average-all-workers/107-chain-tx-latency-by-method.png)

![108-chain-event-poll-duration](../img/workers/average-all-workers/108-chain-event-poll-duration.png)

![109-chain-tx-retry-rate-by-method](../img/workers/average-all-workers/109-chain-tx-retry-rate-by-method.png)

![110-chain-events-processed-rate](../img/workers/average-all-workers/110-chain-events-processed-rate.png)

![112-cpu-usage-5m-rate](../img/workers/cp-daemon/112-cpu-usage-5m-rate.png)

![113-resident-memory](../img/workers/cp-daemon/113-resident-memory.png)

![114-event-loop-lag](../img/workers/cp-daemon/114-event-loop-lag.png)

![115-role-assignment-wait-time-p95](../img/workers/cp-daemon/115-role-assignment-wait-time-p95.png)

![116-role-assignment-wait-outcome-rate](../img/workers/cp-daemon/116-role-assignment-wait-outcome-rate.png)

![117-chain-tx-latency-by-method](../img/workers/cp-daemon/117-chain-tx-latency-by-method.png)

![118-chain-event-poll-duration](../img/workers/cp-daemon/118-chain-event-poll-duration.png)

![119-chain-tx-retry-rate-by-method](../img/workers/cp-daemon/119-chain-tx-retry-rate-by-method.png)

![120-chain-events-processed-rate](../img/workers/cp-daemon/120-chain-events-processed-rate.png)

![121-per-vote-latency-cp-daemon](../img/workers/cp-daemon/121-per-vote-latency-cp-daemon.png)

![145-cpu-usage-5m-rate](../img/workers/relay/145-cpu-usage-5m-rate.png)

![146-resident-memory](../img/workers/relay/146-resident-memory.png)

![147-event-loop-lag](../img/workers/relay/147-event-loop-lag.png)

![148-role-assignment-wait-time-p95](../img/workers/relay/148-role-assignment-wait-time-p95.png)

![149-role-assignment-wait-outcome-rate](../img/workers/relay/149-role-assignment-wait-outcome-rate.png)

![150-chain-tx-latency-by-method](../img/workers/relay/150-chain-tx-latency-by-method.png)

![151-chain-event-poll-duration](../img/workers/relay/151-chain-event-poll-duration.png)

![152-chain-tx-retry-rate-by-method](../img/workers/relay/152-chain-tx-retry-rate-by-method.png)

![153-chain-events-processed-rate](../img/workers/relay/153-chain-events-processed-rate.png)

![154-rtt-jitter-relay](../img/workers/relay/154-rtt-jitter-relay.png)

![155-active-sessions-room-count](../img/workers/relay/155-active-sessions-room-count.png)

![156-bytes-forwarded-mediasoup-worker-deaths](../img/workers/relay/156-bytes-forwarded-mediasoup-worker-deaths.png)

![157-mediasoup-worker-resource-usage](../img/workers/relay/157-mediasoup-worker-resource-usage.png)

![158-failover-events-duration-by-phase](../img/workers/relay/158-failover-events-duration-by-phase.png)

![123-cpu-usage-5m-rate](../img/workers/validator-daemon/123-cpu-usage-5m-rate.png)

![124-resident-memory](../img/workers/validator-daemon/124-resident-memory.png)

![125-event-loop-lag](../img/workers/validator-daemon/125-event-loop-lag.png)

![126-role-assignment-wait-time-p95](../img/workers/validator-daemon/126-role-assignment-wait-time-p95.png)

![127-role-assignment-wait-outcome-rate](../img/workers/validator-daemon/127-role-assignment-wait-outcome-rate.png)

![128-chain-tx-latency-by-method](../img/workers/validator-daemon/128-chain-tx-latency-by-method.png)

![129-chain-event-poll-duration](../img/workers/validator-daemon/129-chain-event-poll-duration.png)

![130-chain-tx-retry-rate-by-method](../img/workers/validator-daemon/130-chain-tx-retry-rate-by-method.png)

![131-chain-events-processed-rate](../img/workers/validator-daemon/131-chain-events-processed-rate.png)

![132-relay-probe-rtt-jitter-loss-validator-observed](../img/workers/validator-daemon/132-relay-probe-rtt-jitter-loss-validator-observed.png)

![133-canary-coverage-quorum-divergence](../img/workers/validator-daemon/133-canary-coverage-quorum-divergence.png)

