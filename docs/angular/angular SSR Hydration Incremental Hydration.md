## angular SSR Incremental Hydration

## main.ts

```ts
import { bootstrapApplication, provideClientHydration, withIncrementalHydration } from "@angular/platform-browser";

bootstrapApplication(AppComponent, {
  providers: [provideClientHydration(withIncrementalHydration())],
});
```

## html

```txt
Trigger	                Description
hydrate on idle   	    Triggers when the browser is idle.
hydrate on viewport	    Triggers when specified content enters the viewport
hydrate on interaction	Triggers when the user interacts with specified element
hydrate on hover	      Triggers when the mouse hovers over specified area
hydrate on immediate	  Triggers immediately after non-deferred content has finished rendering
hydrate on timer	      Triggers after a specific duration

@defer (hydrate on idle) {
    <app-lazy></app-lazy>
}
```
