# angular guard

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
