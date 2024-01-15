# nest base provider REQUEST

> req 객체를 담고있는 provider
>
> > sub-trees context 내에서는 직접 등록해야함

```ts
@Injectable()
export class SomeService {
  constructor(@Inject(REQUEST) private readonly req: Request) {
    console.log(this.req.user);
  }
}
```

## sub-tree context의 REQUEST 등록

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
