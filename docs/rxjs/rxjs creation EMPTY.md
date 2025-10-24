# rxjs creation EMPTY

> A simple Observable that emits no items to the Observer and immediately emits a complete notification.
>
> > EMPTY는 아무것도 하지 않고, 바로 complete를 emit하는 Observable이다.

```js
EMPTY.subscribe({
  next: () => console.log("next"),
  complete: () => console.log("complete"),
});
```
