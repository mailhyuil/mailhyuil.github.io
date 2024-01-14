# nest advanced multi-tenancy durable provider

> database provider의 스코프를 REQUEST로 설정하여, 각 요청마다 다른 인스턴스를 생성를 생성한다. (모든 요청에 DI Tree를 재생성)
>
> 하지만 1,000개의 요청이 들어오면 1,000개의 인스턴스가 생성되어, 메모리를 많이 차지하게 된다.
>
> > durable provider를 사용하면, "테넌트 식별자"를 통해 테넌트별로 별도의 인스턴스를 생성한다. (tenantId를 통해 DI Tree를 재생성)
> >
> > > 테넌트 별로 데이터 소스를 완전히 분리할 수 있다.

## multi-tenancy.strategy.ts

> 요청마다 새로운 context가 실행되는게 nestjs의 기본 동작
>
> > tenantId를 통해 context를 생성해 저장하여 같은 tenantId의 요청이 들어오면, 기존 tenant의 context를 사용하도록 한다.
> >
> > > client에서 request header에 "x-tenant-id"를 추가하여 테넌트 식별자를 전달한다.
> > >
> > > > 테넌트 식별자에 따라서 다른 context를 사용한다.

```ts
import { ContextId, ContextIdFactory, ContextIdStrategy, HostComponentInfo } from "@nestjs/core";
import { Request } from "express";

const tenants = new Map<string, ContextId>();

export class AggregateByTenantContextIdStrategy implements ContextIdStrategy {
  attach(contextId: ContextId, request: Request) {
    const tenantId = request.headers["x-tenant-id"] as string;
    let tenantSubTreeId: ContextId;

    if (tenants.has(tenantId)) {
      // 테넌트 context가 이미 존재한다면, 해당 contextId를 가져온다.
      tenantSubTreeId = tenants.get(tenantId);
    } else {
      // 테넌트 context가 존재하지 않는다면, 새로 생성하여 저장한다.
      tenantSubTreeId = ContextIdFactory.create();
      tenants.set(tenantId, tenantSubTreeId);
    }

    request.tenantId = tenantId;

    // If tree is not durable, return the original "contextId" object
    return (info: HostComponentInfo) => (info.isTreeDurable ? tenantSubTreeId : contextId);

    // payload를 함께 전달하고 싶다면 아래와 같이 작성 // 그냥 request.teantId를 사용해도 된다.
    // (e.g. tenantId를 payload로 전달하여, tenantId에 따라 다른 데이터 소스를 사용할 수 있다.)
    // return {
    //   resolve: (info: HostComponentInfo) =>
    //     info.isTreeDurable ? tenantSubTreeId : contextId,
    //   payload: { tenantId },
    // };
  }
}
```

## main.ts

> ContextIdFactory에 strategy를 적용한다.

```ts
import { ContextIdFactory, NestFactory } from "@nestjs/core";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  ContextIdFactory.apply(new AggregateByTenantContextIdStrategy());
}
```

## some.provider.ts

```ts
import { Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.REQUEST, durable: true })
export class CatsService {}
```

또는

```ts
{
  provide: 'foobar',
  useFactory: () => { ... },
  scope: Scope.REQUEST,
  durable: true,
}
```
