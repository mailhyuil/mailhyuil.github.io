# nest base module moduleRef

## usage

```ts
@Injectable()
export class CatsService {
  constructor(private readonly moduleRef: ModuleRef) {}
}
```

## create

> create 동적으로 provider를 생성

```ts
this.catsFactory = await this.moduleRef.create(CatsFactory);
```

## get

> default scope providers 를 찾을 수 있음
>
> > This method retrieves a provider, controller, or injectable (e.g., guard, interceptor, etc.) in the current module

```ts
this.moduleRef.get(SomeService);
this.moduleRef.get(SomeService, { strict: false });
```

## registerRequestByContextId

> 현재 sub-tree에 REQUEST를 등록

```ts
const contextId = ContextIdFactory.create();
this.moduleRef.registerRequestByContextId(/* YOUR_REQUEST_OBJECT */, contextId);
```

## resolve

> request, transient providers 를 찾을 수 있음
>
> > contextId를 사용하여 각 context에 등록된 provider를 찾을 수 있다.

```ts
this.moduleRef.resolve(TransientService);
// or
const contextId = ContextIdFactory.getByRequest(req);
this.moduleRef.resolve(TransientService, contextId);
```
