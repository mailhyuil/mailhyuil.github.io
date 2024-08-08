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

## app.config.ts

> nhn cloud Image Manager에서 small, medium, large 옵션을 생성해두었다.
>
> > width에 따라서 srcset을 자동으로 사용

```ts
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';

{
  provide: IMAGE_LOADER,
  useValue: (config: ImageLoaderConfig) => {
    // when small
    if (!config.width) return config.src + `?medium`;
    if (config.width <= 640) {
      return config.src + `?small`;
    }
    if (config.width <= 1080) {
      return config.src + `?medium`;
    }
    return config.src + `?large`;
  },
},
```
