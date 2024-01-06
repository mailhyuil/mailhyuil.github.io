# angular Resolver

> Resolver는 라우팅이 완료 되기 전에 원하는 값을 가져와 준다.
>
> > 컴포넌트 OnInit이 되기 전에 값을 가져온다.

## resolver 구현

```ts
export const SomeResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return "hello!";
};
```

## app.routes.ts 에 등록

```ts
{
    path: 'some',
    component: SomeComponent,
    resolve: {some: SomeResolver},
}
```

## resolver에서 return한 값 받기

```ts
ngOnInit() {
    this.activatedRoute.data.subscribe(
        ({some}) => {
            console.log(some);
        }
    );
}
```
