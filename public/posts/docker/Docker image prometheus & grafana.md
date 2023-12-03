# Docker image prometheus & grafana

## run

```sh
docker run --name prometheus -d -p 9090:9090 prom/prometheus
docker run --name grafana -d -p 3000:3000 grafana/grafana-enterprise
# localhost:3000으로 접속
# id: admin / password: admin으로 로그인
```
