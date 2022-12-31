# eventEmitter

> Nodejs의 비동기, 논블로킹 I/O 매커니즘을 처리하는 핵심적인 부분

```js
import EventEmitter from "events";
const myEmitter = new EventEmitter();

myEmitter.on("myevent", (e) => console.log(e));

myEmitter.emit("myevent", "hey"); // hey
```
