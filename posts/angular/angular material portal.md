# angular material portal

```ts
import { DomPortal, PortalModule, Portal } from "@angular/cdk/portal";
import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterModule } from "@angular/router";
@Component({
  selector: "app-default-layout",
  templateUrl: "./default-layout.component.html",
  styleUrls: ["./default-layout.component.scss"],
  standalone: true,
  imports: [CommonModule, PortalModule],
})
export default class DefaultLayoutComponent implements AfterViewInit {
  @ViewChild("domPortalContent") domPortalContent?: ElementRef<HTMLElement>;
  domPortal?: DomPortal<any>;
  selectedPortal?: Portal<any>;
  ngAfterViewInit(): void {
    if (!this.domPortalContent) return;
    this.domPortal = new DomPortal(this.domPortalContent);
  }
}
```
