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

## /animations/routing.animation.ts

```ts
import { animate, query, style, transition, trigger } from "@angular/animations";

export const fadeAnimation = trigger("routeAnimations", [
  transition("* <=> *", [
    query(
      ":enter",
      [
        style({
          opacity: 0,
          position: "absolute",
          width: "100vw",
          overflow: "hidden",
        }),
      ],
      {
        optional: true,
      }
    ),
    query(
      ":leave",
      [
        style({ opacity: 1 }),
        animate(
          "0.3s",
          style({
            opacity: 0,
            position: "absolute",
            width: "100vw",
            overflow: "hidden",
          })
        ),
      ],
      { optional: true }
    ),
    query(
      ":enter",
      [
        style({ opacity: 0 }),
        animate(
          "0.3s",
          style({
            opacity: 1,
            position: "relative",
            width: "100vw",
            overflow: "hidden",
          })
        ),
      ],
      { optional: true }
    ),
  ]),
]);
```

## layout

### ts

```ts
@Component({
  animations: [fadeAnimation],
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
