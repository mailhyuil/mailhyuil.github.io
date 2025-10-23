# angular route animation

> route에서 data에 값을 넣어 특정 애니메이션을 적용할 수도 있습니다.

## install

```sh
npm i ng-animate
```

## layout.component.ts

```ts
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  animations: [MY_ANIMATION],
})
export class LayoutComponent {}
```

## layout.component.html

```html
<div [@routeAnimations]>
  <router-outlet></router-outlet>
</div>
```

## route-animations.ts

```ts
import { transition, trigger, useAnimation } from "@angular/animations";
import { slideInLeft, slideOutRight } from "ng-animate";

export const MY_ANIMATION = trigger("routeAnimations", [
  transition("* => *", [
    useAnimation(slideOutRight, { params: { timing: 0.3, delay: 0 } }),
    useAnimation(slideInLeft, { params: { timing: 0.3, delay: 0 } }),
  ]),
]);
```
