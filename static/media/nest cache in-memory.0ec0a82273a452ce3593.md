# nest cache in-memory

## install

```sh
npm i @nestjs/cache-manager cache-manager
```

## 사용

### app.module.ts

```ts
import { CacheModule, Module } from "@nestjs/common";
import { AppController } from "./app.controller";

@Module({
  imports: [CacheModule.register()],
  controllers: [AppController],
})
export class AppModule {}
```

### app.controller.ts

```ts
@Controller()
export class AppController {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}
  async findAll(): string {
    await this.cache.set("key", "value");
    const value = await this.cache.get("key");
    await this.cache.del("key");
    await this.cache.reset();
  }
}
```
