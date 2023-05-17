# angular route data 가져오기

```ts
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from "@angular/router";
import { IconComponent } from "packages/admin/src/components/icon/icon.component";
import { SideMenuComponent } from "packages/admin/src/components/side-menu/side-menu.component";
import { filter } from "rxjs";
@Component({
  selector: "app-default",
  standalone: true,
  imports: [CommonModule, RouterModule, SideMenuComponent, IconComponent],
  templateUrl: "./default.layout.html",
  styleUrls: ["./default.layout.scss"],
})
export class DefaultLayout {
  name?: string;

  constructor(readonly router: Router, readonly route: ActivatedRoute, readonly httpClient: HttpClient) {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const res = this.route.snapshot?.routeConfig?.children?.filter((i) => this.router.url.split("/")[1] === i.path)[0];

      if (res?.data) {
        this.name = res?.data["name"];
      }
    });
  }
}
```
