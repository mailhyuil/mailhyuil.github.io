# loki

> log 수집 및 분석을 위한 오픈소스 플랫폼
>
> > prometheus는 metric을 수집하고, loki는 log를 수집한다.
> >
> > > winston을 사용해서 /var/log에 로그를 저장하고 promtail을 사용해서 loki로 전송한다.
> > >
> > > > 수집한 데이터는 grafana를 통해서 볼 수 있다.
> > > >
> > > > > docker-compose.yaml 실행 -> grafana에 접속 후 loki datasource 추가

## docker-compose.yml

```yaml
services:
  loki:
    image: grafana/loki:latest
    ports:
      - "3100:3100"
    command: -config.file=/etc/loki/local-config.yaml
    networks:
      - loki

  promtail:
    image: grafana/promtail:latest
    volumes:
      - /var/log:/var/log
      - ./promtail:/etc/promtail
    command: -config.file=/etc/promtail/config.yml
    networks:
      - loki

  grafana:
    environment:
      - GF_PATHS_PROVISIONING=/etc/grafana/provisioning
      - GF_AUTH_ANONYMOUS_ENABLED=true
      - GF_AUTH_ANONYMOUS_ORG_ROLE=Admin
      - GF_FEATURE_TOGGLES_ENABLE=alertingSimplifiedRouting,alertingQueryAndExpressionsStepMode
    entrypoint:
      - sh
      - -euc
      - |
        mkdir -p /etc/grafana/provisioning/datasources
        cat <<EOF > /etc/grafana/provisioning/datasources/ds.yaml
        apiVersion: 1
        datasources:
        - name: Loki
          type: loki
          access: proxy 
          orgId: 1
          url: http://loki:3100
          basicAuth: false
          isDefault: true
          version: 1
          editable: false
        EOF
        /run.sh
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    networks:
      - loki
networks:
  loki:
```

## /promtail/config.yml

```yaml
server:
  http_listen_port: 9080
  grpc_listen_port: 0

positions:
  filename: /tmp/positions.yaml

clients:
  - url: http://loki:3100/loki/api/v1/push

scrape_configs:
  - job_name: myapp
    static_configs:
      - targets:
          - localhost
        labels:
          job: myapp-info
          __path__: /var/log/myapp/info/*log
      - targets:
          - localhost
        labels:
          job: myapp-error
          __path__: /var/log/myapp/error/*log
      - targets:
          - localhost
        labels:
          job: myapp-warn
          __path__: /var/log/myapp/warn/*log
```
