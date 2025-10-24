# nodejs module events EventEmitter

```js
const EventEmitter = require('events')
const emitter = new EventEmitter();

emitter.on('hi', (args) => {
    console.log('first-callback', args)
})

emitter.emit('hi' {message: 'hi'})
```

## 재사용성이 높은 이벤트 클래스 만들기

```js
///// 이렇게 하면 안됨 /////
const EventEmitter = require("events");
const emitter = new EventEmitter();

function log(callback) {
  emitter.emit("log", "started...");
  callback();
  emitter.emit("log", "ended!");
}

///// 이렇게 하기 /////
class Logger extends EventEmitter {
  log(callback) {
    this.emit("log", "started...");
    callback();
    this.emit("log", "ended!");
  }
}

const logger = new Logger();
logger.on("log", (event) => {
  console.log(event);
});
```
