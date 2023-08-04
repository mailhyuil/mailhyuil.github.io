# angular changeDetection onChanges

> onChanges 사용해서 바꾸기

```ts
ngOnChanges(changes: SimpleChanges): void {
  this.cdr.detectChanges();
}
```
