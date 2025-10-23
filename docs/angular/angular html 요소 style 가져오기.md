# angualar style 가져오기

> getComputedStyle(ele)
>
> > setTimeout 안에서 사용

```ts
export class AppComponent implements AfterViewInit {
  @ViewChild("box")
  box: ElementRef<HTMLDivElement>;
  height: string;
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.height = getComputedStyle(this.box.nativeElement).height;
    });
  }
}
```
