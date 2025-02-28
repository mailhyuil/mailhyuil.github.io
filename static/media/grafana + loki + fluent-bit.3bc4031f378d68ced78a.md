# grafana + loki + fluent-bit

## docker-compose.yml

```yaml
services:
  loki:
    image: grafana/loki:latest
    container_name: loki
    expose:
      - "3100"
    networks:
      - loki
  grafana:
    image: grafana/grafana:latest
    container_name: grafana
    ports:
      - "3000:3000"
    environment:
      GF_RENDERING_SERVER_URL: http://renderer:8081/render
      GF_RENDERING_CALLBACK_URL: http://grafana:3000/
      GF_LOG_FILTERS: rendering:debug
    networks:
      - loki
  renderer:
    image: grafana/grafana-image-renderer:latest
    container_name: grafana-image-renderer
    expose:
      - "8081"
    environment:
      ENABLE_METRICS: "true"
    networks:
      - loki
  fluent-bit:
    platform: linux/x86_64
    image: grafana/fluent-bit-plugin-loki:latest
    container_name: fluent-bit
    environment:
      - LOKI_URL=http://loki:3100/loki/api/v1/push
    volumes:
      - ./fluent-bit.conf:/fluent-bit/etc/fluent-bit.conf
    ports:
      - "24224:24224"
      - "24224:24224/udp"
    networks:
      - loki
networks:
  loki:
```

## fluent-bit.conf

```conf
[INPUT]
    Name        forward
    Listen      0.0.0.0
    Port        24224
[Output]
    Name grafana-loki
    Match *
    Url ${LOKI_URL}
    RemoveKeys source
    Labels {job="fluent-bit"}
    LabelKeys container_name
    BatchWait 1s
    BatchSize 1001024
    LineFormat json
    LogLevel info
```
