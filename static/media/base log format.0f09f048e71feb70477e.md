# logging format

## json

> 구조화된 로깅(Structured Logging)을 위한 포맷
>
> > 로그 관리 시스템(ELK, Grafana Loki, etc)에서 쿼리를 통해 로그를 검색할 수 있다.

```json
{
  "level": "info",
  "message": "Hello distributed log files!",
  "service": "user-service",
  "timestamp": "2021-07-01T12:34:56.789Z"
}
```

## logfmt

> 전통적인 방식의 one line log format

```txt
level=info message="Hello distributed log files!" service=user-service timestamp=2021-07-01T12:34:56.789Z
```
