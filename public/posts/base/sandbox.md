# sandbox (샌드박스)

> 보호된 영역 내에서 프로그램을 동작시키는 것
>
> > 아이를 모래밭 밖에서 놀게 하지 않는다.
> >
> > > 외부로부터 받은 프로그램을 보호된 영역 안에서 가두고 나서 동작시킨다.
> > >
> > > 다른 파일이나 프로세스로부터 격리되어 내부에서 외부를 조작하는 것은 금지
> > >
> > > > 즉 앱내에서 독립적으로 동작하는 스코프를 만들어주는 것

```js
// 샌드박스 함수
function sandbox(code) {
  const sandbox = {
    console: {
      log: console.log,
      error: console.error,
      warn: console.warn,
    },
  };
  const context = new Proxy(sandbox, {
    get(target, key) {
      if (key in target) {
        return target[key];
      }
      throw new Error(`"${key}" is not defined`);
    },
  });
  const fn = new Function("context", code);
  fn(context);
}
```
