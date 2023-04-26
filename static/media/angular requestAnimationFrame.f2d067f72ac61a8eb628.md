# angular requestAnimationFrame

> NgZone을 사용
>
> > By default, all asynchronous operations are inside the Angular zone

```ts
export class AppComponent implements AfterViewInit {
  @ViewChild("obj")
  obj: ElementRef<HTMLDivElement>;
  x: number = 0;
  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.draw();
  }

  draw() {
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(() => this.draw());
      this.obj.nativeElement.style.left = this.x + "px";
      this.x++;
    });
  }
}
```
