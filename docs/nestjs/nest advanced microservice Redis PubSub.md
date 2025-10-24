# nest advanced microservice Redis PubSub

## install

```sh
npm i @nestjs/microservices

npm i ioredis

# redis 설치
docker run --name redis -d -p 6379:6379 redis:latest

# redis-cli
npm i -g redis-cli
rdcli -h localhost -p 6379
```

## main.ts

```ts
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.REDIS,
  options: {
    host: "localhost",
    port: 6379,
  },
});
```

## middleware

```ts

```
