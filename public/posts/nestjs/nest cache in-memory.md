# nest cache in-memory

## install

```sh
npm i cache-manager
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
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async findAll(): string {
    await this.cacheManager.set("key", "value");
    const value = await this.cacheManager.get("key");
    await this.cacheManager.del("key");
    await this.cacheManager.reset();
  }
}
```
