# nest base custom provider (외부 api로 service 생성)

## some.provider.ts

> useFactory 내에서 api client를 init 후 return
>
> > type이 없는 경우 `ReturnType<typeof [CLIENT_생성_함수]>`로 type 생성

```ts
import { createClient } from "some-api-client";

export type SomeClient = ReturnType<typeof createClient>;
export const SOME_CLIENT = Symbol("SOME_CLIENT");

export const SomeProvider = [
  {
    provide: SOME_CLIENT,
    useFactory: async () => {
      const client = createClient({
        url: process.env["SOME_URL"], // "some://localhost:6379"
      });

      // set config
      // client.expire('key', 60);
      // ...

      await client.connect();
      return client;
    },
  },
];
```

## some.module.ts

> module이 destroy 될 때 client를 disconnect

```ts
@Module({
  imports: [ConfigModule],
  providers: [SomeProvider],
  exports: [SomeProvider],
})
export class SomeModule implements OnModuleDestroy {
  constructor(@Inject(SOME_CLIENT) private readonly client: SomeClient) {}

  async onModuleDestroy() {
    await this.client.disconnect();
  }
}
```

## usage

```ts
@Injectable()
export class SomeService {
  constructor(@Inject(SOME_CLIENT) private readonly client: SomeClient) {}

  async someMethod() {
    return this.client.someMethod();
  }
}
```
