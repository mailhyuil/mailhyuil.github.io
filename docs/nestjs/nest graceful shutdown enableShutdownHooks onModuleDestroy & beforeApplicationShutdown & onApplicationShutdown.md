# nest graceful shutdown enableShutdownHooks onModuleDestroy & beforeApplicationShutdown & onApplicationShutdown

> enableShutdownHooks를 활성화하면, onModuleDestroy, beforeApplicationShutdown, onApplicationShutdown 순으로 호출된다.
>
> > 기본적으로 Node.js (런타임 레벨)에서 OS 시그널(SIGHUP, SIGINT, SIGTERM 등)을 감지 가능하다.
> >
> > e.g. `process.on("SIGINT", () => { ... });`
> >
> > > NestJS (프레임워크 레벨)에서 이러한 시그널을 감지하기 위해서는 enableShutdownHooks를 활성화해야 한다.

## main.ts

```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks(); // shutdown hook을 활성화
}
```

## some.service.ts

```ts
@Injectable()
class UsersService implements OnApplicationShutdown, OnModuleDestroy, BeforeApplicationShutdown {
  onModuleDestroy() {
    console.log("🧹 Module destroyed");
  }

  beforeApplicationShutdown(signal?: string) {
    console.log("⏳ Before app shutdown", signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log("💀 App shutdown", signal);
  }
}
```
