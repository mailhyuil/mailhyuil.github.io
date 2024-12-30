# angular material BreakPointObserver

## usage

```ts
import { BreakpointObserver, LayoutModule } from "@angular/cdk/layout";
import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import HeaderMobileComponent from "../header-mobile/header-mobile.component";
import HeaderComponent from "../header/header.component";
@Component({
  selector: "app-default-layout",
  templateUrl: "./default-layout.component.html",
  styleUrls: ["./default-layout.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, HeaderMobileComponent, LayoutModule],
})
export default class DefaultLayoutComponent {
  breakPointObserver = inject(BreakpointObserver);
  isMobile = true;
  constructor() {
    this.breakPointObserver.observe(["(max-width: 768px)"]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
```
