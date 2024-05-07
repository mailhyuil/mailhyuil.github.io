# nginx HSTS

```conf
server {
  listen 443 ssl;
  listen [::]443 ssl;

  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload";
}
```
