# angular store

> ngxs store

## install

```sh
yarn add @ngxs/store
```

## main.ts

```ts
providers: [
  importProvidersFrom(NgxsModule.forRoot([AuthState])),
],
```

## /store/auth.store.ts

```ts
@State<AuthStateModel>({
  name: "auth",
  defaults: {
    user: null,
  },
})
@Injectable()
export class AuthState implements NgxsOnInit {
  constructor(private httpService: HttpService, private readonly store: Store) {}

  /**
   * 앱 실행 시 저장된 토큰을 이용해 사용자 정보를 조회하고 저장합니다.
   */
  ngxsOnInit(ctx: StateContext<any>): void {
    this.httpService.get<IUserDTO>("auth").subscribe({
      next: (user) => {
        ctx.setState({ user });
      },
    });
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.user;
  }

  @Selector()
  static user(state: AuthStateModel): IUserDTO | null {
    return state.user;
  }

  @Action(SetUser)
  setUser(ctx: StateContext<AuthStateModel>, action: SetUser) {
    ctx.setState({
      user: action.user,
    });
  }

  @Action(ResetUser)
  resetUser(ctx: StateContext<AuthStateModel>) {
    ctx.setState({
      user: null,
    });
  }
}
```
