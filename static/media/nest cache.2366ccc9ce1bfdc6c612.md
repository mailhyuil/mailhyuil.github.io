# nest cache

## install

```sh
npm i cache-manager
```

## 사용

```ts
import { CacheModule, Module } from "@nestjs/common";
import { AppController } from "./app.controller";

@Module({
  imports: [CacheModule.register()],
  controllers: [AppController],
})
export class AppModule {}
```

```ts
constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
await this.cacheManager.set('key', 'value');
const value = await this.cacheManager.get('key');
await this.cacheManager.del('key');
await this.cacheManager.reset();
```
