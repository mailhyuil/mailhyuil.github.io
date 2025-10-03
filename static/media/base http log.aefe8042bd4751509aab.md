# base http log

## info level

> (정상적인 요청 + 클라이언트의 실수 + 404 exception (404는 단순한 데이터 없음을 뜻함 비즈니스 오류가 아닌 이상 info로 처리))
>
> > Most production Web server admins are content with seeing 404s in their access logs
> >
> > (which are logged right alongside 200s and 30x redirects)

```txt
2xx (정상 요청)
3xx (리다이렉션)
 +
404 (데이터 없음)
```

## warn level

> (보안관련 exception)

```txt
401 (인증 실패)
403 (권한 없음)
498 (토큰 인증 실패)
429 (요청 제한)
```

## error level

> (business logic exception + server error)
>
> > 404는 제외

```txt
4xx except 404
5xx
```
