# Docker image 파일 로컬로 복사

```sh
docker create --name dummy IMAGE_NAME &&
docker cp dummy:/path/to/file /dest/to/file &&
docker rm -f dummy



#   - ./grafana/config:/etc/grafana
#   - ./grafana/data:/var/lib/grafana
#   - ./grafana/logs:/var/log/grafana
docker create --name dummy grafana/grafana:latest &&
docker cp dummy:/etc/grafana/ ./grafana/config &&
docker cp dummy:/var/lib/grafana/ ./grafana/data &&
docker cp dummy:/var/log/grafana/ ./grafana/logs &&
docker rm -f dummy
```
