# bundle webpack base preload prefetch

> dynamic import에 주석 추가

```js
/* webpackPreload: true */
/* webpackPrefetch: true */
```

```js
import(/* webpackPreload: true */ "module.js");
import(/* webpackPrefetch: true */ "module.js").then((module) => {
  const { default: Component, a, b } = module;
});
```
