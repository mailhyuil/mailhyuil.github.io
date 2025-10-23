# nest base provider factory

> factory class는 인스턴스의 생성과 관리를 담당한다. (e.g. 인스턴스를 싱글톤으로 관리)

## some.factory.ts

```ts
@Injectable()
export class SomeFactory implements onApplicationShutdown {
  someServiceMap = new Map<string, SomeService>();

  create(id: string): SomeService {
    if (!this.someServiceMap.has(id)) {
      this.someServiceMap.set(id, new SomeService());
    }
    return this.someServiceMap.get(id);
  }
  get(id: string): SomeService {
    return this.someServiceMap.get(id);
  }
  delete(id: string): boolean {
    return this.someServiceMap.delete(id);
  }
  onApplicationShutdown(signal?: string) {
    this.someServiceMap.clear();
  }
}
```
