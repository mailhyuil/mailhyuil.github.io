# nestjs decorator Cacheable in-memory cache

## app.module.ts

> import DiscoveryModule

```ts
import { DiscoveryModule } from "@nestjs/core";

@Module({
  imports: [DiscoveryModule],
  controllers: [AppController],
  providers: [AppService, CacheDecoratorRegister],
})
export class AppModule {}
```

## cacheable.decorator.ts

> decorator 생성

```ts
export const CACHEABLE = Symbol("CACHEABLE");
export const Cacheable = (ttl: number) => SetMetadata(CACHEABLE, ttl);
```

## cache-decorator-register.ts

> CacheDecoratorRegister 생성

```ts
@Injectable()
export class CacheDecoratorRegister implements OnModuleInit {
  constructor(
    private readonly discoveryService: DiscoveryService,
    private readonly metadataScanner: MetadataScanner,
    private readonly reflector: Reflector,
    private readonly cache: Cache,
  ) {}

  onModuleInit() {
    return this.discoveryService
      .getProviders() // #1. 모든 provider 조회
      .filter(wrapper => wrapper.isDependencyTreeStatic())
      .filter(({ instance }) => instance && Object.getPrototypeOf(instance))
      .forEach(({ instance }) => {
        this.metadataScanner.scanFromPrototype(instance, Object.getPrototypeOf(instance), methodName => {
          // #2. 메타데이터 value
          const ttl = this.reflector.get(CACHEABLE, instance[methodName]);
          if (!ttl) {
            return;
          }

          const methodRef = instance[methodName];

          // #3. 기존 함수 데코레이팅
          instance[methodName] = async function (...args: any[]) {
            const name = `${instance.constructor.name}.${methodName}`;
            const value = await this.cache.get(name, args);
            if (value) return value;

            const result = await methodRef.call(instance, ...args);
            await this.cache.set(name, args, result, ttl);
            return result;
          };
        });
      });
  }
}
```

## usage

```ts
@Controller()
export class SomeController {
  constructor(private readonly someService: SomeService) {}

  @Cacheable(0)
  @Get()
  getData() {
    return this.someService.getData();
  }
}
```
