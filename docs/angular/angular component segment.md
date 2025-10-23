# angular form group

## segment-group.component.ts

```ts
import { ValueAccessorDirective } from "@/client/app/directives/value-accessor.directive";
import { AfterViewInit, Component, contentChildren, model, signal } from "@angular/core";
import { tap } from "rxjs";
import { SegmentItemComponent } from "../segment-item/segment-item.component";

@Component({
  selector: "app-segment-group",
  templateUrl: "./segment-group.component.html",
  styleUrls: ["./segment-group.component.scss"],
  standalone: true,
  imports: [],
  hostDirectives: [ValueAccessorDirective],
})
export class SegmentGroupComponent implements AfterViewInit {
  segments = contentChildren(SegmentItemComponent);
  value = signal<string | undefined>(undefined);

  cursor = model<string | undefined>(undefined);
  loading = model<boolean>(false);
  data = model<unknown[]>([]);
  private readonly valueAccessor = model(ValueAccessorDirective<string>);
  constructor() {
    this.valueAccessor.value.subscribe(v => {
      if (v != null) {
        this.value.set(v);
        setTimeout(() => {
          const segments = this.segments();
          segments.forEach(segment => {
            segment.selectedValue$.next(v);
          });
        });
      }
    });
  }

  ngAfterViewInit(): void {
    this._init();
  }

  _init() {
    const segments = this.segments();
    segments.forEach(segment => {
      segment.select$
        .pipe(
          tap(value => {
            segments.forEach(segment => {
              segment.selectedValue$.next(value);
            });
          }),
        )
        .subscribe(v => {
          this.setValue(v);
        });
    });
  }

  setValue(value: string) {
    this.loading.set(true);
    this.cursor.set(undefined);
    this.data.set([]);

    this.valueAccessor.writeValue(value);
    this.valueAccessor.valueChange(value);
  }
}
```

## segment-group.component.html

```html
<div class="flex items-center gap-2">
  <ng-content></ng-content>
</div>
```

## segment-item.component.ts

```ts
import { CommonModule } from "@angular/common";
import { Component, input, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Component({
  selector: "app-segment-item",
  templateUrl: "./segment-item.component.html",
  styleUrls: ["./segment-item.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class SegmentItemComponent implements OnDestroy {
  value = input<string | undefined>(undefined);
  select$ = new Subject<string>();
  selectedValue$ = new BehaviorSubject<string | undefined>(undefined);

  ngOnDestroy(): void {
    this.select$.complete();
    this.selectedValue$.complete();
  }

  _select() {
    const value = this.value();
    if (value) {
      this.select$.next(value);
    }
  }
}
```

## segment-item.component.html

```html
@let v = value();

<button
  class="w-full px-5 py-2 font-bold rounded-full"
  [class.bg-primary]="selectedValue$.value === v"
  [class.text-white]="selectedValue$.value === v"
  [class.text-gray-400]="selectedValue$.value !== v"
  (click)="_select()"
>
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
