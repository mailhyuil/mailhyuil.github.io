# angular SSR root path가 SSR이 적용 안될 때

> root index가 존재하기 때문에 ssr 서버로 요청을 보내지 않아서 생기는 문제
>
> > location = / 이면 무조건 ssr로 요청을 넣도록 nginx config 변경

```config
location = / {
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    proxy_pass http://localhost:20019;
}
```
