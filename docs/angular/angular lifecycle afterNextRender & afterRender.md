# angular lifecycle afterNextRender & afterRender

## afterNextRender

> DOM이 업데이트된 후에 한번만 호출됨
>
> > afterNextRender를 사용하여 더 쉽게 브라우저에서만 사용할 수 있는 API를 사용할 수 있다.
> >
> > > injection scope에서만 사용 가능 (constructor, factory function...)

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

## afterRender

> DOM이 업데이트된 후 change detection cycle이 있을 때마다 호출된다.
>
> > ngAfterViewInit이 호출될 때는 DOM이 업데이트되지 않음
> >
> > > if you need to manually read or write any layout data such as size or location.

```ts
constructor() {
  afterRender(() => {
    this.drawPoint();
    this.drawPointToTouch();
  });
}
```
