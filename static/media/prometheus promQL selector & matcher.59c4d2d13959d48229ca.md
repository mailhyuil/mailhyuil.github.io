# prometheus promQL selector & matcher

## selector

```sh
# label selector
process_cpu_seconds_total{job="node_exporter"}
# multiple label selector
process_cpu_seconds_total{job="node_exporter", mode="idle"}
# all selector
process_cpu_seconds_total{}
# range vector selector
process_cpu_seconds_total{job="node_exporter"}[5m]
```

## matcher

```sh
# = (equal)
process_cpu_seconds_total{job="node_exporter"}
# != (not equal)
process_cpu_seconds_total{job!="node_exporter"}
# =~ (regex match)
process_cpu_seconds_total{job=~"node_exporter|prometheus"}
# !~ (regex not match)
process_cpu_seconds_total{job!~"node_exporter|prometheus"}
```
