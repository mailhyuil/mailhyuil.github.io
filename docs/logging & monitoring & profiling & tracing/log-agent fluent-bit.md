# EFK fluentbit

> fluentd보다 경량화된 log agent
>
> > 가볍고 빠르지만 fluentd에 비해 기능이 적다.

## docker-compose.yaml

```yaml
services:
  fluent-bit:
    platform: linux/x86_64 # mac에서 실행할 때 추가
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
    external: true
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

## app.yaml (fluentd log-driver 사용)

```yaml
services:
  app:
    platform: linux/x86_64
    image: thakkaryash94/express-example:latest
    container_name: express-app
    ports:
      - "4000:3000"
    logging:
      driver: fluentd
      options:
        fluentd-address: localhost:24224 # fluent-bit address
```
