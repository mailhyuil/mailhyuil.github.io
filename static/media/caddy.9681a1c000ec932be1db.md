# caddy

> go로 작성된 최신 웹서버
>
> > 자동으로 https 적용
> >
> > > 최초로 http3 지원

## install

```sh
docker run --name caddy -d -p 80:80 -p 443:443 -v $(pwd)/Caddyfile:/etc/caddy/Caddyfile -v $(pwd)/html:/var/www/html caddy
```

## Caddyfile

```Caddyfile
localhost {
	respond "Hello, world!"
}

localhost:2016 {
	respond "Goodbye, world!"
}
```
