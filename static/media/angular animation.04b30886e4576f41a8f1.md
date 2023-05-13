# angular animations

## /animations/fade-in-out.animation.ts

```ts
export const FADE_IN_OUT = trigger("fadeInOut", [
  state("in", style({ opacity: 0 })),
  transition(":leave", [
    style({ opacity: 1 }),
    group([animate("400ms ease-in-out", style({ opacity: "0" }))]),
  ]),
  transition(":enter", [
    style({ opacity: 0 }),
    group([animate("400ms ease-in-out", style({ opacity: "1" }))]),
  ]),
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
