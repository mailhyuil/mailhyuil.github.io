# angular changeDetection & ChangeDetectorRef.md

## ChangeDetectionStrategy.OnPush

> OnPush는 참조값을 비교해서 변경 감지한다. 즉, 객체의 변경 감지를 위해서는 모든 객체를 변경 불가 (immutable)하게 사용해야한다는 뜻이다.
>
> > 객체에서 값을 변경할 때 객체의 복사본을 만들어서 해야한다는 뜻이다.

## ChangeDetectorRef

> 동적으로 변경할 수 있게 하기 위해 사용

```ts
ngAfterViewInit(private readonly cdr:ChangeDetectorRef){
    // View가 초기화 된 후에
    this.cdr.detach(); // 변경 감지 트리에서 분리
}

onClick(){
    this.cdr.detectChanges(); // 변경 감지를 수행
}

onClick(){
    this.obj.name = 'new name';
    this.cdr.markForCheck(); // 참조값이 변경되지 않았음에도 변경 감지를 수행하도록 알리기
}
```
