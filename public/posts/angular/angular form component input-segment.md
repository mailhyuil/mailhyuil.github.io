# angular form group

## group component

### ts

```ts
import { AfterViewInit, Component, ContentChildren, QueryList } from "@angular/core";
import { ValueAccessorDirective } from "@lcrs/common";
import { tap } from "rxjs";
import { SegmentItemComponent } from "./segment-item/segment-item.component";

@Component({
  selector: "app-segment",
  templateUrl: "./segment.component.html",
  styleUrls: ["./segment.component.scss"],
  standalone: true,
  imports: [SegmentItemComponent],
  hostDirectives: [ValueAccessorDirective],
})
export class SegmentComponent implements AfterViewInit {
  @ContentChildren(SegmentItemComponent)
  segments!: QueryList<SegmentItemComponent>;

  value?: string;

  constructor(public readonly valueAccessor: ValueAccessorDirective<string>) {
    valueAccessor.value.subscribe((v) => (this.value = v));
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this._init();
    });
  }

  _init() {
    if (!this.value) return;
    this.select(this.value);
    this.segments.forEach((segment) => {
      if (!this.value) return;
      segment.selectedValue$.next(this.value);
    });
    this.segments.forEach((segment) => {
      segment.select$
        .pipe(
          tap((value) => {
            this.segments.forEach((segment) => {
              segment.selectedValue$.next(value);
            });
          })
        )
        .subscribe((v) => {
          this.select(v);
        });
    });
  }

  select(value: string) {
    this.valueAccessor.writeValue(value);
    this.valueAccessor.valueChange(value);
  }
}
```

### html

```html
<div class="flex items-center gap-2">
  <ng-content></ng-content>
</div>
```

## child component

### ts

```ts
import { CommonModule } from "@angular/common";
import { Component, Input, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Component({
  selector: "app-segment-item",
  templateUrl: "./segment-item.component.html",
  styleUrls: ["./segment-item.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class SegmentItemComponent implements OnDestroy {
  @Input() value?: string;
  select$ = new Subject<string>();
  selectedValue$ = new BehaviorSubject<string | undefined>(undefined);

  ngOnDestroy(): void {
    this.select$.complete();
    this.selectedValue$.complete();
  }

  _select() {
    if (this.value) {
      this.select$.next(this.value);
    }
  }
}
```

### html

```html
<button
  class="w-full py-1 font-bold rounded-full"
  [class.bg-primary]="selectedValue$.value === value"
  [class.text-white]="selectedValue$.value === value"
  (click)="_select()">
  <ng-content></ng-content>
</button>
```

## usage

```html
<app-segment [(ngModel)]="selectedSegment">
  <app-segment-item value="전체">전체</app-segment-item>
  <app-segment-item value="오픈예정">오픈예정</app-segment-item>
  <app-segment-item value="오픈완료">오픈완료</app-segment-item>
</app-segment>
```
