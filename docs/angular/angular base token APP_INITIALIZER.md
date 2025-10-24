# angular base token APP_INITIALIZER

> useFactory는 function을 반환하는 함수이다.

## app.module.ts

```ts
{
  provide: APP_INITIALIZER,
  useFactory: () => {
    const authStore = inject(AuthStore);
    const authService = inject(AuthService);
    const router = inject(Router);
    return () =>
      new Promise<void>((resolve) => {
        authService.getProfile().subscribe({ // request auth state
          next: (auth) => {
            authStore.setAuth(auth); // set auth state
            resolve();
          },
          error: () => {
            router.navigate(['/login']);
            resolve();
          },
        });
      });
  },
  multi: true,
}
```
