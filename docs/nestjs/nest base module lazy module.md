# nest base module lazy module

> 모듈이 필요할 때만 로드

## tsconfig.json

```json
{
  "compilerOptions": {
    "module": "esnext",
    "moduleResolution": "node"
  }
}
```

## main.ts

```ts
const lazyModuleLoader = app.get(LazyModuleLoader);
const { LazyModule } = await import("./lazy.module");
const moduleRef = await this.lazyModuleLoader.load(() => LazyModule);

const { LazyService } = await import("./lazy.service");
const lazyService = moduleRef.get(LazyService);
```
