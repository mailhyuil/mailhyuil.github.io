# angular image optimization

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
> > fill 사용 시 각 이미지에 대한 srcset이 들어간다.

```ts
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';

{
  provide: IMAGE_LOADER,
  useValue: ({ width, src }: ImageLoaderConfig) => {
    if (!width || width > 3000) {
      return `${src}?format=webp`;
    }
    return `${src}?width=${width}&format=webp`;
  },
},
```

## image.component.html

```html
<div class="relative w-auto h-full overflow-hidden">
  <img class="absolute object-cover" [ngSrc]="src() || 'public/svg/placeholder.svg'" fill priority />
</div>
```
