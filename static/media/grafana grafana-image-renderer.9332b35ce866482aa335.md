# grafana grafana-image-renderer

> email, slack 등에 alert를 보낼 때, 그래프를 이미지로 변환해서 보낼 수 있게 해주는 plugin

## docker-compose.yaml

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
networks:
  loki:
    external: true
```
