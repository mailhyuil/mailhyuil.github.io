# aws message queue amazonMQ

> 아마존 클라우드의 관리형 메시지 브로커 서비스
>
> > apache activeMQ, RabbitMQ 엔진 유형을 지원

## 시작

1. rabbitMQ 엔진 선택
2. amqplib 설치

```sh
npm i amqplib
```

### 메세지 보내기

```js
const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", (error0, connection) => {
  if (error0) throw error0;

  connection.createChannel((error1, channel) => {
    if (error1) throw error1;

    const queue = "hello";
    const msg = "Hello world";

    channel.assertQueue(queue, {
      durable: false,
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });
});
```

### 메세지 받기

```js
const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", (error0, connection) => {
  if (error0) throw error0;

  connection.createChannel((error1, channel) => {
    if (error1) throw error1;

    const queue = "hello";

    channel.assertQueue(queue, {
      durable: false,
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(
      queue,
      msg => {
        console.log(" [x] Received %s", msg.content.toString());
      },
      {
        noAck: true,
      },
    );
  });
});
```
