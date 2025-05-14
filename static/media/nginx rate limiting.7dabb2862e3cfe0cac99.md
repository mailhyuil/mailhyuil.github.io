# nginx rate limiting

> IP 기반 제한, DDOS 방어
>
> > 토큰, 로직 등을 사용하여 제한하려면 앱(nestjs)에서 rate limiting을 구현해야한다.

## limit_req

> 요청 속도 제한

```conf
http {
  # limit_req_zone 정의: 초당 5개의 요청만 허용, 10m 메모리 사용
  limit_req_zone $binary_remote_addr zone=my_limit_req:10m rate=5r/s;
  limit_req_status 429;

  server {
    location /api/ {
      limit_req zone=my_limit_req burst=10 nodelay;
    }
    location /sse {
    }
  }
}
```

## limit_conn

> 동시에 유지할 수 있는 연결 수 제한
>
> > $binary_remote_addr: 클라이언트의 IP 주소를 이진 형식으로 변환한 값
> >
> > $server_name: 서버의 이름

```conf
http {
  # limit_conn_zone 정의: 10m 메모리 사용
  limit_conn_zone $binary_remote_addr zone=my_limit_conn:10m;

  server {
    location / {
      # 동시에 2개의 연결만 허용
      limit_conn my_limit_conn 2;
    }
  }
}
```

## limit_rate

> 대역폭 제한

```conf
location /downloads/ {
  limit_rate_after 1m;  # 1MB까지는 빠르게, 그 후 속도 제한
  limit_rate 100k;
}
```
