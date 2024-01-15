# nest base module moduleRef methods

```ts
@Injectable()
export class CatsService {
  constructor(private readonly moduleRef: ModuleRef) {
    // get (default scope providers)를 찾을 수 있음
    // This method retrieves a provider, controller, or injectable (e.g., guard, interceptor, etc.) in the current module
    this.moduleRef.get(SomeService);
    this.moduleRef.get(SomeService, {strict: false});

    // 현재 sub-tree에 REQUEST를 등록
    const contextId = ContextIdFactory.create();
    this.moduleRef.registerRequestByContextId(/* YOUR_REQUEST_OBJECT */, contextId);

    // resolve (request, transient providers)를 찾을 수 있음
    // contextId를 사용하여 각 context에 등록된 provider를 찾을 수 있다.
    this.moduleRef.resolve(TransientService);
    const contextId = ContextIdFactory.getByRequest(/* YOUR_REQUEST_OBJECT */);
    this.moduleRef.resolve(TransientService, contextId);

    // create 동적으로 provider를 생성
    this.catsFactory = await this.moduleRef.create(CatsFactory);
  }
}
```
