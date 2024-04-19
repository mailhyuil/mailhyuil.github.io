# nest base provider REQUEST

> req 객체를 담고있는 provider
>
> > @Inject(REQUEST)를 사용하면 service가 request scope가 된다.
> >
> > > request scope service는 onModuleInit이 발생하지 않는다.
> > >
> > > > sub-trees context 내에서는 직접 등록해야함

```ts
@Injectable()
export class SomeService {
  constructor(@Inject(REQUEST) private readonly req: Request) {
    console.log(this.req.user);
  }
}
```

## sub-tree context의 REQUEST 등록

> ContextIdFactory를 사용하여 sub-tree context를 생성
>
> > moduleRef.registerRequestByContextId를 사용하여 sub-tree context에 REQUEST 등록

```ts
const contextId = ContextIdFactory.create();
this.moduleRef.registerRequestByContextId(req, contextId);
```

```ts
@Injectable({
  scope: Scope.REQUEST,
  durable: true,
})
export class CatsService {
  constructor(@Inject(REQUEST) private request: Record<string, unknown>) {}
}
```
