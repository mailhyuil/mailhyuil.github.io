# typescript lib

> typescript는 built-in JS APIs의 type 정의만 가지고 있다.
>
> > 따라서 새로운 버전의 JS 기능이나 Polyfill, 브라우저 API을 사용하고 싶다면 lib에 추가해야 한다.
> >
> > > e.g. dom, es6, dom.iterable, scripthost, webworker ...

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "es6", "dom.iterable", "scripthost", "webworker"]
  }
}
```
