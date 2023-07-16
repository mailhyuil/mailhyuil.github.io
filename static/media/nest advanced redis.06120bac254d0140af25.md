# nest redis

## install for Redis-based microservices

```sh
npm i ioredis
```

## main.ts for Redis-based microservices

```ts
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.REDIS,
  options: {
    host: "localhost",
    port: 6379,
  },
});
```
