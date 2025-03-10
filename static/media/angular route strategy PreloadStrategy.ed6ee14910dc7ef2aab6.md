# angular route PreloadStrategy

> route의 loadComponent, loadChildren를 미리 로드할지를 결정

## built-in

```ts
PreloadAllModules;
NoPreloading;
```

## CustomPreloadStrategy

### custom-preload.strategy.ts

```ts
import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CustomPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data["preload"] ? load() : of(null);
  }
}
```

### app.routes.ts

> loadChildren, loadComponent에 data를 추가하여 preload 여부를 결정

```ts
{
  path: "",
  data: { preload: true },
  loadChildren: () => import("./page.routes").then((m) => m.pageRoutes),
},
```

## CustomPreloadStrategy with delay

```ts
import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { mergeMap, Observable, of, timer } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DelayPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data["preload"]) {
      const delay: number = route.data["delay"];
      return timer(delay).pipe(
        mergeMap(() => {
          return load();
        }),
      );
    } else {
      return of(null);
    }
  }
}
```

### app.routes.ts

> loadChildren, loadComponent에 data를 추가하여 preload 여부를 결정

```ts
{
  path: "",
  data: { preload: true, delay: 5000 },
  loadChildren: () => import("./page.routes").then((m) => m.pageRoutes),
},
```
