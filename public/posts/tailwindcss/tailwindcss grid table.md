# tailwindcss grid table

> grid-template-columns를 사용하여 가로의 크기를 일치 시키기

## html

```html
<!-- style -->
<!-- 'grid-template-columns': 'minmax(120px, 1fr) minmax(120px, 1fr) minmax(120px, 1fr) minmax(120px, 1fr)' -->

<!-- tailwindcss -->
<!-- grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)_minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] -->
<div class="flex flex-col">
  <div class="grid" [style]="{ 'grid-template-columns': getGridTemplate() }">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="grid" [style]="{ 'grid-template-columns': getGridTemplate() }">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

## ts

```ts
getGridTemplate(): string {
return this.cols()
    .map((col) =>
    col.width ? `minmax(${col.width}px, 1fr)` : 'minmax(120px, 1fr)',
    )
    .join(' ');
}
```
