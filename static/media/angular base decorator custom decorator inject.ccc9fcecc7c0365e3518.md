# angular base decorator custom decorator inject

> 데코레이터 내에서 주입된 서비스 사용하기

# 방법 1

> SharedModule을 생성하여 static injector를 사용

## SharedModule

```ts
@NgModule({
  declarations: [],
  imports: [],
  providers: [SomeService],
})
export class SharedModule {
  static injector: Injector;

  constructor(injector: Injector) {
    SharedModule.injector = injector;
  }
}
```

## Decorator

```ts
export function CustomDecorator() {
  return (target: object, key: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]): any {
      // access the service
      const service = SharedModule.injector.get<SomeService>(SomeService);
      // logic..
    };

    return descriptor;
  };
}
```

# 방법 2

## DecoratorService

> 주입된 서비스를 사용할 특별한 서비스를 생성

```ts
@Injectable()
export class DecoratorService {
  private static service: Service | undefined = undefined;
  public constructor(service: Service) {
    DecoratorService.service = service;
  }
  public static getService(): Service {
    if (!DecoratorService.service) {
      throw new Error("DecoratorService not initialized");
    }
    return DecoratorService.service;
  }
}
```

## Decorator

```ts
export function canEdit(editName: string) {
  return function (constructor: any) {
    const service = DecoratorService.getService();
    // ^^^ access dependency here
    console.log(constructor);
  };
}
```

## module

```ts
@NgModule({
  provides: [DecoratorService],
})
export class MainModule {
  public constructor(service: DecoratorService) {
    // ^^^ forces an instance to be created
  }
}
```
