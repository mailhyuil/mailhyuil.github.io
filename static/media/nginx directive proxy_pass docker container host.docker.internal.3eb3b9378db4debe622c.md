# nginx proxy_pass docker container host.docker.internal

## nginx.conf

> host.docker.internal 로 바인딩

```conf
location /api/v1 {
    proxy_buffer_size          128k;
    proxy_buffers              4 256k;
    proxy_busy_buffers_size    256k;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $host;

    proxy_pass http://host.docker.internal:3000;
}
```

## docker run

> --add-host=host.docker.internal:host-gateway 로 바인딩

```sh
docker run --name my-nginx --add-host=host.docker.internal:host-gateway -d -p 80:80 nginx
```
