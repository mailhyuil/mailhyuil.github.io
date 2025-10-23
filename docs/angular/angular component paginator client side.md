# angular client side paginator

## install

```sh
npm i ngx-pagination
```

## ts

```ts
import { Component } from "@angular/core";
import { NgxPaginationModule, PaginatePipeArgs } from "ngx-pagination";

@Component({
  selector: "my-component",
  standalone: true,
  templateUrl: "./my-component.component.html",
  styleUrls: ["./my-component.component.css"],
  imports: [NgxPaginationModule],
})
export class MyComponent {
  data: any[] = [];
  paginateOptions: PaginatePipeArgs = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: this.data.length,
  };
}
```

## html

```html
<div class="flex flex-col items-center gap-5">
  <div class="w-full">
    <div class="flex w-full p-2 font-semibold rounded-sm bg-primary-50">
      <div class="flex-1">번호</div>
      <div class="flex-1">이름</div>
      <div class="flex-1">전화번호</div>
      <div class="flex-1">이메일</div>
      <div class="flex-1">가입일</div>
    </div>
    @for (user of data | paginate: paginateOptions; track user.id) {
    <div class="flex w-full p-2 border-b">
      <div class="flex-1">{{ (+paginateOptions.currentPage! - 1) * +paginateOptions.itemsPerPage! + $index + 1 }}</div>
      <div class="flex-1">{{ user.name }}</div>
      <div class="flex-1">{{ user.tel }}</div>
      <div class="flex-1">{{ user.email }}</div>
      <div class="flex-1">{{ user.createdAt | date: "y-MM-dd" }}</div>
    </div>
    } @empty {
    <p class="p-2">👻 유저가 없습니다.</p>
    }
  </div>
  <pagination-controls (pageChange)="paginateOptions.currentPage = $event"></pagination-controls>
</div>
```
