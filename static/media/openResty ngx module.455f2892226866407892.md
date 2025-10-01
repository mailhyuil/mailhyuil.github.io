# OpenResty ngx module

```lua
ngx.say('hello, world') -- client response로 전송 (자동 줄바꿈)
ngx.print('hello, world') -- client response로 전송
ngx.exit(ngx.HTTP_OK) -- client response code
ngx.exit(ngx.HTTP_FORBIDDEN) -- client response code
ngx.redirect('/path') -- client redirect
ngx.log(ngx.ERR, 'error message') -- log to error.log
ngx.log(ngx.WARN, 'warning message') -- log to warn.log
ngx.log(ngx.INFO, 'info message') -- log to access.log

ngx.var.uri
ngx.var.request_method
ngx.req.get_headers()
ngx.req.set_header('key', 'value')
ngx.req.clear_header('key')
ngx.req.read_body()
ngx.req.get_body_data()
ngx.req.get_post_args()
...
```
