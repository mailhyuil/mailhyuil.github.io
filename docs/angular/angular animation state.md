# angular animation state

## ts

```ts
import { animate, state, style, transition, trigger } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  imports: [CommonModule],
  animations: [trigger("myAnimation", [state("shown", style({ opacity: 1, transform: "scale(1)" })), state("hidden", style({ opacity: 0, transform: "scale(0.8)" })), transition("shown => hidden", [animate("0.5s")]), transition("hidden => shown", [animate("1s")])])],
})
export default class HomeComponent {
  visible = signal<"shown" | "hidden">("shown");
}
```

## html

```html
<div [@myAnimation]="visible()" class="flex gap-2 bg-gray-50 max-w-max" (mouseenter)="visible.set('shown')" (mouseleave)="visible.set('hidden')">
  <button #button1 class="px-2 py-1 text-white bg-red-500 rounded button">
    <p class="text">button1</p>
  </button>
  <button #button2 class="px-2 py-1 text-white bg-red-500 rounded button">
    <p class="text">button2</p>
  </button>
</div>
```
