# angular base if vs hidden

## if

> element를 실제로 add, remove 함

```html
@if(isOpen){
<div>modal</div>
}
```

## hidden

> element를 dom에서 제거하지 않고 보이지만 않게 함
>
> > display:none; 과 같음

```html
<div [hidden]="isOpen">modal</div>
```
