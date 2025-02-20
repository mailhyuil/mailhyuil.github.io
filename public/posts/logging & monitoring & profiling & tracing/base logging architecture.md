# logging architecture

## logger

```txt
winston
pino
...
```

## log agent

> log를 수집하여 collector나 storage로 전송하는 역할

```txt
fluent-bit
fluentd
filebeat
promtail
vector
datadog-agent
...
```

## log collector

> 여러 log agent가 보낸 로그를 받아서 저장, 분석, 시각화를 위해 저장하는 곳

```txt
logstash
fluentd
opentelmetry-collector
...
```

## log storage

```txt
elasticsearch
influxdb
cassandra
loki
prometheus
...
```

## log viewer

```txt
kibana
grafana
prometheus (built-in dashboard)
datadog
...
```
