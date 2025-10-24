# prometheus promQL

```sh
# INPUT  : metrics_name{label_1=value_1, label_2=value_2 ...}[timestamp]
# OUTPUT : metrics_value

http_requests_total{instance="localhost:9090", job="prometheus", container="A"}
cpu_usage{instance="localhost:9090", job="prometheus"}
```
