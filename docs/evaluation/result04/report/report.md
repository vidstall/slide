# Scenario report: simple-15wk-5host-10bot

- Env: `devnet`
- Run: `20260813T104052`
- Started: 2026-08-13T03:41:07.050000+00:00
- Ended: 2026-08-13T03:48:02.006000+00:00
- Duration: 415s

## Actions

| type | ok | error | no_after_event |
|---|---|---|---|
| bot.create_room | 1 | 0 | 0 |
| bot.delete_room | 10 | 0 | 0 |
| bot.join_room | 9 | 0 | 0 |

Full detail: [csv/actions.csv](csv/actions.csv)

## Steps

| step | concurrency | duration (s) | ticks | avg latency (ms) | avg jitter (ms) | avg packet loss | avg down bitrate (kbps) |
|---|---|---|---|---|---|---|---|
| 0 | 10 | 297 | 8 | 35.98 | 11.32 | 0.0353 | 1955.75 |
| whole_run | - | - | 26 | 31.68 | 9.75 | 0.0282 | 1880.99 |

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

![1-is-bot](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-234c2001-500e-40f2-a5ba-ba64fb4b23cd/9-freeze-count-live.png)

![1-is-bot](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-34bb7316-cba7-4e5b-b3ac-0326279ff41f/9-freeze-count-live.png)

![1-is-bot](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-475d72cf-bb2f-4e2d-9646-4d16f29ad5d2/9-freeze-count-live.png)

![1-is-bot](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-71034bee-051d-4227-bac4-616ccebc1179/9-freeze-count-live.png)

![1-is-bot](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-92fe178d-1765-4319-8ffd-dfc69e3d2371/9-freeze-count-live.png)

![1-is-bot](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-a4895bf0-a65b-4109-98ea-7a5f9013edec/9-freeze-count-live.png)

![1-is-bot](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-ae2f9524-db01-46b3-82db-ceb3e0626ff7/9-freeze-count-live.png)

![1-is-bot](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-d7c0e83b-7aff-4315-9fcc-ebb779f798f7/9-freeze-count-live.png)

![1-is-bot](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-f1fb075d-3015-41a6-a1f7-6ca5fb68b582/9-freeze-count-live.png)

![1-is-bot](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f-bot-fc5e8d1e-fea1-409b-8a50-075b9140e2d2/9-freeze-count-live.png)

![1-active-rooms](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/1-active-rooms.png)

![10-encode-decode-latency-all-users](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/10-encode-decode-latency-all-users.png)

![11-freeze-count-all-users](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/11-freeze-count-all-users.png)

![12-pause-count-all-users](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/12-pause-count-all-users.png)

![13-connection-setup-time-all-users](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/13-connection-setup-time-all-users.png)

![14-reconnect-time-all-users](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/14-reconnect-time-all-users.png)

![15-ice-success-rate-all-users](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/15-ice-success-rate-all-users.png)

![16-packet-reordering-rate-all-users](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/16-packet-reordering-rate-all-users.png)

![17-relay-failover-downtime-all-users](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/17-relay-failover-downtime-all-users.png)

![2-participants-per-room](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/2-participants-per-room.png)

![3-room-duration-distribution](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/3-room-duration-distribution.png)

![4-latency-all-users](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/4-latency-all-users.png)

![5-jitter-all-users](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/5-jitter-all-users.png)

![6-packet-loss-all-users](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/6-packet-loss-all-users.png)

![7-bitrate-up-down-all-users](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/7-bitrate-up-down-all-users.png)

![8-resolution-all-users](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/8-resolution-all-users.png)

![9-frame-rate-all-users](../img/rooms/0x5f91800cc51675528b7d998a9f2c4c3ce47aff4764392f9ad0df3f3f6df8472f/9-frame-rate-all-users.png)

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

