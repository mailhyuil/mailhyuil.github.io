# nest base httpAdapter & httpServer

> nestjs는 express, fastify 같은 underlying 라이브러리의 인스턴스를 직접 사용하지 않는다.
>
> 대신, http adapter가 이런 라이브러리를 감싸고 있다.
>
> > 이 underlying http server(express)에 접근하기 위해서는 http adapter를 통해야 한다.
> >
> > > HttpAdapter는 HttpServer를 implements하고 있다.

## http adapter 접근

> main에서는 app.getHttpAdapter()를 통해 http adapter에 접근할 수 있다.

```ts
const app = await NestFactory.create(AppModule);

const httpAdapter = app.getHttpAdapter();
const instance = httpAdapter.getInstance();
// or
const adapterHost = app.get(HttpAdapterHost);
const httpAdapter = adapterHost.httpAdapter;
const instance = httpAdapter.getInstance();

// 직접 접근
const instance = app.getHttpServer();
```

## http adapter host 주입

> http adapter는 직접 주입받을 수는 없다.
>
> > http adapter host를 주입받아서 http adapter를 얻어야 한다.

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
