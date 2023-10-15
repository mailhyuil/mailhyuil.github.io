# angular Resolver

> resolver 사용 안할 시 : 유저 link 클릭 -> 바로 라우팅
>
> > resolver 사용 시 : 유저 link 클릭 -> resolver -> 라우팅

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
