# angular breadcrumb

## install

```sh
npm i xng-breadcrumb
```

## layout.ts

```ts
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BreadcrumbModule, BreadcrumbService } from "xng-breadcrumb";

@Component({
  selector: "app-default-layout",

  standalone: true,
  imports: [CommonModule, RouterModule, BreadcrumbModule],
  templateUrl: "./default.layout.html",
  styleUrls: ["./default.layout.scss"],
})
export class DefaultLayout implements OnInit {
  constructor(private readonly breadcrumbService: BreadcrumbService) {}
  ngOnInit(): void {
    // this.breadcrumbService.set("@home", "홈"); // 사용 안해도 됨
  }
}
```

## app.routes.ts

```
data: { breadcrumb: { skip: true } },
data: { breadcrumb: "홈" }
```

## layout.html

```html
<div>
  <xng-breadcrumb [separator]="separator"></xng-breadcrumb>
  <ng-template #separator>
    <div>:::::</div>
  </ng-template>
  <router-outlet></router-outlet>
</div>
```
