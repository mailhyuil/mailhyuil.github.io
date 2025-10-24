# nest base execution context - ctx

## ArgumentsHost

> 핸들러를 통해 전달되는 인자를 얻을 수 있는 메소드를 제공하는 클래스
>
> > host 매개변수로 인스턴스를 얻을 수 있다.
> >
> > > [request, response, next] 핸들러 인자를 갖는다

### host.getType()

> 앱의 타입을 얻을 수 있다.

### 핸들러 인자

> 권장하지 않는 방법

```ts
const [req, res, next] = host.getArgs();
```

### 컨텍스트 전환 메소드

```ts
/**
 * Switch context to RPC.
 */
switchToRpc(): RpcArgumentsHost;
/**
 * Switch context to HTTP.
 */
switchToHttp(): HttpArgumentsHost;
/**
 * Switch context to WebSockets.
 */
switchToWs(): WsArgumentsHost;

const ctx = host.switchToHttp();
const request = ctx.getRequest<Request>();
const response = ctx.getResponse<Response>();
```

## ExecutionContext
