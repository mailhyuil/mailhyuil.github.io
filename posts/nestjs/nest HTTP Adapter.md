# nest http adapter

> express, fastify 같은 라이브러리, 프레임워크의 인스턴스는 nodejs의 http 모듈를 http adapter로 한번 감싸고 있다.
>
> > 이 underlying http 모듈에 접근하기 위해서는 http adapter를 통해야 한다.

## http adapter 접근

```ts
const app = await NestFactory.create(AppModule);
const httpAdapter = app.getHttpAdapter();
const instance = httpAdapter.getInstance();
```

```ts
import { HttpAdapterHost } from "@nestjs/core";

@Injectable()
export class CatsService {
  constructor(private adapterHost: HttpAdapterHost) {
    const httpAdapter = adapterHost.httpAdapter;
    const instance = httpAdapter.getInstance();
  }
}
```
