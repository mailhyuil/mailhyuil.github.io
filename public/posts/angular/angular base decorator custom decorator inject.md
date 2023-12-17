# angular base decorator custom decorator inject

> 데코레이터 내에서 서비스를 주입하기
>
> > this로 사용이 가능하지만 데코레이터를 사용하는 컴포넌트에서 주입을 받아야 하고 필드명도 일치해야한다는 불편함이 있다.
>
> > component에서 static 필드와 메소드를 사용하여 주입

## app.component.ts

```ts
export default class AppComponent implements OnInit {
  private static _httpClient?: HttpClient;

  constructor(private readonly httpClient: HttpClient) {
    if (this.httpClient) {
      AppComponent._httpClient = this.httpClient;
    }
  }
  static getHttpClient() {
    return AppComponent._httpClient;
  }
  ngOnInit(): void {}
}
```

## decorator

```ts
import AppComponent from "../app.component";

export function MethodDecorator() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      // AppComponent에서 static으로 선언한 httpClient를 사용
      const httpClient = AppComponent.getHttpClient();
      if (httpClient) {
        console.log("httpClient", httpClient);
        httpClient.get("http://localhost:3000/api/v1").subscribe();
      }
      const result = await originalMethod.apply(this, args);
      return result;
    };

    return descriptor;
  };
}
```
