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

## 사용

```html
<img ngSrc="cat.jpg" />
```
