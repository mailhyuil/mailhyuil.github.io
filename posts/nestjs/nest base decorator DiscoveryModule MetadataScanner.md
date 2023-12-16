# nest decorator DiscoveryModule DiscoveryService & MetadataScanner

> 데코레이터에서 Provider를 사용할 경우 Provider를 무조건 주입하고 있어야한다.
>
> > 메타데이터를 스캐닝 하는 방법으로 Provider를 주입하지 않고 Discover하여 사용할 수 있다.
> >
> > > discoveryService로 모든 provider 조회
> > >
> > > > metadataScanner로 메소드에 접근

## decorator 생성

```ts
export const CACHEABLE = Symbol("CACHEABLE");
export const Cacheable = (ttl: number) => SetMetadata(CACHEABLE, ttl);

@Injectable()
class TargetClass {
  @Cacheable(0)
  test() {}
}
```

## provider 생성

> provider에서 생성한 데코레이터의 토큰을 가진 메소드를 조회하고
>
> > 조회한 메소드에 접근하여 데코레이팅한다.

```ts
@Injectable()
export class CacheDecoratorRegister implements OnModuleInit {
  constructor(
    private readonly discoveryService: DiscoveryService,
    private readonly metadataScanner: MetadataScanner,
    private readonly reflector: Reflector,
    private readonly cache: Cache
  ) {}

  onModuleInit() {
    return this.discoveryService
      .getProviders() // #1. 모든 provider 조회
      .filter((wrapper) => wrapper.isDependencyTreeStatic())
      .filter(({ instance }) => instance && Object.getPrototypeOf(instance))
      .forEach(({ instance }) => {
        this.metadataScanner.scanFromPrototype(instance, Object.getPrototypeOf(instance), (methodName) => {
          // #2. 메타데이터 value
          const ttl = this.reflector.get(CACHEABLE, instance[methodName]);
          if (!ttl) {
            return;
          }

          // 기존 함수를 저장해두고
          const methodRef = instance[methodName];

          instance[methodName] = async function (...args: any[]) {
            // #3. 기존 함수 데코레이팅
            // before..
            const name = `${instance.constructor.name}.${methodName}`;
            const value = await this.cache.get(name, args);
            if (value) {
              return value;
            }

            // 기존 함수 호출
            const result = await methodRef.call(instance, ...args);

            // after..
            await this.cache.set(name, args, result, ttl);
            return result;
          };
        });
      });
  }
}
```
