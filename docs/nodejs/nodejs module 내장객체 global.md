# nodejs module 내장객체 global

> global === globalThis
>
> > 어디서든 접근 가능 (e.g. setTimeout, console)

```js
global.console(); // console.log
global.setTimeout(); // setTimeout
global.setInterval(); // setInterval
global.setImmediate(); // setImmediate
global.AbortController;
global.AbortSignal;
global.Array;
```
