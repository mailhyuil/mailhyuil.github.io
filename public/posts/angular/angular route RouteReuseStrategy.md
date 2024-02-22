# angular route RouteReuseStrategy

> route data에 shouldReuse를 추가하여 컴포넌트를 destroy하지 않고 재사용

## CustomRouteReuseStrategy

```ts
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  handlers: { [key: string]: DetachedRouteHandle } = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.data["shouldReuse"] || false;
  }

  store(route: ActivatedRouteSnapshot, handle: {}): void {
    if (route.data["shouldReuse"]) {
      this.handlers[route.routeConfig!.path!] = handle;
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!this.handlers[route.routeConfig!.path!];
  }

  retrieve(route: ActivatedRouteSnapshot): {} | null {
    if (!route.routeConfig) return null;
    return this.handlers[route.routeConfig!.path!];
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.data["shouldReuse"] || false;
  }
}
```

## app.config.ts

```ts
{
    provide: RouteReuseStrategy,
    useClass: CustomRouteReuseStrategy,
},
```

## app.routes.ts

```ts
{
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'home',
        data: {
          shouldReuse: true, // 추가
        },
        loadComponent: () => import('./pages/home/home.component'),
      },
      {
        path: 'test',
        loadComponent: () => import('./pages/test/test.component'),
      },
    ],
},
```
