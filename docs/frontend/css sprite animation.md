# css sprite animation

```html
<div
  class="relative w-full h-full transition-all duration-500 bg-no-repeat"
  style="
    background-image: url('assets/svgs/game/adventure/map-background.svg');
    background-size: cover;
  "
  [ngStyle]="{ backgroundPosition: x + 'px center' }">
  <img src="assets/svgs/game/adventure/game-step.svg" style="position: absolute" />
</div>
```
