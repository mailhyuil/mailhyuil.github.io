# angular material drawer

## drawer-container.component.ts

```ts
import { CommonModule } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatDrawer, MatSidenavModule } from "@angular/material/sidenav";
import { LepiButton, LepiIcon } from "@team-lepisode/components";

@Component({
  selector: "app-drawer-container",
  templateUrl: "./drawer-container.component.html",
  styleUrls: ["./drawer-container.component.scss"],
  standalone: true,
  imports: [CommonModule, MatSidenavModule, LepiIcon, LepiButton],
})
export default class DrawerContainerComponent {
  @ViewChild("drawer") drawer?: MatDrawer;
}
```

## drawer-container.component.html

```html
<mat-drawer-container class="h-full" hasBackdrop>
  <div class="p-5">
    <ng-content></ng-content>
  </div>
  <mat-drawer #drawer position="end" mode="side">
    <div class="flex flex-col h-full gap-5 p-5 bg-white w-96">
      <div class="p-2 rounded-lg max-w-max hover:bg-gray-100" (click)="drawer.close()">
        <lepi-icon class="block bg-gray-600 cursor-pointer size-7" name="heroicons:chevron-double-right-16-solid"></lepi-icon>
      </div>
      <ng-content select="[drawer-title]"></ng-content>
      <div class="flex flex-col flex-1 gap-2">
        <ng-content select="[drawer-form]"></ng-content>
      </div>
    </div>
  </mat-drawer>
</mat-drawer-container>
```

## ts

```ts
import { MatSidenavModule } from "@angular/material/sidenav";
import DrawerContainerComponent from "../../../components/drawer-container/drawer-container.component";
@Component({
  selector: "app-some",
  templateUrl: "./some.component.html",
  styleUrls: ["./some.component.scss"],
  standalone: true,
  imports: [CommonModule, MatSidenavModule, DrawerContainerComponent],
})
export default class SomeComponent {
  @ViewChild(DrawerContainerComponent)
  drawerContainer!: DrawerContainerComponent;

  close() {
    this.drawerContainer.drawer?.close();
  }
}
```

## html

```html
<app-drawer-container #container>
  <h3 drawer-title>... title</h3>
  <form class="flex flex-col h-full gap-2" drawer-form>
    <input />
    <button>submit</button>
  </form>
  <div> Main View </div>
</app-drawer-container>
```
