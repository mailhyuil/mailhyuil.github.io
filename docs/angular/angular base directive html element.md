# angular base directive LinkClickTracker

> selector에 html element이름을 지정하면 해당 html element에 해당 로직이 추가된다.

```ts
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "button",
  standalone: true,
})
export class HelloWorldDirective {
  constructor(private el: ElementRef) {}

  @HostListener("click") onClick() {
    console.log("Hello, World!");
  }
}
```

## ts

```ts
import { Component, OnInit } from "@angular/core";
import { HelloWorldDirective } from "src/app/directives/hello-word.directive";

@Component({
  selector: "app-default-layout",
  templateUrl: "./default-layout.component.html",
  styleUrls: ["./default-layout.component.scss"],
  standalone: true,
  imports: [HelloWorldDirective],
})
export default class DefaultLayoutComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
```
