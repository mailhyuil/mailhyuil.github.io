# cloudflare real ip

> cf-connecting-ip로 전달된다.

```conf
proxy_set_header X-Forwarded-For $http_cf_connecting_ip;
```
