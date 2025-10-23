# angular base component paginator

## paginator.component.ts

```ts
import { CommonModule } from "@angular/common";
import { Component, Input, computed, signal } from "@angular/core";
import { PageInfoDto } from "@lcrs/api";
import { LepiIcon } from "@team-lepisode/components";
import { ValueAccessorDirective } from "../value-accessor.directive";

@Component({
  selector: "app-paginator",
  standalone: true,
  imports: [CommonModule, LepiIcon],
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
  hostDirectives: [ValueAccessorDirective],
})
export class PaginatorComponent {
  value?: number;

  @Input() set pageInfo(value: PageInfoDto) {
    this._pageInfo.set(value);
  }
  _pageInfo = signal<PageInfoDto | null>(null);

  pageIndex = computed(() => this._pageInfo()?.pageIndex ?? 1);
  totalPageCount = computed(() => this._pageInfo()?.totalPageCount);
  canGoPrev = computed(() => this.pageIndex() > 1);
  canGoNext = computed(() => this.pageIndex() < this.totalPageCount()!);
  pages = computed<number[]>(() => {
    const totalPageCount = this.totalPageCount() || 0;
    const pageIndex = this.pageIndex() || 1;
    const pages = [];

    if (totalPageCount <= 5) {
      for (let i = 1; i <= totalPageCount; i++) {
        pages.push(i);
      }
    } else {
      if (pageIndex <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (pageIndex >= totalPageCount - 2) {
        for (let i = totalPageCount - 4; i <= totalPageCount; i++) {
          pages.push(i);
        }
      } else {
        for (let i = pageIndex - 2; i <= pageIndex + 2; i++) {
          pages.push(i);
        }
      }
    }
    return pages;
  });

  private readonly valueAccessor = new ValueAccessorDirective<number>();
  constructor() {
    this.valueAccessor.value.subscribe(v => (this.value = v));
  }

  go(page: number) {
    if (page === this.pageIndex()) return;
    this.value = page;
    this.valueAccessor.writeValue(this.value);
    this.valueAccessor.valueChange(this.value);
  }

  goPrev() {
    const pageIndex = this.pageIndex();
    if (pageIndex > 1) {
      this.go(pageIndex - 1);
    }
  }

  goNext() {
    const pageIndex = this.pageIndex();
    const totalPageCount = this.totalPageCount();
    if (totalPageCount && pageIndex < totalPageCount) {
      this.go(pageIndex + 1);
    }
  }
}
```

## paginator.component.scss

```css
button {
  @apply size-8 flex justify-center items-center text-sm rounded-full hover:bg-neutral-100;

  &.active {
    @apply bg-primary text-white;
  }

  &.disabled {
    @apply cursor-not-allowed;

    & lepi-icon {
      @apply bg-neutral-400;
    }
  }
}
```

## paginator.component.html

```html
@if(_pageInfo(); as pageInfo){
<div class="flex items-center justify-center gap-2">
  <button (click)="go(1)" [class.disabled]="!canGoPrev()">
    <lepi-icon name="mdi:chevron-double-left" class="block size-5 bg-neutral-700" />
  </button>
  <button (click)="goPrev()" [class.disabled]="!canGoPrev()">
    <lepi-icon name="mdi:chevron-left" class="block size-5 bg-neutral-700" />
  </button>
  @for (page of pages(); track page) {
  <button [class.active]="pageIndex() === page" (click)="go(page)">{{ page }}</button>
  }
  <button (click)="goNext()" [class.disabled]="!canGoNext()">
    <lepi-icon name="mdi:chevron-right" class="block size-5 bg-neutral-700" />
  </button>
  <button (click)="go(pageInfo.totalPageCount)" [class.disabled]="!canGoNext()">
    <lepi-icon name="mdi:chevron-double-right" class="block size-5 bg-neutral-700" />
  </button>
</div>
}
```

## usage

```ts

```
