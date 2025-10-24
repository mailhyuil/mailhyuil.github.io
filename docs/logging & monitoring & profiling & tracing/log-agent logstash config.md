# log-agent logstash config

## logstash.yml

```yaml
input:
  beats:
    port: 5044
output:
  elasticsearch:
    hosts:
      - "elasticsearch:9200"
    index: "docker-logs-%{+YYYY.MM.dd}"
```
