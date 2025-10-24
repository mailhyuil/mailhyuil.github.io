# openResty

> lua script를 사용하여 nginx를 동적으로 처리하는 웹 서버
>
> > port 8080

## docker

```sh
# config
docker create --name dummy openresty/openresty:alpine &&
docker cp dummy:/etc/nginx $(pwd)/nginx &&
docker cp dummy:/usr/local/openresty $(pwd)/openresty &&
docker cp dummy:/var/run/openresty $(pwd)/var &&
docker rm -f dummy

# run
docker run --name openresty -d -v $(pwd)/nginx:/etc/nginx -v $(pwd)/openresty:/usr/local/openresty -v $(pwd)/var:/var/run/openresty -p 80:80 openresty/openresty:alpine
```

## config

> nginx config 파일과 비슷하지만 lua 스크립트를 사용하여 동적으로 처리할 수 있다.

```conf
server {
    listen 8080;
    location / {
        default_type text/html;
        content_by_lua_block { # lua 스크립트
            ngx.say("<p>hello, world</p>")
        }
    }
}
```
