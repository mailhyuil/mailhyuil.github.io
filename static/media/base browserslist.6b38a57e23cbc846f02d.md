# browserslist

> browserslist를 사용하여 FrontEnd 프로젝트가 여러 브라우저에서 정상적으로 동작할 수 있도록 환경을 만들어 크로스 브라우저를 해결할 수 있는 것이다.
>
> > config를 작성하고 npx browserslist를 실행하면 지원하는 브라우저 리스트를 확인할 수 있다.

## package.json에서 정의

```json
{
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 10"]
}
```

## .browserslistrc에서 정의

```json
> 1%
last 2 versions
not ie <= 10
```
