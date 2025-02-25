# caddy

> go로 작성된 최신 웹서버
>
> > 자동으로 https 적용
> >
> > > 최초로 http3 지원

## install

```sh
docker run -d -p 80:80 -p 443:443 -v /path/to/Caddyfile:/etc/Caddyfile -v /path/to/site:/srv abiosoft/caddy
```

## Caddyfile

```Caddyfile
example.com {
	root * /var/www/wordpress
	encode gzip
	php_fastcgi unix//run/php/php-version-fpm.sock
	file_server
}
```
