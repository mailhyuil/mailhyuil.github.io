# OpenResty

> port 8080

## docker

```sh
docker run --name openresty -d -p 9000:8080 bitnami/openresty:latest
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

## lua script

> LuaJIT을 사용하여 처리
>
> > /usr/local/openresty/nginx/scripts/hi.lua
> >
> > > scripts 디렉토리를 생성해서 lua 파일 생성
> > >
> > > > nginx의 변수를 lua에서 사용 가능
> > > >
> > > > > content_by_lua_block, content_by_lua, content_by_lua_file, access_by_lua_block, access_by_lua

```lua
-- JSON을 다루는 라이브러리를 로드합니다.
local cjson = require("cjson")

-- Defines an initial status for the request.
ngx.status = ngx.HTTP_OK

-- Serves the JSON content, using the cjson module to encode the Lua
-- object as a JSON one.
ngx.say(cjson.encode(
    {
        name = "world",
        message = "Hello, ",
        punctuation = "!"
    }
))

-- Exits with the success status.
return ngx.exit(ngx.HTTP_OK)

-- nginx의 변수를 lua에서 사용 가능
local page = ngx.var.arg_page
local authorization = ngx.var.http_authorization
local host = ngx.var.host
```
