# angular animations

## ts

```ts
import { animate, group, query, stagger, state, style, transition, trigger } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger("myAnimation", [
      state("start", style({ opacity: 0, transform: "scale(1)" })),
      state("end", style({ opacity: 1, transform: "scale(0.8)" })),
      transition(
        "1 => 0",
        group([
          query(".button", style({ opacity: 0, transform: "scale(0.8) translateY(10px)" })),
          query(".text", style({ opacity: 0 })),
          query(".button", stagger("100ms", [animate("200ms 250ms ease-out", style("*"))])),
          query(".text", stagger("100ms", [animate("200ms 250ms ease-out", style("*"))])),
        ])
      ),
    ]),
  ],
})
export default class HomeComponent {
  public animate = false;
}
```

## html

```html
<div [@myAnimation]="animate" class="flex gap-2 bg-gray-50 max-w-max" (mouseenter)="animate = true" (mouseleave)="animate = false">
  <button #button1 class="px-2 py-1 text-white bg-red-500 rounded button">
    <p class="text">button1</p>
  </button>
  <button #button2 class="px-2 py-1 text-white bg-red-500 rounded button">
    <p class="text">button2</p>
  </button>
</div>
```
