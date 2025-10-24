# nginx directive return & rewrite

## return (redirect)

```conf
return 200 "hello world";
return 307 /some/path;
```

## rewrite

> return과 다르게 내부적으로 요청을 처리하고
>
> > browser의 uri는 기존에 호출했던 uri를 유지합니다.
> >
> > > rewrite는 내부에서 redirect를 처리하고 외부에 노출하지 않습니다.

```conf
rewrite ^/logo?$ /thumb.png last;
```
