# cafe24 if문 with tailwindcss

> cafe24에는 if문이 존재하지 않는다.
>
> > tailwindcss의 arbitrary value를 이용하여 if문을 대체할 수 있다.
> >
> > > \_에는 \\를 붙여야 한다.

```html
<!-- if -->
<div class="flex flex-col">
  <div class="[&>.product\_name\_css]:hidden">
    <h1 class="{$item_class}">{$item_title}</h1>
  </div>
</div>

<!-- not if -->
<div class="flex flex-col">
  <div class="[&>:not(.product\_name\_css)]:hidden">
    <h1 class="{$item_class}">{$item_title}</h1>
  </div>
</div>
```
