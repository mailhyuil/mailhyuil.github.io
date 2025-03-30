# docker-compose replicas

## replicas option

> replication이 생성되고 자동으로 round-robin 방식으로 load balancing이 된다.

```yaml
version: "3.8"
services:
  service1:
    image: service1:1.0
    deploy:
      replicas: 3
```

## endpoint_mode

> traffic이 evenly하게 분산된다.

```yaml
version: "3.8"
services:
  service1:
    image: service1:1.0
    deploy:
      replicas: 3
      endpoint_mode: dnsrr
```
