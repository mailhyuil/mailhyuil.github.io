# rabbitMQ

> AMQP 프로토콜을 사용하는 메시지 브로커

## rabbitMQ server 설치

> 5672 포트 사용

```sh
apt update && apt install rabbitmq-server
service rabbitmq-server start

# 관리용 대시보드 활성화
# localhost:15672로 접속
rabbitmq-plugins enable rabbitmq_management
service rabbitmq-server restart
```

## nodejs rabbitMQ clinet 설치

```sh
npm install amqplib
```

## 메세지 보내기

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

## 메세지 받기

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
      (msg) => {
        console.log(" [x] Received %s", msg.content.toString());
      },
      {
        noAck: true,
      }
    );
  });
});
```
