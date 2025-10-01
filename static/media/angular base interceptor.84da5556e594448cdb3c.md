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

> HttpReqeust 은 immutable하다!
>
> > 원본 요청객체에 헤더를 추가한뒤 clone을 통해 복사해야 한다.

```ts
const request = req.clone({
  setHeaders: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});
```
