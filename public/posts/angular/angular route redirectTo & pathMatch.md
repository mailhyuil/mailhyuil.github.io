# angular route redirectTo & pathMatch

> "full" 이면 완전히 일치해야 redirect 된다.
>
> > "prefix" 이면 일부만 일치해도 redirect 된다.

```ts
const routes: Routes = [
  { path: "home", redirectTo: "some", pathMatch: "full" }, // pathMatch: "prefix", pathMatch: "full"
  { path: "some", component: SomeComponent },
];
```
