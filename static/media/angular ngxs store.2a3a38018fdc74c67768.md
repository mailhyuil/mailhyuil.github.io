# angular store

> Selector = get
>
> > Action = set

## State

> 상태를 가진 클래스

```ts
@State<AdminStateModel>({
  name: "admin",
  defaults: {
    admin: null,
  },
})
@Injectable()
export class AdminStore {}
```

## Action

> 상태를 변경하는 클래스

```ts
export class AddAnimal {
  static readonly type = "[Zoo] Add Animal";
  constructor(public name: string) {}
}
```

### Dispatching Action

> Action class를 dispatch => @Action()이 호출됨
>
> > @Select()가 호출되면 => @Selector()가 호출됨

```ts
addAnimal(name: string) {
  this.store.dispatch(new AddAnimal(name));
}

@Action(SetAuth) // dispatch가 수행되면 이 Action 핸들러가 호출된다.
setAuth(ctx: StateContext<AuthStateModel>, action: SetAuth) {
  ctx.setState({
    auth: action.auth,
  });
}

@Selector // @Select()가 호출되면 호출됨
```

## Store

```ts
@Select((state)=>state.auth)
@Select(AuthState)
@Select(AuthState.auth)

this.store.selectSnapshot(state=>state.auth)
this.store.selectOnce(state=>state.auth)
this.store.select(state=>state.auth)

this.store.subscribe()
```
