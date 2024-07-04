# angular input 값 제한

> ngModelChange 대신 input 이벤트를 사용하여 input 값 제한하기

## ts

```ts
onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  if (+value < 0) {
    target.value = '0';
    this.value = 0;
    return;
  }
  if (+value > this.point) {
    target.value = this.point.toString();
    this.value = this.point;
    return;
  }
}
```

## html

```html
<input [(ngModel)]="value" (input)="onInput($event)" type="number" [readonly]="point < 2000" />
```
