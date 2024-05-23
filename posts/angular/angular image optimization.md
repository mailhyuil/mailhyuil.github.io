# angular image

## import

```ts
import { NgOptimizedImage } from "@angular/common";

@Components({
  selector: "app-some",
  templateUrl: "./some.component.html",
  styleUrls: ["./some.component.scss"],
  imports: [NgOptimizedImage],
})
export class SomeComponent {}
```

## html

```html
<div class="relative w-full overflow-hidden rounded-xl aspect-video bg-gray-50">
  <img class="absolute object-cover" [ngSrc]="file.url" fill priority />
</div>
```
