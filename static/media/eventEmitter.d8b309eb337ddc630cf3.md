# eventEmitter

> Nodejs의 비동기, 논블로킹 I/O 매커니즘을 처리하는 핵심적인 부분

```js
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("myevent", () => console.log("handler1: myevent was fired!"));
myEmitter.on("myevent", () => console.log("handler2: myevent was fired!"));
myEmitter.on("myevent", () => console.log("handler3: myevent was fired!"));

myEmitter.emit("myevent");
console.log("I am the last log line");
```
