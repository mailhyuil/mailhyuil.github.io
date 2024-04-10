# js marquee, infinity slider, carousel

> 캐로셀 슬라이더, 무한 슬라이더, 마퀴

## to right

```ts
<script lang="ts" setup>
const props = defineProps<{
  items: string[];
}>();
const container = ref<HTMLDivElement>();
onMounted(async () => {
  await new Promise<void>((res) =>
    setTimeout(() => {
      res();
    }, 50)
  );
  if (container.value) {
    let containerBoundary = container.value.getBoundingClientRect();

    const sliders: HTMLDivElement[] = Array.from(container.value?.childNodes).filter((e) => e.nodeType !== Node.TEXT_NODE) as HTMLDivElement[];
    const width = parseInt(getComputedStyle(sliders[0]).width) + 20;
    let INIT_POSITION = 0;

    if (sliders) {
      sliders?.forEach((e) => {
        e.style.left = INIT_POSITION + 'px';
        INIT_POSITION -= width;
      });
    }

    let speed = 2;

    function draw() {
      requestAnimationFrame(draw);

      sliders.forEach((e) => {
        if (e.getBoundingClientRect().left > containerBoundary.right) {
          e.style.left = parseInt(sliders[sliders.length - 1].style.left) - width + 'px';
          sliders.shift();
          sliders.push(e);
          return false;
        }
        e.style.left = parseInt(e.style.left) + speed + 'px';
      });
    }
    draw();

    window.addEventListener('resize', () => {
      if (container.value) {
        containerBoundary = container.value.getBoundingClientRect();
      }
    });
  }
});
</script>
<template>
  <div
    ref="container"
    class="relative flex w-full h-32 gap-10 overflow-hidden">
    <div
      class="absolute top-0 left-0 w-32 h-10"
      v-for="i of 10">
      <img
        src="http://placehold.it/400"
        class="object-cover w-full h-full" />
    </div>
  </div>
</template>
```

## to left

```ts
<script lang="ts" setup>
const props = defineProps<{
  items: string[];
}>();
const container = ref<HTMLDivElement>();
const key = ref(1);

onMounted(async () => {
  await new Promise<void>((res) =>
    setTimeout(() => {
      res();
    }, 50)
  );
  if (container.value) {
    let containerBoundary = container.value.getBoundingClientRect();
    window.onresize = () => {
      if (container.value) {
        containerBoundary = container.value.getBoundingClientRect();
      }
    };
    const sliders: HTMLDivElement[] = Array.from(container.value?.childNodes).filter((e) => e.nodeType !== Node.TEXT_NODE) as HTMLDivElement[];
    const width = parseInt(getComputedStyle(sliders[0]).width) + 20;
    let INIT_POSITION = width;

    if (sliders) {
      sliders?.forEach((e) => {
        e.style.left = INIT_POSITION + 'px';
        INIT_POSITION += width;
      });
    }

    let speed = -2;

    function draw() {
      requestAnimationFrame(draw);
      sliders.forEach((e) => {
        if (e.getBoundingClientRect().right < containerBoundary.left) {
          e.style.left = parseInt(sliders[sliders.length - 1].style.left) + width + 'px';
          sliders.shift();
          sliders.push(e);
          return false;
        }
        e.style.left = parseInt(e.style.left) + speed + 'px';
      });
    }
    draw();

    window.addEventListener('resize', () => {
      if (container.value) {
        containerBoundary = container.value.getBoundingClientRect();
      }
    });
  }
});
</script>
<template>
  <div
    ref="container"
    class="relative flex w-full h-32 gap-10 overflow-hidden">
    <div
      class="absolute top-0 left-0 w-32 h-10"
      v-for="i of 10">
      <img
        src="http://placehold.it/400"
        class="object-cover w-full h-full" />
    </div>
  </div>
</template>
```

# angular marquee

## html

```
<div #container class="relative flex w-full h-24 gap-10 overflow-hidden">
  <div
    *ngFor="let i of [].constructor(10)"
    class="absolute top-0 left-0 w-32 h-12"
  >
    <img src="http://placehold.it/400" class="object-cover w-full h-full" />
  </div>
</div>
```

## ts

```
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./marquee.component.scss'],
})
export class MarqueeComponent implements AfterViewInit {
  @ViewChild('container')
  container: ElementRef<HTMLDivElement>;
  containerBoundary: DOMRect;
  sliders: HTMLDivElement[];
  width: number;
  speed: number = 2;
  constructor(private ngZone: NgZone) {}

  async ngAfterViewInit(): Promise<void> {
    window.addEventListener('resize', () => {
      if (this.container.nativeElement) {
        this.containerBoundary =
          this.container.nativeElement.getBoundingClientRect();
      }
    });
    this.init();
    this.draw();
  }

  init() {
    this.containerBoundary =
      this.container.nativeElement.getBoundingClientRect();

    this.sliders = Array.from(this.container.nativeElement?.childNodes).filter(
      (e) => e.nodeType !== Node.TEXT_NODE && e.nodeType !== Node.COMMENT_NODE
    ) as HTMLDivElement[];

    this.width = parseInt(getComputedStyle(this.sliders[0]).width) + 20;

    let INIT_POSITION = 0;
    if (this.sliders) {
      this.sliders?.forEach((e) => {
        e.style.left = INIT_POSITION + 'px';
        INIT_POSITION -= this.width;
      });
    }
  }

  draw() {
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(() => this.draw());
      this.sliders.forEach((e) => {
        if (e.getBoundingClientRect().left > this.containerBoundary.right) {
          e.style.left =
            parseInt(this.sliders[this.sliders.length - 1].style.left) -
            this.width +
            'px';
          this.sliders.shift();
          this.sliders.push(e);
          return false;
        }
        e.style.left = parseInt(e.style.left) + this.speed + 'px';
        return true;
      });
    });
  }
}

```
