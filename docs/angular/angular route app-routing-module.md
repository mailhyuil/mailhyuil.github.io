# angular route app-routing-module

## install option

```sh
ng new routing-app --routing --defaults
```

## app-routing-module.ts

```ts
const routes: Routes = [
  { path: "first-component", component: FirstComponent },
  { path: "second-component", component: SecondComponent },
];
```

## template

```html
<a routerLink="/first-component" routerLinkActive="active" ariaCurrentWhenActive="page">First Component</a>
<a routerLink="/second-component" routerLinkActive="active" ariaCurrentWhenActive="page">Second Component</a>

<router-outlet></router-outlet>
<!-- 라우팅된 화면 -->
```

## redirect

```ts
const routes: Routes = [
  { path: "some", component: SomeComponent },
  { path: "", redirectTo: "/some", pathMatch: "full" },
  { path: "**", redirectTo: "/some", pathMatch: "full" },
];
```
