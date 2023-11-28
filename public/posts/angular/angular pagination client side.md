# angular pagination client side

## ts

```ts
import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { IconComponent } from "@team-lepisode/components";

export type PaginationInfo = {
  total: number;
  current: number;
  perPage: number;
  lastPage: number;
};

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
  standalone: true,
  imports: [CommonModule, IconComponent],
})
export class PaginationComponent<T> implements OnInit, OnChanges {
  @Output() paginatedItems = new EventEmitter<T[]>();
  @Input() items: T[] = [];
  @Input() perPage: number = 10;
  current: number = 1;
  total?: number;
  lastPage?: number;
  pageNumbers?: number[];
  pageSize = 5;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this._paginate();
  }

  ngOnInit() {
    this._paginate();
  }

  private _paginate() {
    this.total = this.items.length;
    this.lastPage = Math.ceil(this.total / this.perPage);
    this._setPageNumbers();
    this.paginatedItems.emit(this.items.slice((this.current - 1) * this.perPage, this.current * this.perPage));
  }

  private _setPageNumbers() {
    const pageNumbers = Array.from({ length: this.lastPage }, (_, i) => i + 1);

    if (this.current === 1) {
      this.pageNumbers = pageNumbers.slice(0, this.pageSize);
    } else if (this.current > this.pageSize && this.current > this.lastPage - 3) {
      this.pageNumbers = pageNumbers.slice(this.lastPage - this.pageSize, this.lastPage);
    } else {
      this.pageNumbers = pageNumbers.slice(this.current - 2, this.current + this.pageSize - 2);
    }
  }

  prev() {
    if (this.current === 1) return;
    this.current = this.current! - 1;
    this._paginate();
  }
  next() {
    if (this.current === this.lastPage) return;
    this.current = this.current! + 1;
    this._paginate();
  }
  first() {
    this.current = 1;
    this._paginate();
  }
  last() {
    this.current = this.lastPage;
    this._paginate();
  }
  goToPage(page: number) {
    this.current = page;
    this._paginate();
  }
}
```

## html

```html
<div class="flex items-center justify-center gap-5">
  <div (click)="first()">
    <lepi-icon class="block w-5 cursor-pointer aspect-square bg-primary" name="heroicons:chevron-double-left-20-solid"></lepi-icon>
  </div>
  <div (click)="prev()">
    <lepi-icon class="block w-5 cursor-pointer aspect-square bg-primary" name="heroicons:chevron-left-20-solid"></lepi-icon>
  </div>
  @for(i of pageNumbers; track i){
  <div
    (click)="goToPage(i)"
    [ngClass]="{
      'bg-primary text-white hover:bg-primary-400': i === current,
      'bg-white text-gray-500 hover:bg-gray-50': i !== current
    }"
    class="flex items-center justify-center rounded-full cursor-pointer w-7 aspect-square">
    {{ i }}
  </div>
  }
  <div (click)="next()">
    <lepi-icon class="block w-5 cursor-pointer aspect-square bg-primary" name="heroicons:chevron-right-20-solid"></lepi-icon>
  </div>
  <div (click)="last()">
    <lepi-icon class="block w-5 cursor-pointer aspect-square bg-primary" name="heroicons:chevron-double-right-20-solid"></lepi-icon>
  </div>
</div>
```
