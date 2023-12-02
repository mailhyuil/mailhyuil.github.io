# nest redis

## install

```sh
npm i ioredis
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
