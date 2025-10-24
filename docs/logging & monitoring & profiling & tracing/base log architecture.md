# base log architecture

## logger

```txt
winston
pino
log4js
log4j
logback
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

> log를 저장하고 query를 통한 검색 등을 수행하는 역할

```txt
elasticsearch
loki
prometheus
influxdb
cassandra
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
