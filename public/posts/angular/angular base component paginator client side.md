# angular client side paginator

## install

```sh
npm i ngx-pagination
```

## ts

```ts
import { Component } from "@angular/core";

@Component({
  selector: "my-component",
  standalone: true,
  templateUrl: "./my-component.component.html",
  styleUrls: ["./my-component.component.css"],
  imports: [NgxPaginationModule],
})
export class MyComponent {
  pageIndex = 1;
  data: any[] = [];
}
```

## html

```html
<ul>
  <li *ngFor="let item of data | paginate: { itemsPerPage: 10, currentPage: pageIndex }">{{ item }}</li>
</ul>

<pagination-controls (pageChange)="pageIndex = $event"></pagination-controls>
```
