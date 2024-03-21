# angular swiper

## install

```sh
npm i swiper
```

## main.ts

```ts
import { register } from "swiper/element/bundle";

register();
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
```

## swiper.directive.ts

```ts
import { Directive, ElementRef, Input, afterNextRender } from "@angular/core";
import { SwiperContainer } from "swiper/element";
import { SwiperOptions } from "swiper/types";

@Directive({
  selector: "[swiper]",
  standalone: true,
})
export class SwiperDirective {
  @Input("options") options?: SwiperOptions;
  constructor(private element: ElementRef<SwiperContainer>) {
    afterNextRender(() => {
      Object.assign(this.element.nativeElement, this.options);
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
@Component({
  selector: "app-image-slider",
  templateUrl: "./image-slider.component.html",
  styleUrls: ["./image-slider.component.scss"],
  standalone: true,
  imports: [CommonModule, IconComponent, SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class ImageSliderComponent implements OnInit {
  swiper?: Swiper;
  swiperOptions: SwiperOptions = {
    modules: [],
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    on: {
      init: (swiper) => {
        this.swiper = swiper;
      },
    },
  };
  constructor() {}
  ngOnInit(): void {}
}
```

## component.html

```html
<swiper-container init="false" swiper [options]="swiperOptions">
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
