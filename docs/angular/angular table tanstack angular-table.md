# angular table tanstack angular-table

## install

```sh
npm i @tanstack/angular-table
```

## data-grid.component.ts

```ts
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { ColumnDef, createAngularTable, FlexRenderDirective, getCoreRowModel } from "@tanstack/angular-table";

@Component({
  selector: "app-data-grid",
  templateUrl: "./data-grid.component.html",
  styleUrls: ["./data-grid.component.scss"],
  standalone: true,
  imports: [CommonModule, FlexRenderDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export default class DataGridComponent<T> {
  data = input<T[]>([]);
  columnDefs = input<ColumnDef<T>[]>([]);
  table = createAngularTable(() => ({
    data: this.data(),
    columns: this.columnDefs(),
    getCoreRowModel: getCoreRowModel(),
  }));
}
```

## data-grid.component.html

```html
<div class="p-2">
  <table class="w-full overflow-x-auto">
    <thead class="border-b">
      @for (headerGroup of table.getHeaderGroups(); track headerGroup.id) {
      <tr>
        @for (header of headerGroup.headers; track header.id) { @if (!header.isPlaceholder) {
        <th class="p-1 text-start">
          <ng-container
            *flexRender="
                    header.column.columnDef.header;
                    props: header.getContext();
                    let header
                  "
          >
            <div [innerHTML]="header"></div>
          </ng-container>
        </th>
        } }
      </tr>
      }
    </thead>
    <tbody>
      @for (row of table.getRowModel().rows; track row.id) {
      <tr class="border-b" [ngClass]="{ 'bg-gray-50': $odd }">
        @for (cell of row.getVisibleCells(); track cell.id) {
        <td class="p-1">
          <ng-container
            *flexRender="
                  cell.column.columnDef.cell;
                  props: cell.getContext();
                  let cell
                "
          >
            <div [innerHTML]="cell"></div>
          </ng-container>
        </td>
        }
      </tr>
      }
    </tbody>
    <tfoot>
      @for (footerGroup of table.getFooterGroups(); track footerGroup.id) {
      <tr>
        @for (footer of footerGroup.headers; track footer.id) {
        <th>
          <ng-container
            *flexRender="
                  footer.column.columnDef.footer;
                  props: footer.getContext();
                  let footer
                "
          >
            {{ footer }}
          </ng-container>
        </th>
        }
      </tr>
      }
    </tfoot>
  </table>
</div>
```
