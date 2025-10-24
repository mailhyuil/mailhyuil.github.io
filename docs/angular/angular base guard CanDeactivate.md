# angular base guard CanDeactivate

> 페이지에서 벗어날 때 실행되는 가드
>
> > 보통 어떤 작성 중인것을 저장시킬 때 사용된다.

```ts
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router/src/utils/preactivation";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { RegisterComponent } from "./register.component";

@Injectable()
export class DeactivateGuard implements CanDeactivate {
  canDeactivate(
    component: RegisterComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (nextState.url === "/you-are-not-allowed-to-leave") {
      return false;
    }
    return component.canExit();
  }
}
```
