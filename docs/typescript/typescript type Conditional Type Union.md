# typescript type Conditional Type Union

> 프로퍼티의 Value에 따라서 다른 프로퍼티를 가지는 타입은 Union 타입으로 정의할 수 있다.

```ts
export interface BaseDataGridCol {
  label: string;
  width?: string | number;
  clickHandler?: (data: unknown) => void;
}

export interface RowNumberDataGridCol extends BaseDataGridCol {
  type: "rowNumber";
}
export interface TextDataGridCol extends BaseDataGridCol {
  type: "text";
  field: string;
  formatter?: (value: string) => unknown;
}
export interface NumberDataGridCol extends BaseDataGridCol {
  type: "number";
  field: string;
  formatter?: (value: number) => unknown;
}
export interface DateDataGridCol extends BaseDataGridCol {
  type: "date";
  field: string;
  formatter?: (value: Date) => unknown;
}
export interface ComponentDataGridCol extends BaseDataGridCol {
  type: "component";
  field: string;
  component: ComponentType<unknown>;
  inputHandler: (row: unknown) => Record<string, string> | undefined;
}
export interface EnumDataGridCol extends BaseDataGridCol {
  type: "enum";
  field: string;
  enumMap: Record<string, string>;
  enumColorMap?: Record<string, Color>;
}

export type DataGridCol =
  | TextDataGridCol
  | NumberDataGridCol
  | DateDataGridCol
  | ComponentDataGridCol
  | EnumDataGridCol
  | RowNumberDataGridCol;
```
