# angular route loadComponent (lazy loading)

> Home 같은 바로 보여져야 하는 컴포넌트는 component로 설정하되
>
> > Home 내에서 lazy loading으로 불러와야 하는 컴포넌트는 children에서 loadComponent로 설정한다.
> >
> > route-outlet을 굳이 사용하지 않아도 되지만 컴포넌트 내에 route-outlet을 사용했다면 반드시 <route-outlet name="">을 사용해야한다.
> >
> > > main.js 번들의 크기를 줄일 수 있다.

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
      {
        path: "company",
        children: [
          {
            path: "",
            loadComponent: () => import("./pages/company/company.component"),
          },
          {
            path: "achievements",
            loadComponent: () => import("./pages/achievements/achievements.component"),
          },
          {
            path: "recruitment",
            loadComponent: () => import("./pages/recruitment/recruitment.component"),
          },
          {
            path: "location",
            loadComponent: () => import("./pages/location/location.component"),
          },
          {
            path: "ci",
            loadComponent: () => import("./pages/ci/ci.component"),
          },
        ],
      },
      {
        path: "product",
        children: [
          {
            path: ":id/:slug",
            loadComponent: () => import("./pages/product/product.component"),
          },
        ],
      },
      {
        path: "public-business",
        children: [
          {
            path: "excellent-procurement-product",
            loadComponent: () =>
              import("./pages/excellent-procurement-product/excellent-procurement-product.component"),
          },
          {
            path: "innovative-product",
            loadComponent: () => import("./pages/innovative-product/innovative-product.component"),
          },
          {
            path: "nep-net",
            loadComponent: () => import("./pages/nep-net/nep-net.component"),
          },
          {
            path: "mas",
            loadComponent: () => import("./pages/mas/mas.component"),
          },
        ],
      },
      {
        path: "public-relations",
        children: [
          {
            path: "news",
            children: [
              {
                path: "",
                loadComponent: () => import("./pages/news/news-list/news-list.component"),
              },
              {
                path: "detail/:id",
                loadComponent: () => import("./pages/news/news-detail/news-detail.component"),
              },
            ],
          },
          {
            path: "resource",
            children: [
              {
                path: "",
                loadComponent: () => import("./pages/resource/resource-list/resource-list.component"),
              },
              {
                path: "detail/:id",
                loadComponent: () => import("./pages/resource/resource-detail/resource-detail.component"),
              },
            ],
          },
          {
            path: "sns",
            children: [
              {
                path: "",
                loadComponent: () => import("./pages/sns/sns-list/sns-list.component"),
              },
            ],
          },
        ],
      },
      {
        path: "customer",
        children: [
          {
            path: "notice",
            children: [
              {
                path: "",
                loadComponent: () => import("./pages/notice/notice-list/notice-list.component"),
              },
              {
                path: "detail/:id",
                loadComponent: () => import("./pages/notice/notice-detail/notice-detail.component"),
              },
            ],
          },
          {
            path: "inquiry",
            children: [
              {
                path: "",
                loadComponent: () => import("./pages/inquiry/inquiry-create/inquiry-create.component"),
              },
            ],
          },
        ],
      },
    ],
  },
];
```
