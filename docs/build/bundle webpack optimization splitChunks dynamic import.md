# bundle webpack optimization splitChunks dynamic import

> dynamic import를 사용 시 자동으로 code splitting을 할 수 있다.
>
> > /\* webpackChunkName: "my_modal" \*/ 주석을 사용하여 청크 이름을 지정할 수 있다.

## index.js

```js
import(/* webpackChunkName: "my_modal" */ "my_modal").then((modal) => {
  modal.show("hello world");
});
```
