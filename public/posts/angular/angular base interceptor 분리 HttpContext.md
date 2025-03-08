# angular interceptor 분리 HttpContext

```ts
export const APP_INIT = new HttpContextToken(() => false);

const context = new HttpContext().set(APP_INIT, true);
http.get<UserDto>(environment.BASE_URL + "/api/v1/auth", {
  context,
});
```

## interceptor

```ts
export function ApiInterceptorFn(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const apiReq = req.clone({
    withCredentials: true,
  });

  if (req.context.get(APP_INIT)) return next(apiReq);

  const errorHandler = inject(GlobalErrorHandler);
  return next(apiReq).pipe(
    catchError(error => {
      if (error instanceof HttpErrorResponse) {
        errorHandler.handleError(error);
      }
      throw error;
    }),
  );
}
```
