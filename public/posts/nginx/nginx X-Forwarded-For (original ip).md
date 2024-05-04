# nginx ip X-Forwarded-For

```conf
proxy_set_header  X-Real-IP       $remote_addr;
proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for; # client에서 x-forwarded-for header에 ip를 넣었을 경우
```
