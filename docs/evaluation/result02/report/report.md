# Scenario report: simple-15wk-5host-2bot

- Env: `devnet`
- Run: `20260813T095040`
- Started: 2026-08-13T02:50:53.394000+00:00
- Ended: 2026-08-13T02:57:44.456000+00:00
- Duration: 411s

## Actions

| type | ok | error | no_after_event |
|---|---|---|---|
| bot.create_room | 1 | 0 | 0 |
| bot.delete_room | 2 | 0 | 0 |
| bot.join_room | 1 | 0 | 0 |

Full detail: [csv/actions.csv](csv/actions.csv)

## Steps

| step | concurrency | duration (s) | ticks | avg latency (ms) | avg jitter (ms) | avg packet loss | avg down bitrate (kbps) |
|---|---|---|---|---|---|---|---|
| 0 | 2 | 374 | 10 | 50.15 | 7.20 | 0.0000 | 695.25 |
| whole_run | - | - | 14 | 50.15 | 7.20 | 0.0000 | 695.25 |

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

![1-is-bot](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-0a7648f8-4422-416d-ad93-a8c88fac56ee/9-freeze-count-live.png)

![1-is-bot](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/1-is-bot.png)

![10-pause-count-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/10-pause-count-live.png)

![102-join-phase-latency](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/102-join-phase-latency.png)

![103-join-phase-p95-by-phase](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/103-join-phase-p95-by-phase.png)

![104-sessions-started-errored](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/104-sessions-started-errored.png)

![105-cpu-resident-memory](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/105-cpu-resident-memory.png)

![106-frame-drops-underruns-by-track](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/106-frame-drops-underruns-by-track.png)

![107-ffmpeg-respawns-stderr-chatter-by-track](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/107-ffmpeg-respawns-stderr-chatter-by-track.png)

![108-active-sessions](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/108-active-sessions.png)

![11-connection-setup-time-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/11-connection-setup-time-live.png)

![12-reconnect-time-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/12-reconnect-time-live.png)

![13-ice-success-rate-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/13-ice-success-rate-live.png)

![14-latency-session-average](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/14-latency-session-average.png)

![15-jitter-session-average](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/15-jitter-session-average.png)

![16-packet-loss-session-average](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/16-packet-loss-session-average.png)

![17-bitrate-up-down-session-average](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/17-bitrate-up-down-session-average.png)

![18-packet-reordering-rate-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/18-packet-reordering-rate-live.png)

![19-relay-failover-downtime](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/19-relay-failover-downtime.png)

![2-latency-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/2-latency-live.png)

![3-jitter-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/3-jitter-live.png)

![4-packet-loss-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/4-packet-loss-live.png)

![5-bitrate-up-down-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/5-bitrate-up-down-live.png)

![6-resolution-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/6-resolution-live.png)

![7-frame-rate-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/7-frame-rate-live.png)

![8-encode-decode-latency-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/8-encode-decode-latency-live.png)

![9-freeze-count-live](../img/peer-quality/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d-bot-f9a772e8-c644-4641-ba69-1774e9a84a17/9-freeze-count-live.png)

![1-active-rooms](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/1-active-rooms.png)

![10-encode-decode-latency-all-users](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/10-encode-decode-latency-all-users.png)

![11-freeze-count-all-users](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/11-freeze-count-all-users.png)

![12-pause-count-all-users](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/12-pause-count-all-users.png)

![13-connection-setup-time-all-users](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/13-connection-setup-time-all-users.png)

![14-reconnect-time-all-users](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/14-reconnect-time-all-users.png)

![15-ice-success-rate-all-users](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/15-ice-success-rate-all-users.png)

![16-packet-reordering-rate-all-users](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/16-packet-reordering-rate-all-users.png)

![17-relay-failover-downtime-all-users](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/17-relay-failover-downtime-all-users.png)

![2-participants-per-room](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/2-participants-per-room.png)

![3-room-duration-distribution](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/3-room-duration-distribution.png)

![4-latency-all-users](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/4-latency-all-users.png)

![5-jitter-all-users](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/5-jitter-all-users.png)

![6-packet-loss-all-users](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/6-packet-loss-all-users.png)

![7-bitrate-up-down-all-users](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/7-bitrate-up-down-all-users.png)

![8-resolution-all-users](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/8-resolution-all-users.png)

![9-frame-rate-all-users](../img/rooms/0xcc3c518123e0e5ea4f7b81d707ef80f85bbe327453f67e89c01f9807f170c75d/9-frame-rate-all-users.png)

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

