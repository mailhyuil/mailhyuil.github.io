# angular layout

## main.layout.ts

> header, footer 에 name을 줘서 레이아웃을 다르게 가져갈 수 있다.

```html
<div
  class="bg-main-50 flex h-screen flex-col overflow-y-auto bg-contain bg-bottom bg-no-repeat"
  style="background-image: url(assets/images/cloud.png)">
  <router-outlet name="header"></router-outlet>
  <div class="z-10 flex-1 overflow-y-auto">
    <router-outlet></router-outlet>
  </div>
  <router-outlet name="bottom-nav"></router-outlet>
</div>
```

## app.routes.ts

> router-outlet에 다른 component를 넣어주기

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
    path: "main",
    component: MainLayout,
    children: [
      { path: "", outlet: "header", component: NormalHeaderComponent },
      {
        path: "some",
        loadComponent: () => import("./pages/main/some/some.page").then((m) => m.SomePage),
      },
    ],
  },
  {
    path: "main",
    component: MainLayout,
    children: [
      { path: "", outlet: "header", component: DifferentHeaderComponent },
      {
        path: "some",
        loadComponent: () => import("./pages/main/some/some.page").then((m) => m.SomePage),
      },
    ],
  },
];
```

## main.ts

```ts
bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)],
}).catch((err) => console.error(err));
```
