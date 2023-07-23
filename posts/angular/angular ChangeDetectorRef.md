# angular ChangeDetectorRef

> 변경 감지를 동적으로 변경할 수 있게 하기 위해 사용

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
