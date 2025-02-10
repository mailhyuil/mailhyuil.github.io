# angular route

> route 파일을 나눠서 loadChildren을 해야 initial bundle size를 줄일 수 있다.

## app.routes.ts

```ts
const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "",
    component: LayoutComponent,
    loadChildren: () => import("./page.routes").then(m => m.pageRoutes),
  },
  { path: "**", component: PageNotFoundComponent },
];
```

## page.routes.ts

```ts
const pageRoutes: Route[] = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "contact",
    loadComponent: () => import("./contact/contact.component").then(m => m.ContactComponent),
  },
];
```
