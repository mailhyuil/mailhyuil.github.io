# angular material overlay

```ts
import { Overlay, OverlayModule } from "@angular/cdk/overlay";
import { ComponentPortal, PortalModule } from "@angular/cdk/portal";

@Component({
  selector: "app-some",
  templateUrl: "./some.component.html",
  styleUrls: ["./some.component.scss"],
  standalone: true,
  imports: [CommonModule, OverlayModule, PortalModule],
})
export default class SomeComponent implements AfterViewInit, OnInit {
  overlay = inject(Overlay);
  openOverlay() {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global(),
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    const portal = new ComponentPortal(SomeComponent);

    overlayRef.attach(portal);

    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }
}
```
