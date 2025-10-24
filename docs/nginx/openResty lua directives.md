# openResty lua directives

## access_by_lua_block

> 요청이 처리되기 전에 실행
>
> > block 내부에 lua script를 작성

```conf
location / {
    access_by_lua_block {
        ngx.log(ngx.ERR, "🔍 Someone is accessing /")
    }
    root /usr/local/openresty/nginx/html;
    index index.html;
}
```

## access_by_lua

> 요청이 처리되기 전에 실행
>
> > lua file을 지정해서 실행

```conf
location / {
    access_by_lua_file /etc/nginx/lua/access.lua;
}
```

## content_by_lua_block

> 응답을 직접 처리하는 역할
>
> > block 내부에 lua script를 작성

```conf
location /lua {
    content_by_lua_block {
        ngx.say("Hello, Lua!")
    }
}
```

## content_by_lua

> 응답을 직접 처리하는 역할
>
> > lua file을 지정해서 실행

```conf
location /lua {
    content_by_lua_file /etc/nginx/lua/content.lua;
}
```

## content_by_lua_file

> content_by_lua와 동일

```conf
location /lua {
    content_by_lua_file /etc/nginx/lua/response.lua;
}
```
