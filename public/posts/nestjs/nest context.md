# nest context

> 요청이 들어올 때마다 새로운 context를 생성한다.
> context란 요청이 지나갈 앱 pipeline의 모든 정보를 담고 있는 객체이다.
>
> > guard, filter, interceptor, @Req로 접근 가능
> >
> > > ExcutionContext, ArgumentsHost
> > >
> > > > ArgumentsHost의 switchToHttp()로 ExcutionContext 인스턴스를 가져올 수 있다.

## context에 접근하기

```js
if (host.getType() === 'http') {
  // do something that is only important in the context of regular HTTP requests (REST)
  const request = host.switchToHttp().getRequest();
  const response = host.switchToHttp().getResponse();
} else if (host.getType() === 'rpc') {
  // do something that is only important in the context of Microservice requests
} else if (host.getType<GqlContextType>() === 'graphql') {
  // do something that is only important in the context of GraphQL requests
}
```
