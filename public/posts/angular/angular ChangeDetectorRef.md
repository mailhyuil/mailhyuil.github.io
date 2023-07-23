# angular ChangeDetectorRef

> 변경 감지를 동적으로 변경할 수 있게 하기 위해 사용
>
> > detach를 하게 되면 zone.js가 감시를 하지 않는다.

```ts
ngAfterViewInit(private readonly cdr:ChangeDetectorRef){
    // View가 초기화 된 후에
    this.cdr.detach(); // 변경 감지 트리에서 분리
}

onClick(){
    this.cdr.detectChanges(); // 변경 감지를 수행
}

// ChangeDetectionStrategy.OnPush
onClick(){
    this.obj.name = 'new name';
    this.cdr.markForCheck(); // OnPush 전략일 때 참조값이 변경되지 않았음에도 변경 감지를 수행하도록 알리기
}
```

## detectChanges 외에 zone.js가 감시하도록 만드는 방법

> zone 내에서 실행시키기
>
> > setTimeout을 사용하기

```js
this.zone.run(this.someFunctionThatIsRunByAThirdPartyCode);

// angular의 setTimeout은 zonejs에 의해 monkey patching 되어있기 때문에 zone 내에서 실행된다.
setTimeout(this.someFunctionThatIsRunByAThirdPartyCode, 0);
```
