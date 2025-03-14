# angular route ResolveFn

> Resolver는 라우팅이 완료 되기 전에 원하는 값을 가져와 준다.
>
> > component가 OnInit이 되기 전에 값을 가져온다.
> >
> > > > component의 APP_INITIALIZER라고 생각하면 된다.
> > > >
> > > > > 페이지 진입 지연될 수 있기 때문에 ResolveFn내에서 과도한 연산은 지양해야 한다.
> > > > >
> > > > > ResolveFn 내에서 예외가 발생할 경우 라우팅이 중단되어 페이지에 진입할 수 없기 때문에 반드시 예외처리가 필요하다.

## resolver 구현

```ts
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { map } from "rxjs";

export const AuthResolver: ResolveFn<{
  name: string;
  email: string;
}> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const userId = route.queryParams["userId"];
  return authService.findById(userId).pipe(
    map(user => {
      const name = user.name;
      const email = user.email;
      return { name, email };
    }),
    catchError(err => {
      console.error(err);
      return null;
    }),
  );
};
```

## app.routes.ts 에 등록

```ts
{
  path: 'certification',
  data: {
    title: '수료증 발급',
  },
  resolve: { auth: AuthResolver },
  loadComponent: () =>
    import('./pages/certification/certification.component'),
}
```

## resolver에서 return한 값 받기

```ts
ngOnInit(): void {
  const { auth } = this.route.snapshot.data;
  this.name = auth.name;
  this.email = auth.email;
}
```
