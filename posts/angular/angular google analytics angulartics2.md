# angular google analytics angulartics2

## install

```sh
npm i angulartics2
```

## index.html

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-XXXXXXXXXX");
</script>
```

## app.config.ts

```ts
importProvidersFrom([
  Angulartics2Module.forRoot(),
]),
```

## app.component.ts

```ts
import { Component, inject } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from "@angular/router";
import { Angulartics2GoogleGlobalSiteTag } from "angulartics2";
import { filter } from "rxjs";

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  angulartics = inject(Angulartics2GoogleGlobalSiteTag);
  title = inject(Title);
  router = inject(Router);
  route = inject(ActivatedRoute);
  constructor() {
    this.angulartics.startTracking(); // <- 추가

    this.router.events // <- page_referrer 이름을 위해서 추가
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let title;
        let route = this.route.firstChild;
        while (route) {
          title = route.snapshot.data["title"];
          route = route.firstChild;
        }
        this.title.setTitle(title ? "my site · " + title : "my site");
      });
  }
}
```
