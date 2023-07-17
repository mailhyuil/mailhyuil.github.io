# js error 처리

> status는 프론트엔드에서 받을 때
>
> > statusCode는 백엔드에서 보낼 때 설정

## error status

```js
if (err.status === 404) {
}
```

## error instance

> 에러 객체를 확장해서 사용하자!

```js
if (error instanceof URIError) {
}
```
