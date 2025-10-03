# grafana

> default port: 3000

## docker-compose.yml

```yaml
services:
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
      - grafana
    volumes:
      - ./grafana/config:/etc/grafana
      - ./grafana/data:/var/lib/grafana
      - ./grafana/logs:/var/log/grafana
  renderer:
    image: grafana/grafana-image-renderer:latest
    container_name: grafana-image-renderer
    expose:
      - "8081"
    environment:
      ENABLE_METRICS: "true"
    networks:
      - grafana
networks:
  grafana:
```
