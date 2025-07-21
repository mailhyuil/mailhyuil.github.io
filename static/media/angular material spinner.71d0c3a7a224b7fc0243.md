# angular material spinner

> material cdk의 overlay와 portal을 이용한 spinner

## spinner.component

### ts

```ts
import { Component } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"],
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export default class SpinnerComponent {}
```

### html

```html
<div class="fixed left-0 right-0 w-screen h-screen">
  <div class="flex items-center justify-center w-full h-full">
    <mat-spinner></mat-spinner>
  </div>
</div>
```

## spinner.service

```ts
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable, inject } from "@angular/core";
import SpinnerComponent from "../components/spinner/spinner.component";

@Injectable({
  providedIn: "root",
})
export class SpinnerService {
  private overlay = inject(Overlay);
  private overlayRef?: OverlayRef;

  public show(message = "") {
    // Returns an OverlayRef (which is a PortalHost)
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }
    // Create ComponentPortal that can be attached to a PortalHost
    const spinnerOverlayPortal = new ComponentPortal(SpinnerComponent);

    // Attach ComponentPortal to PortalHost
    const component = this.overlayRef.attach(spinnerOverlayPortal);
  }

  public hide() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
```
