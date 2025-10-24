# angular table ag-grid

## install

```sh
npm i ag-grid-angular
```

## data-grid.component.ts

```ts
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { AgGridAngular } from "ag-grid-angular";
import { ColDef, GridOptions } from "ag-grid-community";
import { AG_GRID_LOCALE_KR } from "./ko-locale";

/* Core Data Grid CSS */
import "ag-grid-community/styles/ag-grid.css";
/* Quartz Theme Specific CSS */
import "ag-grid-community/styles/ag-theme-quartz.css";

@Component({
  selector: "app-data-grid",
  templateUrl: "./data-grid.component.html",
  styleUrls: ["./data-grid.component.scss"],
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  providers: [],
})
export default class DataGridComponent<T> {
  @Input() data!: T[];
  @Input() colDefs!: ColDef[];
  @Input() gridOptions!: GridOptions;
  localeText = AG_GRID_LOCALE_KR;
}
```

## data-grid.component.html

```html
<div class="flex flex-col h-full gap-2">
  <div class="flex items-center justify-between">
    <input class="p-2 border rounded" placeholder="검색어를 입력해주세요" />
    <ng-content select="[button]"></ng-content>
  </div>
  <ag-grid-angular
    class="flex-1 ag-theme-quartz"
    style="min-height: 700px; height: 100%"
    [rowData]="data"
    [columnDefs]="colDefs"
    [localeText]="localeText"
    [pagination]="true"
    [paginationPageSize]="20"
    [gridOptions]="gridOptions"
  />
</div>
```
