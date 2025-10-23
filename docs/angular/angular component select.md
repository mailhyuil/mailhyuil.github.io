# angular form component input-select

## InputSelectItemComponent

### ts

```ts
import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Component({
  selector: "app-input-select-item",
  templateUrl: "./input-select-item.component.html",
  styleUrls: ["./input-select-item.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export default class InputSelectItemComponent implements AfterViewInit {
  @Input() value?: string;
  select$ = new Subject<string>();
  selectedValue$ = new BehaviorSubject<string | undefined>(undefined);
  textContent = "";
  @ViewChild("content") content!: ElementRef;

  ngAfterViewInit(): void {
    this.textContent = this.content.nativeElement.textContent;
  }

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
<div #content class="w-full p-2 font-bold rounded cursor-pointer hover:bg-gray-50" (click)="_select()">
  <ng-content></ng-content>
</div>
```

## InputSelectComponent

### ts

```ts
import { CommonModule } from "@angular/common";
import { Component, ContentChildren, Input, QueryList } from "@angular/core";
import { ValueAccessorDirective } from "@lcrs/common";
import { IconComponent } from "@team-lepisode/components";
import { tap } from "rxjs";
import InputSelectItemComponent from "./input-select-item/input-select-item.component";

@Component({
  selector: "app-input-select",
  templateUrl: "./input-select.component.html",
  styleUrls: ["./input-select.component.scss"],
  standalone: true,
  imports: [CommonModule, IconComponent],
  hostDirectives: [ValueAccessorDirective],
})
export default class InputSelectComponent {
  @ContentChildren(InputSelectItemComponent)
  items!: QueryList<InputSelectItemComponent>;
  value?: string;
  textContent = "";
  isOpen = false;
  @Input() label?: string;
  @Input() placeholder?: string;

  constructor(public readonly valueAccessor: ValueAccessorDirective<string>) {
    valueAccessor.value.subscribe(v => (this.value = v));
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this._init();
    });
  }

  _init() {
    this.items.forEach(item => {
      if (!this.value) return;
      if (item.value === this.value) {
        this.getTextContent(item);
      }
      item.selectedValue$.next(this.value);
    });
    this.items.forEach(item => {
      item.select$
        .pipe(
          tap(value => {
            this.items.forEach(item => {
              item.selectedValue$.next(value);
            });
          }),
        )
        .subscribe(value => {
          this.getTextContent(item);
          this.select(value);
          this.isOpen = false;
        });
    });
  }

  getTextContent(item: InputSelectItemComponent) {
    this.textContent = item.textContent;
  }

  select(value: string) {
    this.valueAccessor.writeValue(value);
    this.valueAccessor.valueChange(value);
  }
}
```

### html

```html
<div class="relative flex flex-col gap-2">
  @if(label){
  <span class="font-bold">{{ label }}</span>
  }
  <div
    (click)="isOpen = !isOpen"
    class="flex items-center justify-between w-full px-4 py-2 font-bold border outline-none cursor-pointer rounded-xl focus:ring-2 ring-primary"
  >
    @if(textContent){ {{ textContent }} } @else {
    <span class="text-gray-400">{{ placeholder }}</span>
    }
    <lepi-icon
      [class.rotate-180]="isOpen"
      class="block transition-all duration-100 bg-gray-700 size-5"
      name="heroicons:chevron-down"
    ></lepi-icon>
  </div>
  @if(isOpen){
  <div class="absolute z-10 flex flex-col w-full gap-2 p-2 translate-y-full bg-white border -bottom-1 rounded-xl">
    <ng-content></ng-content>
  </div>
  }
</div>
```

## usage

```html
<app-input-select placeholder="근무 연차를 선택해주세요" class="flex-1" formControlName="period" label="근무 연차">
  <app-input-select-item value="1">1년</app-input-select-item>
  <app-input-select-item value="2">2년</app-input-select-item>
</app-input-select>
```
