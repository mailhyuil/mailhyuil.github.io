# angular state management ngxs store

> Action, Selector, State
>
> > Selector = get
> >
> > > Action = set

## install

```bash
npm i @ngxs/store
```

## main.ts

```ts
importProvidersFrom(NgxsModule.forRoot([AdminState])),
```

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
export class AdminState {}
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

## store/auth.store.ts

```ts
export type AdminStateModel = {
  admin: IAdminDTO | null;
};

export class SetAdmin {
  static readonly type = "[Admin] Set Admin";
  constructor(public admin: IAdminDTO) {}
}

@State<AdminStateModel>({
  name: "admin",
  defaults: {
    admin: null,
  },
})
@Injectable()
export class AdminState {
  @Selector()
  static getAdmin(state: AdminStateModel): IAdminDTO | null {
    return state.admin;
  }

  @Action(SetAdmin)
  setAdmin(ctx: StateContext<AdminStateModel>, action: SetAdmin) {
    ctx.setState({ admin: action.admin });
  }
}
```

## auth.guard.ts

```ts
export const AuthGuard = (next: ActivatedRouteSnapshot): boolean => {
  const store = inject(Store);
  const router = inject(Router);
  const toast = inject(ToastService);
  const httpService = inject(HttpService);

  return true;

  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    router.navigateByUrl("/login", { replaceUrl: true });
    return false;
  }

  store
    .selectOnce<AdminStateModel>((state) => state.admin)
    .subscribe({
      next: (state) => {
        const loginedAdmin = state.admin;
        if (!loginedAdmin) {
          router.navigateByUrl("/login", { replaceUrl: true });
          return false;
        }

        return true;
      },
    });

  return false;
};
```
