# grafana config

> /usr/local/etc/grafana/grafana.ini
>
> /etc/grafana/grafana.ini

## copy config

```sh
docker create --name dummy grafana/grafana:latest &&
docker cp dummy:/etc/grafana/ ./grafana/config &&
docker cp dummy:/var/lib/grafana/ ./grafana/data &&
docker cp dummy:/var/log/grafana/ ./grafana/logs &&
docker rm -f dummy
```
