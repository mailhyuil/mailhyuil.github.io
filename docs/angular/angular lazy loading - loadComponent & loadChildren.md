# angular route loadComponent & loadChildren (lazy loading)

> module, routes는 loadChildren을 사용하고 standalone component는 loadComponent를 사용한다.
>
> > Home 같은 바로 보여져야 하는 컴포넌트는 component로 설정하되
> >
> > > Home 내에서 lazy loading으로 불러와야 하는 컴포넌트는 children에서 loadComponent로 설정한다.
> > >
> > > route-outlet을 굳이 사용하지 않아도 되지만 컴포넌트 내에 route-outlet을 사용했다면 반드시 \<route-outlet name="">을 사용해야한다.

## loadComponent

```ts
import { Route } from "@angular/router";
import DefaultLayoutComponent from "./layouts/default-layout/default-layout.component";
import HomeComponent from "./pages/home/home.component";

export const appRoutes: Route[] = [
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("@angular/material/snack-bar").then((m) => m.MatSnackBarModule),
      }
      {
        path: "",
        loadComponent: () => import("./components/consult-banner/consult-banner.component"),
      },
      {
        path: "",
        loadComponent: () => import("./layouts/sitemap/sitemap.component"),
      },
      {
        path: "",
        loadComponent: () => import("./layouts/footer/footer.component"),
      },
      {
        path: "",
        component: HomeComponent,
        children: [
          {
            path: "",
            loadComponent: () => import("./pages/home/sections/product-section/product-section.component"),
          },
          {
            path: "",
            loadComponent: () => import("./pages/home/sections/technology-section/technology-section.component"),
          },
          {
            path: "",
            loadComponent: () => import("./pages/home/sections/safety-section/safety-section.component"),
          },
          {
            path: "",
            loadComponent: () => import("./components/news-section/news-section.component"),
          },
          {
            path: "",
            loadComponent: () => import("./pages/home/sections/partners-section/partners-section.component"),
          },
        ],
      },
    ],
  },
];
```
