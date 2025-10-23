# angular breadcrumbs

## app.routes.ts

```ts
export const appRoutes: Route[] = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "",
    data: {
      isMain: true,
    },
    component: DefaultLayoutComponent,
    children: [
      {
        path: "dashboard",
        data: {
          sideMenu: {
            title: "대시보드",
            icon: "heroicons:home-20-solid",
            link: "/dashboard",
          } as SideMenuItem,
        },
        loadComponent: () => import("./pages/dashboard/dashboard.component"),
      },
      {
        path: "member",
        data: {
          sideMenu: {
            title: "회원관리",
            icon: "heroicons:home-20-solid",
            link: "/member",
          } as SideMenuItem,
        },
        children: [
          {
            path: "",
            data: {
              sideMenu: false,
            },
            loadComponent: () => import("./pages/member/member.component"),
          },
          {
            path: "detail/:id",
            data: {
              sideMenu: {
                title: "회원관리 상세",
                icon: "heroicons:home-20-solid",
                link: "/member",
              } as SideMenuItem,
            },
            loadComponent: () => import("./pages/member/detail-member/detail-member.component"),
          },
        ],
      },
    ],
  },
  { path: "**", redirectTo: "dashboard" },
];
```

## data 접근

```ts
breadcrumbs:string;
initBreadcrumbs() {
  let route = this.route.snapshot;
  const breadcrumbs = [];
  while (route.firstChild) {
    route = route.firstChild;
    if (route.data['sideMenu'] !== false) {
      breadcrumbs.push(route.data['sideMenu'].title);
    }
  }
  this.breadcrumbs = breadcrumbs.join(' > ');
}
```
