# nginx server sent events (SSE)

```conf
location / {
    proxy_set_header Connection "";
    proxy_http_version 1.1;
    chunked_transfer_encoding off;

    proxy_buffering off;
    proxy_cache off;

    proxy_pass http://backend;
}
```
