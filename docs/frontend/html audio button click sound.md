# html audio button click sound

```ts
import { Directive, ElementRef } from "@angular/core";

@Directive({ selector: "[sound]", standalone: true })
export class SoundDirective {
  sound = new Audio("assets/audio/click.mp3");
  constructor(private readonly elementRef: ElementRef) {
    this.elementRef.nativeElement.addEventListener("click", () => {
      this.sound.play();
      this.sound.currentTime = 0;
    });
  }
}
```
