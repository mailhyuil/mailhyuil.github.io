# http headers 보안 same-origin & same-site & cross-origin

## same-origin

> protocol, host(subdomain), port가 동일한 origin

```txt
http://example.com:80
http://example.com:80/posts/1
http://example.com:80/api/v1/users/me
```

## same-site

> root domain이 같은 경우
>
> > protocol, host(subdomain), port가 다르더라도 root domain이 같으면 same-site

```txt
http://example.com:80
http://example.com:80/posts/1
http://example.com:80/api/v1/users/me
https://api.example.com:3000
https://api.example.com:3000/v1/users/me
```

## cross-origin

> protocol, host(subdomain), port 중 하나라도 다른 경우

```txt
http://example.com:80
https://mailhyuil.github.io:80
http://www.dep.team:80
```
