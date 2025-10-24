# 웹 성능 측정 도구 chrome network

## waterfall

```sh
# Resource scheduling
queueing: 대기 시간

# Connection Start
stalled: 요청이 브라우저에 의해 중단된 시간
dns lookup: DNS 조회 시간
initial connection: 서버와의 연결 시간
ssl: SSL 연결 시간
(initial connection - ssl): tcp 핸드셰이크에 걸린 시간
# http3의 경우 ssl과 initial connection이 같다

# Request/Response
request sent: 요청을 보내는 시간
waiting for server response (time to first byte): 서버 응답을 기다리는 시간
content download (time to last byte): 컨텐츠 다운로드 시간
```
