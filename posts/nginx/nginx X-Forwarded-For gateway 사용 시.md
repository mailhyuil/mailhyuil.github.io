# nginx x-forwarded-ip gateway 사용 시

```conf
# gateway
proxy_set_header X-Forwarded-For $remote_addr;

# proxy
proxy_set_header  X-Forwarded-For $http_x_forwarded_for;
```
