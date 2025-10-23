# typescript 객체 내에 타입이 없을 때

> in을 이용해서 체크해준다

```ts
if ("scheduling" in navigator) {
  (navigator.scheduling as any)!.isInputPending();
}
// or
if (navigator["scheduling"]) {
  (navigator.scheduling as any)!.isInputPending();
}
```
