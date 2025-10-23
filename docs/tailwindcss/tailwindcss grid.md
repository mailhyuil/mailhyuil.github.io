# tailwindcss grid

> grid

## grid col

> grid-cols-[n]

```html
<div class="grid grid-cols-4 gap-4">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>
```

## grid row

> grid-rows-[n]

```html
<div class="grid grid-rows-4 grid-flow-col gap-4">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>
```

## col-span

> col-span-[n]

```html
<div class="grid grid-cols-3 gap-4">
  <div class="...">01</div>
  <div class="...">02</div>
  <div class="...">03</div>
  <div class="col-span-2 ...">04</div>
  <div class="...">05</div>
  <div class="...">06</div>
  <div class="col-span-2 ...">07</div>
</div>
```

## row-span

> row-span-[n]

```html
<div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 ...">01</div>
  <div class="col-span-2 ...">02</div>
  <div class="row-span-2 col-span-2 ...">03</div>
</div>
```
