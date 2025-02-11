# angular route RouteReuseStrategy

> list 페이지 등 사용자가 다시 방문을 자주 하는 페이지에 대해 재사용을 하여 성능을 향상시킬 수 있다.
>
> > 너무 많이 사용하면 메모리 누수가 발생할 수 있다.

## CustomRouteReuseStrategy

```ts
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy, RouterStateSnapshot } from "@angular/router";

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private storedRoutes = new Map<string, DetachedRouteHandle>();

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // Whether the given route should detach for later reuse.
    // 현재 라우트를 재사용하기 위해서 detach할지 여부를 결정
    // true 시 store 호출
    return !!route.data["reuse"];
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null) {
    if (handle) {
      // shouldDetach true 시 호출
      // route url을 key로 하여 저장하는 코드를 구현
      this.storedRoutes.set(this.getRouteUrl(route), handle);
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return (
      // Returns false, meaning the route (and its subtree) is never reattached
      // true 시 retrieve 호출 (store에서 저장한 route를 반환하여 다시 사용하기 위해서)
      !!route.data["reuse"] && !!this.storedRoutes.get(this.getRouteUrl(route))
    );
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    // shouldAttach가 true이면 호출
    // store에서 저장한 route를 반환하는 코드를 구현 사용하지 않을 시 null을 반환
    return this.storedRoutes.get(this.getRouteUrl(route)) || null;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // Determines if a route should be reused.
    // This strategy returns true when the future route config and current route config are identical.
    // route를 재사용할지 여부를 결정
    return future.routeConfig === curr.routeConfig && future.data["reuse"];
  }

  private getRouteUrl(route: ActivatedRouteSnapshot): string {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return ((route as any)["_routerState"] as RouterStateSnapshot).url;
  }
}
```

## app.config.ts

```ts
{ provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
```

## app.routes.ts

```ts
{
    path: 'posts',
    children: [
      {
        path: '',
        data: { reuse: true }
        loadComponent: () => import('./pages/post/post-list/post-list.component'),
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/post/post-detail/post-detail.component'),
      },
    ],
},
```
