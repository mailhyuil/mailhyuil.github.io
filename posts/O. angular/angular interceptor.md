# angular interceptor

## AppModule

```
{ provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
```

## service

```ts
@Injectable({
  providedIn: "root",
})
export class HttpInterceptorImpl implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((e) => {}));
  }
}
```

## interceptor request clone

### 요청에 직접 추가

```ts
req.headers.append("Authorization", `Bearer ${localStorage.getItem("accessToken")}`);
```

### 요청을 복사해서 추가

```ts
const request = req.clone(
  accessToken
    ? {
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    : {}
);
```
