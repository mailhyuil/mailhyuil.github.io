# angular layout

## app.routes.ts

```ts
export const appRoutes: Route[] = [
  {
    path: "",
    component: LayoutComponent,
    canActivate: [],
    data: {
      layout: "blank",
      title: "로그인 필요 없음!",
    },
    children: [
      { path: "signin", redirectTo: "login", pathMatch: "full" },
      {
        path: "login",
        loadComponent: () => import("./layout/layout.component").then((m) => m.LayoutComponent),
      }, // lazy loading..
    ],
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [
      () => {
        // guard logic...
      },
    ],
    data: {
      layout: "side-menu",
    },
    children: [{ path: "user", children: [{ path: ":id" }] }],
  },
];
```

## main.ts

```ts
bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)],
}).catch((err) => console.error(err));
```
