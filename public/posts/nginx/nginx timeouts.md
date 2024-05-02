# nginx timeouts

> 0값은 timeout을 무제한으로 설정한다.

## frontend timeouts

```sh
client_header_timeout # header를 읽는 시간 제한 (default 60s)
client_body_timeout # body를 읽는 시간 제한 (default 60s)
send_timeout # client에서 response를 보내는 시간 제한 (default 60s)
keepalive_timeout # keepalive connection이 유지되는 시간 (default 75s)
lingering_timeout # client가 connection을 닫은 후 데이터를 보내는 시간 제한 (default 5s)
resolver_timeout # DNS resolution 시간 제한 (default 30s)
```

## backend timeouts

```sh
proxy_connect_timeout # backend server에 연결하는 시간 제한 (default 75s)
proxy_send_timeout # backend server로 request를 보내는 시간 제한 (default 60s)
proxy_read_timeout # backend server로부터 response를 읽는 시간 제한 (default 60s)
proxy_next_upstream_timeout # 다음 backend server로 연결하는 시간 제한 (default 0s)
keepalive_timeout # keepalive connection이 유지되는 시간 (default 75s)
```
