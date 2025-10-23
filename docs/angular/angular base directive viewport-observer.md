# angular base directive viewport-observer

## viewport-observer.directive.ts

```ts
import { AfterViewInit, Directive, ElementRef, output } from "@angular/core";

@Directive({
  selector: "[viewportObserver]",
  standalone: true,
})
export class ViewportObserverDirective implements AfterViewInit {
  viewportEnter = output();
  constructor(private ele: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.viewportEnter.emit(); // 뷰포트에 들어오면 이벤트 발생
        observer.disconnect(); // 한 번 실행 후 해제
      }
    });

    observer.observe(this.ele.nativeElement);
  }
}
```

## usage

```html
<div viewportObserver (viewportEnter)="getData()">
  <img src="https://image.com" />
  <ul>
    @for(data of list; track data.id){
    <li>{{data.name}}</li>
    }
  </ul>
</div>
```
