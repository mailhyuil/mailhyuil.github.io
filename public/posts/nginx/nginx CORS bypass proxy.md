# nginx CORS bypass proxy

```conf
location /api/ {
    proxy_set_header Host localhost;
    proxy_set_header Origin http://localhost:3000;
    proxy_pass http://localhost:3000;
}
```
