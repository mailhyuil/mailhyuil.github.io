# js 자주 사용하는 pattern

## callback pattern

```js
function createTransaction(cb: tx => void) {
  const tx = new Transaction();
  cb(tx);
}

createTransaction(tx => {
  tx.txLogic();
  customLogic(tx);
});

function customLogic(tx = db) {
  tx.update();
}
```

## event emitter pattern

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

## null object pattern

```js
const nullUser: User = {
  id: undefined,
  name: "Guest",
  email: undefined,
};

function createPost(data: CreatePostDTO, user: User = nullUser) { // user 인자를 안넣거나 undefined로 넣으면 nullUser가 사용됨
  const created = await this.prisma.post.create({
    where: {
      id: data.id,
    },
    data: {
      ...data,
      userId: user.id,
    },
  });

  console.log(`Post created by ${user.name}`)

  return plainToClass(PostDTO, created);
}
```
