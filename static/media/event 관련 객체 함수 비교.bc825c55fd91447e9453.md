# event 관련 객체 함수 비교

## EventEmitter (Node.js)

> Node.js의 events 모듈에 내장된 클래스입니다.

```js
/* 방출 */
emit();

/* 소비 */
on();
```

## Subject (RxJS)

> Subject는 옵저버 패턴의 일부인 Observable의 확장입니다.

```js
/* 방출 */
next();

/* 소비 */
subscribe();
```

## KafkaJs

> Producer와 Consumer를 통해 메시지를 송수신합니다.

```js
/* 방출 */
kafka.producer().connect();
send({
  // payloads
  topic: "topic-name",
  messages: [
    { key: "key1", value: "hello world", partition: 0 },
    { key: "key2", value: "hey hey!", partition: 1 },
  ],
});

/* 소비 */
kafka.consumer({ groupId: "my-group" }).connect();
subscribe({ topics: ["topic-name"] });
run({ eachMessage: ({ topic, partition, message, heartbeat, pause }) => {} });
```

## RabbitMQ

> Channel을 통해 메시지를 송수신합니다.

```js
/* 방출 */
createChannel();
assertQueue();
sendToQueue(queue, Buffer.from("something"));

/* 소비 */
createChannel();
assertQueue();
consume(queue, (message) => {
  console.log(message.content.toString());
});
```

## NATS

```js
/* 방출 */
connect({ servers: "" });
publish(subject, message);

/* 소비 */
connect({ servers: "" });
subscribe(subject, handler);
request(subject, message, callback);
```

## gRPC

```js
/* 방출 */

/* 소비 */
```

## tRPC

```js
/* 방출 */

/* 소비 */
```

## websocket

```js
/* 방출 */

/* 소비 */
```
