# angular swiper

## install

```sh
npm i swiper
```

## swiper.directive.ts

```ts
import { afterNextRender, Directive, ElementRef, input } from "@angular/core";
import type { SwiperContainer } from "swiper/element";
import type { SwiperOptions } from "swiper/types";

let isSwiperRegistered = false;

@Directive({
  selector: "[swiper]",
  standalone: true,
})
export class SwiperDirective {
  options = input<SwiperOptions>();

  constructor(private element: ElementRef<SwiperContainer>) {
    afterNextRender(async () => {
      if (!isSwiperRegistered) {
        const { register } = await import("swiper/element");
        register();
        isSwiperRegistered = true;
      }
      Object.assign(this.element.nativeElement, this.options());
      this.element.nativeElement.initialize();
    });
  }
}
```

## component.ts

```ts
import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from "@angular/core";
import { IconComponent } from "@team-lepisode/components";
import { SwiperDirective } from "apps/client/src/app/directives/swiper.directive";
import { SwiperOptions, Swiper } from "swiper/types";
import { Autoplay } from "swiper/modules";

@Component({
  selector: "app-image-slider",
  templateUrl: "./image-slider.component.html",
  styleUrls: ["./image-slider.component.scss"],
  standalone: true,
  imports: [CommonModule, IconComponent, SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class ImageSliderComponent {
  swiper?: Swiper;
  swiperOptions: SwiperOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
    autoplay: { delay: 5000, waitForTransition: false },
    loop: false,
    observer: true,
    observeParents: true,
    updateOnWindowResize: true,
    navigation: true,
    pagination: { clickable: true },
    on: {
      init: swiper => {
        this.swiper = swiper;
      },
    },
  };
}
```

## component.html

```html
<swiper-container class="w-full" init="false" swiper [options]="swiperOptions">
  <swiper-slide>
    <img src="http://placehold.it/500" />
  </swiper-slide>
  <swiper-slide>
    <img src="http://placehold.it/500" />
  </swiper-slide>
  <swiper-slide>
    <img src="http://placehold.it/500" />
  </swiper-slide>
  <swiper-slide>
    <img src="http://placehold.it/500" />
  </swiper-slide>
</swiper-container>
```
