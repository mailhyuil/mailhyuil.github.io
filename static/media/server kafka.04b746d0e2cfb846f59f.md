# server kafka

> 스트리밍 메시지 브로커 서버

## kafka 서버 설치

```sh
apt update && apt upgrade && apt install default-jdk && apt install wget

wget 공식_홈페이지_다운로드_링크
```

## kafka 클라이언트 설치

```
npm i kafkajs
```

## 코드

```js
const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-kafka-app",
  brokers: ["kafka1:9092", "kafka2:9092"], // 카프카 브로커의 호스트와 포트
});
```
