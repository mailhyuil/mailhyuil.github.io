# angular animations

## BrowserAnimationModule

```ts
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
```

```ts
bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)],
}).catch((err) => console.error(err));
```

## layout

### ts

```ts
@Component({
  animations: [ROUTE_ANIMATION],
})
```

```ts
public getRouterOutletState(outlet: RouterOutlet) {
  return outlet.isActivated ? outlet.activatedRoute : '';
}
```

### html

```html
<div class="overflow-y-scroll flex-1" [@routeAnimations]="getRouterOutletState(o)">
  <router-outlet #o="outlet"></router-outlet>
</div>
```

## /animations/fade-in-out.animation.ts

```ts
export const FADE_IN_OUT = trigger("fadeInOut", [
  state("in", style({ opacity: 0 })),
  transition(":leave", [style({ opacity: 1 }), group([animate("400ms ease-in-out", style({ opacity: "0" }))])]),
  transition(":enter", [style({ opacity: 0 }), group([animate("400ms ease-in-out", style({ opacity: "1" }))])]),
]);
```

## /animations/routing.animation.ts

```ts
export const ROUTE_ANIMATION = trigger("routeAnimations", [
  transition("*<=>*", [
    // css styles at start of transition
    style({ opacity: 0 }),

    // animation and styles at end of transition
    animate("0.2s", style({ opacity: 1 })),
  ]),
]);
```
