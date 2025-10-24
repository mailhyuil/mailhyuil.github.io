# angular Lifecycle

> ~Init은 처음 한번만 호출되고, ~Checked는 계속 호출된다
>
> > Do, Content, View 순으로 계속 호출된다.

## ngOnChanges()

> @Input에 바인딩한 값이 "부모 컴포넌트"에서 변경되었을 때
>
> > 자식 컴포넌트에서 호출

## ngOnInit()

> ngOnChanges 메소드 동작 이후 입력 프로퍼티를 포함한 모든 프로퍼티의 초기화가 완료된 시점에 한 번만 호출
>
> > constructor가 실행되는 시점에 Angular에서 관리하는 입력 프로퍼티는 초기화되기 이전의 상태
> >
> > > 즉 @Input() 은 onInit에서 사용

## ngDoCheck()

> ngOnChanges는 입력 프로퍼티의 값에 변화에 따라 호출되지만, ngDoCheck은 모든 상태 변화에 따라 호출됩니다.

## ngAfterContentInit()

> ngContent 디렉티브를 사용하여 자식 컴포넌트에 부모 컴포넌트의 템플릿 조각을 전달(content projection)한 이후 호출

## ngAfterContentChecked()

> 부모 컴포넌트가 전달한 템플릿 조각을 체크한 후 ngAfterContentInit 메소드 호출 이후에 호출

## ngAfterViewInit()

> 컴포넌트의 View와 ViewChild가 초기화된 이후 호출
>
> > ngAfterViewInit에서는 값을 변경하면 안된다 (onInit이나 constructor에서 변경해라)

## ngAfterViewChecked()

> 컴포넌트의 View와 ViewChild를 체크한 이후 호출

## ngOnDestroy()

> 컴포넌트나 디렉티브가 소멸하기 이전에 호출

```ts
ngOnChanges(changes: SimpleChanges): void {
  // binding 된 Input 프로퍼티 값이 변경될 떄
  console.log('ngOnChanges', changes);
}
ngOnInit(): void {
  console.log('ngOnInit');
}
ngDoCheck(): void {
  console.log('ngDoCheck');
}
ngAfterContentInit(): void {
  console.log('ngAfterContentInit');
}
ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked');
}
ngAfterViewInit(): void {
  console.log('ngAfterViewInit');
}
ngAfterViewChecked(): void {
  console.log('ngAfterViewChecked');
}
ngOnDestroy(): void {
  console.log('ngOnDestroy');
}
```
