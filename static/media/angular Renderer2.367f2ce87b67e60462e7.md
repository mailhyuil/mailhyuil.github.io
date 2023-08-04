# angular Renderer2

> DOM을 직접 조작하는 것보다 안전한 방식

```ts
constructor(private renderer: Renderer2) {}

this.renderer.setProperty(this.divHello.nativeElement, 'innerHTML', "Hello Angular")
this.renderer.removeProperty(this.divHello.nativeElement, 'innerHTML', "Hello Angular")

this.renderer.setStyle(this.div.nativeElement, 'color', 'blue');
this.renderer.removeStyle(this.div.nativeElement, 'color');

this.renderer.addClass(this.div.nativeElement, 'black-border');
this.renderer.removeClass(this.div.nativeElement, 'black-border');

this.clickListener = this.renderer.listen(this.div.nativeElement, 'click', (evt) => {
  this.Count++;
});
```
