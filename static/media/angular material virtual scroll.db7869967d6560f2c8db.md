# angular material virtual scroll

## ts

```ts
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ScrollingModule } from "@angular/cdk/scrolling";

/** @title Virtual scroll with view recycling disabled. */
@Component({
  selector: "cdk-virtual-scroll-append-only-example",
  styleUrls: ["cdk-virtual-scroll-append-only-example.css"],
  templateUrl: "cdk-virtual-scroll-append-only-example.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ScrollingModule],
})
export class CdkVirtualScrollAppendOnlyExample {
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
}
```

## html

```html
<cdk-virtual-scroll-viewport appendOnly itemSize="50" class="example-viewport">
  <div *cdkVirtualFor="let item of items" class="example-item">{{item}}</div>
</cdk-virtual-scroll-viewport>
```
