# event emitter pattern

## 구현

```js
class User {
  constructor(name) {
    this.name = name;
    this.events = {}; // 이벤트와 핸들러를 저장할 객체
  }

  on(event, handler) {
    if (!this.events[event]) {
      this.events[event] = []; // 이벤트 타입에 대한 배열 생성
    }
    this.events[event].push(handler); // 핸들러를 배열에 추가
  }

  // 이벤트 트리거 메서드
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(handler => handler(...args)); // 모든 핸들러 호출
    }
  }
}

// 사용 예제
const user = new User("Alice");

// 'error' 이벤트 핸들러 추가
user.on("error", error => {
  console.error("에러가 발생했습니다:", error);
});

// 'bye' 이벤트 핸들러 추가
user.on("bye", () => {
  console.log("안녕히 가세요!");
});

// 이벤트 트리거
user.emit("error", new Error("무언가 잘못되었습니다!"));
user.emit("bye");
```

## EventEmitter 클래스 상속으로 구현

```js
const EventEmitter = require("events");

class User extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

// 사용 예제
const user = new User("Alice");

// 'error' 이벤트 핸들러 추가
user.on("error", error => {
  console.error("에러가 발생했습니다:", error);
});

// 'bye' 이벤트 핸들러 추가
user.on("bye", () => {
  console.log("안녕히 가세요!");
});

// 이벤트 트리거
user.emit("error", new Error("무언가 잘못되었습니다!"));
user.emit("bye");
```
