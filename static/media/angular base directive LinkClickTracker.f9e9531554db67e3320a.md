# angular base directive LinkClickTracker

> selector를 routerLink로 지정하면 routerLink에 해당 로직이 추가된다.

## link-click-tracker.directive.ts

```ts
@Directive({
  selector: "[routerLink]",
  standalone: true,
})
export class LinkClickTracker {
  constructor(element: ElementRef) {
    element.nativeElement.addEventListener("click", (e: MouseEvent) => (lastClick = e), true);
  }
}
```

## ts

```ts
import { LinkClickTracker } from "./link-click-tracker.directive";
@Component({
  standalone: true,
  imports: [RouterLink, LinkClickTracker],
  template: `
    <h1 class="content-title">Page 2</h1>
    <p>This is the content for page 2.</p>
    <ol>
      <li>It</li>
      <li>also</li>
      <li>has</li>
      <li>a</li>
      <li>list!</li>
    </ol>
    <p>Ok, that's enough fun, you can go back to <a routerLink="/">page 1</a>.</p>
  `,
})
export class Page2 {}
```
