# angular base Renderer2

> DOM을 직접 조작하는 것보다 안전한 방식

```ts
export class SomeComponent {
  constructor(private readonly renderer: Renderer2, private readonly ele: ElementRef) {}
  doSomething() {
    this.renderer.setProperty(this.ele.nativeElement, "innerHTML", "Hello Angular");
    this.renderer.removeProperty(this.ele.nativeElement, "innerHTML", "Hello Angular");

    this.renderer.setStyle(this.ele.nativeElement, "color", "blue");
    this.renderer.removeStyle(this.ele.nativeElement, "color");

    this.renderer.addClass(this.ele.nativeElement, "black-border");
    this.renderer.removeClass(this.ele.nativeElement, "black-border");

    this.clickListener = this.renderer.listen(this.ele.nativeElement, "click", (evt) => {
      this.Count++;
    });
  }
}
```
