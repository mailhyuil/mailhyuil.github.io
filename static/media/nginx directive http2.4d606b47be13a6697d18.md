# nginx base directive http2

```conf
http2 on;

location / {
  proxy_pass http://upstream;
  http2_push_preload on;
}
```
