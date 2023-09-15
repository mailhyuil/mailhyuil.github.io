# angular counter directive

```ts
import { AfterViewInit, Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[counter]",
  standalone: true,
})
export class CounterAnimationDirective implements AfterViewInit {
  private counter = 0;
  private end = 0;
  private intersectionObserver: IntersectionObserver;
  private intersectingCache: boolean = false;

  constructor(private el: ElementRef<HTMLElement>) {
    const intersectionObserverInit: IntersectionObserverInit = {
      rootMargin: "-40px",
    };
    this.intersectionObserver = new IntersectionObserver((entries) => {
      this.onIntersection(entries[0]);
    }, intersectionObserverInit);
  }

  ngAfterViewInit(): void {
    this.end = parseInt(this.el.nativeElement.textContent!);
    this.el.nativeElement.textContent = "0";
    this.intersectionObserver.observe(this.el.nativeElement);
  }

  onIntersection(entry: IntersectionObserverEntry) {
    if (this.intersectingCache) {
      return;
    }

    if (this.intersectingCache == entry.isIntersecting) {
      return;
    }

    this.intersectingCache = entry.isIntersecting;
    if (!this.intersectingCache) {
      return;
    }

    this.handleCounter();

    this.intersectionObserver.disconnect();
  }

  handleCounter() {
    const interval = setInterval(() => {
      this.el.nativeElement.textContent = `${this.end === 0 ? 0 : ++this.counter}`;
      if (this.counter === this.end) {
        clearInterval(interval);
      }
    }, 500 / this.end);
  }
}
```
