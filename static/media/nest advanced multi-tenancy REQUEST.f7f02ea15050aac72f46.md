# nest advanced multi-tenancy REQUEST

> ContextIdFactory.create()로 생성한 contextId는 DI-sub-tree를 대표하는 키가 된다.
>
> > DI-subtree에는 REQUEST provider가 기본으로 등록되어 있지 않다.
> >
> > > registerRequestByContextId() method를 통해 등록해주자

```ts
const contextId = ContextIdFactory.create();
this.moduleRef.registerRequestByContextId(/* YOUR_REQUEST_OBJECT */, contextId);
```

## Getting current sub-tree

```ts
@Injectable()
export class CatsService {
  constructor(@Inject(REQUEST) private request: Record<string, unknown>) {}
}
```

```ts
const contextId = ContextIdFactory.getByRequest(this.request);
const catsRepository = await this.moduleRef.resolve(CatsRepository, contextId);
```
