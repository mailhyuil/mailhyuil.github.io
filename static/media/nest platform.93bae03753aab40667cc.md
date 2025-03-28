# nest platform

> NestFactory.create() 메소드는 application object를 리턴
>
> > 그러나 플랫폼 API의 베이스에 접근하기 위해서는 타입 명시가 필요하다

## platform-express

```ts
const app = await NestFactory.create<NestExpressApplication>(AppModule);
```

## platform-fastify

```ts
const app = await NestFactory.create<NestFastifyApplication>(AppModule);
```
