# angular material overlay

> 컴포넌트 내에서 최상단(body)에 컴포넌트를 추가할 수 있게 해주는 기능
>
> > floating panels를 구현할 때 사용한다.
> >
> > > 내부적으로 Portal을 사용한다.

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
