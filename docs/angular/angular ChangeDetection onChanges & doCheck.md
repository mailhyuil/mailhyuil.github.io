# angular ChangeDetection onChanges & doCheck

> onChanges : @Input() 으로 받은 메모리 값이 변화할 때 호출
>
> > doCheck : @Input() 으로 받은 메모리 값 뿐만 아니라 프로퍼티가 바뀌어도 호출

## onChanges 사용해서 바꾸기

```ts
ngOnChanges(changes: SimpleChanges): void {
  this.cdr.detectChanges();
}
```
