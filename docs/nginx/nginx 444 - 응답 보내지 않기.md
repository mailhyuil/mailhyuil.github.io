# nginx 444

> 에러 응답을 보내는 것도 outbound 요금에 포함될 수 있음
>
> > 444 를 사용하면 응답을 아예 보내지 않음

```conf
server {
    location / {
        # 특정 User-Agent 차단
        if ($http_user_agent ~* (bad-bot|ddos-attacker)) {
            return 444;  # 444 상태 코드는 응답을 아예 안 보냄
        }

        # 특정 IP 차단
        deny 192.168.1.100;
        deny 203.0.113.0/24;
    }
}
```
