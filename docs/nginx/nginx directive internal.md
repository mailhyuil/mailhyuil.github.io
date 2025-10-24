# nginx directive internal

> nginx 내부 요청에서만 유효하고 외부 요청에서는 404로 응답하도록 한다.

```conf
location @ssr {
  proxy_pass http://localhost:4000;
}
```
