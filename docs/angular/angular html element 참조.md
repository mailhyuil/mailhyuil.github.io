# angular html element 참조

> \#을 사용해서 참조

## 생성자 주입 방식

```ts
constructor(private box:ElementRef<HTMLDivElement>){}
```

## @ViewChild() 방식

```ts
import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("div")
  private div: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.div.nativeElement.style.backgroundColor = "red";
  }
}
```

## html

```html
<div #div class="w-10 h-10 bg-black"></div>

{{div.someAttribute}}
```
