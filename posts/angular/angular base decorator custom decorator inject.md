# angular base decorator custom decorator inject

> 데코레이터 내에서 주입된 서비스 사용하기
>
> > 주입된 서비스를 사용할 특별한 서비스를 생성해야한다.

# DecoratorService

> 데코레이터 내에서 주입된 서비스를 사용하기 위한 서비스

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
