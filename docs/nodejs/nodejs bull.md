# nodejs bull

## install

```sh
npm i bull
```

## redis 서버 run

> bull은 기본으로 redis 서버를 사용한다.

```sh
docker run -d --name my-redis -p 6379:6379 redis
```

## code

```ts
const Queue = require("bull");

const myQueue = new Queue("myQueue"); // queue 생성

myQueue.add({ message: "Hello, world!" }); // job 추가
myQueue.add({ message: "Hello, world!" });
myQueue.add({ message: "Hello, world!" });
myQueue.add({ message: "Hello, world!" });
myQueue.add({ message: "Hello, world!" });
myQueue.add({ message: "Hello, world!" });

myQueue.process(job => {
  // 들어온 job 수행
  console.log(job.data.message);
});

myQueue.start(); // start
```
