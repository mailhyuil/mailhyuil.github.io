# angular @ngxs/store

> action, selector, state

## install

```bash
npm i @ngxs/store
```

## main.ts

```ts
importProvidersFrom(NgxsModule.forRoot([AdminStore])),
```

## store/auth.store.ts

```ts
import { Injectable } from "@nestjs/common";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { IAdminDTO } from "interface";

export class SetAdmin {
  static readonly type = "[Admin] Set Admin";
  constructor(public admin: IAdminDTO) {}
}

export type AdminStateModel = {
  admin: IAdminDTO | null;
};

@State<AdminStateModel>({
  name: "admin",
  defaults: {
    admin: null,
  },
})
@Injectable()
export class AdminStore {
  @Selector()
  static admin(state: AdminStateModel): IAdminDTO | null {
    return state.admin;
  }

  @Action(SetAdmin)
  setAdmin(ctx: StateContext<AdminStateModel>, action: SetAdmin) {
    ctx.setState({ admin: action.admin });
  }
}
```

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
