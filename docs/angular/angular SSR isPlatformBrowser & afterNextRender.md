# angular SSR isPlatformBrowser & afterNextRender

> server에서 browser api에 접근하면 에러가 발생하고 ssr이 정상적으로 작동하지 않는다.

## isPlatformBrowser

> 브라우저에서만 사용할 수 있는 API는 isPlatformBrowser로 분기처리를 해야한다.

```ts
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, OnInit, PLATFORM_ID, inject } from "@angular/core";
@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export default class TestComponent implements OnInit {
  platformId = inject(PLATFORM_ID);
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const data = localStorage.getItem("data");
    }
  }
}
```

## afterNextRender

> afterNextRender를 사용하여 더 쉽게 브라우저에서만 사용할 수 있는 API를 사용할 수 있다.
>
> > injection scope에서만 사용 가능 (constructor, factory function...)

```ts
import { CommonModule } from "@angular/common";
import { Component, afterNextRender } from "@angular/core";
@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export default class TestComponent {
  constructor() {
    afterNextRender(() => {
      const data = localStorage.getItem("data");
    });
  }
}
```
