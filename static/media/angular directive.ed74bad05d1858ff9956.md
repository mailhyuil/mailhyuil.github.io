# angular directive

## directives/click-outside.directive.ts

```ts
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from "@angular/core";

@Directive({
  selector: "[clickOutside]",
  standalone: true,
})
export class ClickOutsideDirective {
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  @Output("outside")
  onOutside = new EventEmitter<void>();

  @HostListener("document:mousedown", ["$event"])
  onGlobalClick(event: any): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.onOutside.emit();
    }
  }
}
```
