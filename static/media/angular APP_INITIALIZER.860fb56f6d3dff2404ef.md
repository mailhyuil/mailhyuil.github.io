# angular APP_INITIALIZER

> useFactory는 function을 반환하는 함수이다.

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [AuthService],
      multi: true,
      useFactory: (authService: AuthService) => () => {
        // init authState with authService
      },
    },
  ],
};
```
