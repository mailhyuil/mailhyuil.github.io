# angular guard

> 인터페이스는 deprecated
>
> > 함수형으로 작성
> >
> > > canActivate => route에 접근할 수 있냐는 뜻 && 라우팅 해도 되겠냐는 뜻 (activatedRoute : 현재 라우트)

```ts
const canActivateTeam: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(PermissionsService).canActivate(inject(UserToken), route.params.id);
};
```

## AppModule

```ts
bootstrapApplication(App, {
  providers: [
    provideRouter([
      {
        path: "team/:id",
        component: TeamComponent,
        canActivate: [canActivateTeam],
      },
    ]),
  ],
});
```

## guards/auth.guard.ts

```ts
export const AuthGuard = (next: ActivatedRouteSnapshot) => {
  const store = inject(Store);
  const router = inject(Router);
  const toast = inject(ToastService);

  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    router.navigateByUrl("/auth", { replaceUrl: true });
    return false;
  }

  store
    .select((state) => state.auth.user)
    .subscribe((user) => {
      if (!user) {
        const httpService = inject(HttpService);
        httpService.get<IUserDTO>("auth").subscribe({
          next: (res) => {
            if (res.status === "INACTIVE") {
              router.navigateByUrl("/auth", { replaceUrl: true });
              toast.show("비활성화된 계정입니다.", "danger");
              return false;
            } else {
              store.dispatch(new SetUser(res));
              return true;
            }
          },
        });
      }
    });
  return true;
};
```

## app.routes.ts

```ts
canActivate: [AuthGuard],
canActivateChild: [AuthGuard], // 자식 라우트에도 적용하기
```
