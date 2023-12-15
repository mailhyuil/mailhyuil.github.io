# typescript lib

> lib은 typescript가 컴파일할 때 참조할 수 있는 라이브러리를 설정한다.
>
> > lib 파일에는 ECMAScript 규격에 정의된 자바스크립트 객체들에 대한 인터페이스들이 정의되어 있다.

## es5 default

> target을 es5로 설정하면
>
> > lib에 dom, es5, scripthost가 기본으로 설정된다.

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom.iterable"]
  }
}
```

## es6 default

> target을 es6로 설정하면
>
> > lib에 dom, es6, dom.iterable, scripthost가 기본으로 설정된다.

```json
{
  "compilerOptions": {
    "target": "es6",
    "lib": ["es2020"]
  }
}
```
