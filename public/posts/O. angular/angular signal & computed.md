# angluar signal

> 16v 부터 생긴 api
>
> > nuxt의 ref, computed 와 같다

## ts

```ts
import { Component, computed, signal, effect } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  sig = signal("hi");
  com = computed(() => "com");
  constructor() {
    effect(() => console.log(this.sig())); // hellow
  }
  hi() {
    this.sig.set("hellow");
  }
}
```

## html

```html
<h1>{{ sig() }}</h1>
<h1>{{ com() }}</h1>
```
