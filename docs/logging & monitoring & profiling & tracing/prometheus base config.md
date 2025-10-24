# prometheus base config

## /etc/prometheus/prometheus.yml

```yml
global: # prometheus 전역 설정
  scrape_interval: 15s
  scrape_timeout: 10s
  scrape_protocols:
    - OpenMetricsText1.0.0
    - OpenMetricsText0.0.1
    - PrometheusText0.0.4
  evaluation_interval: 15s

alerting: # alertmanager 설정
  alertmanagers:
    - follow_redirects: true
      enable_http2: true
      scheme: http
      timeout: 10s
      api_version: v2
      static_configs:
        - targets: ["localhost:9093"]

rule_files: # alert rule을 설정
  - /etc/prometheus/rules/*.rules

scrape_configs: # scrape할 대상을 설정
  - job_name: prometheus
    honor_timestamps: true
    track_timestamps_staleness: false
    scrape_interval: 15s
    scrape_timeout: 10s
    scrape_protocols:
      - OpenMetricsText1.0.0
      - OpenMetricsText0.0.1
      - PrometheusText0.0.4
    metrics_path: /metrics
    scheme: http
    enable_compression: true
    follow_redirects: true
    enable_http2: true
    static_configs:
      - targets:
          - localhost:9090
  - job_name: node_exporter
    honor_timestamps: true
    track_timestamps_staleness: false
    scrape_interval: 15s
    scrape_timeout: 10s
    scrape_protocols:
      - OpenMetricsText1.0.0
      - OpenMetricsText0.0.1
      - PrometheusText0.0.4
    metrics_path: /metrics
    scheme: http
    enable_compression: true
    follow_redirects: true
    enable_http2: true
    static_configs:
      - targets:
          - localhost:9100
```
