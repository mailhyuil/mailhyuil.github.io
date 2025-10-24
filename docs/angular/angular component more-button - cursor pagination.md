# angular component more-button - cursor pagination

## ts

```ts
import { CommonModule } from "@angular/common";
import { Component, input, model, output } from "@angular/core";
import NormalButtonComponent from "../normal-button/normal-button.component";

@Component({
  selector: "app-more-button",
  templateUrl: "./more-button.component.html",
  styleUrls: ["./more-button.component.scss"],
  standalone: true,
  imports: [CommonModule, NormalButtonComponent],
})
export default class MoreButtonComponent {
  cursor = input<string | undefined>();
  handleClick = output<void>();
  loading = model<boolean>();

  _handleClick() {
    this.loading.set(true);
    this.handleClick.emit();
  }
}
```

## html

```html
@if (cursor()) {
<div class="flex justify-center">
  @if (loading()) {
  <span class="icon-[line-md--loading-twotone-loop] size-10 bg-primary"></span>
  } @else {
  <app-normal-button (click)="_handleClick()" buttonStyle="outline">더보기</app-normal-button>
  }
</div>
}
```

## usage

```html
<app-more-button
  (handleClick)="optionsChange({ cursor: cursorValue })"
  [(loading)]="moreLoading"
  [cursor]="cursorValue"
></app-more-button>
```
