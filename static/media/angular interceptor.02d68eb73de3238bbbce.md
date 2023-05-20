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
