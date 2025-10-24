# base browserslist

> 지원하는 브라우저에 관한 쿼리를 작성하면
>
> > 컴파일 또는 번들링 시 알아서 지원 브라우저에 맞게 컴파일 해준다.
> >
> > > config를 작성하고 npx browserslist를 실행하면 지원하는 브라우저 리스트를 확인할 수 있다.

## package.json에서 정의

```json
{
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 10"]
}
```

## .browserslistrc에서 정의

```sh
> 1%
last 2 versions
not ie <= 10
```
