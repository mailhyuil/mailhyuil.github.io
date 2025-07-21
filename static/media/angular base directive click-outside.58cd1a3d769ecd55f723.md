# angular base directive click-outside

## click-outside.directive.ts

```ts
import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
  selector: "[clickOutside]",
  standalone: true,
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener("document:click", ["$event.target"])
  public onClick(target: any) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
```

## hostDirective로 사용

```ts
import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ClickOutsideDirective } from "apps/client/src/app/directives/click-outside.directive";

@Component({
  selector: "app-some",
  templateUrl: "./some.component.html",
  styleUrls: ["./some.component.scss"],
  standalone: true,
  imports: [CommonModule],
  hostDirectives: [ClickOutsideDirective],
})
export default class MyPageButtonComponent {
  isOpen = false;
  clickOutside = inject(ClickOutsideDirective);
  constructor() {
    this.clickOutside.clickOutside.subscribe(() => {
      this.close();
    });
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
  close() {
    this.isOpen = false;
  }
}
```

## 일반 directive로 사용

> clickOutside를 가장 바깥의 요소에 달아라

```html
<main (clickOutside)="close()">
  <button (click)="toggle()"> 열기 </button>
  @if(isOpen){
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  }
</main>
```
