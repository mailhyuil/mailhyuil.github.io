# angular route loading

## html

```html
<router-outlet>
  @if (loading()) {
  <span class="fixed left-0 right-0 bg-black size-full">loading..</span>
  }
</router-outlet>
```

## ts

```ts
import { Component, signal } from "@angular/core";
import { NavigationEnd, NavigationStart, Router, RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  loading = signal(false);
  constructor(router: Router) {
    this.loading.set(false);
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.loading.set(true);
      } else if (event instanceof NavigationEnd) {
        this.loading.set(false);
      }
    });
  }
}
```
