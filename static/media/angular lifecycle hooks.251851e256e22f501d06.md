# lifecycle hooks

## ngOnChanges()

> 부모 컴포넌트에서 자식 컴포넌트의 입력 프로퍼티(@Input 데코레이터가 적용된 프로퍼티)에 바인딩한 값이 초기화 또는 변경되었을 때 호출

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

## ngAfterViewChecked()

> 컴포넌트의 View와 ViewChiled를 체크한 이후 호출

## ngOnDestroy()

> 컴포넌트나 디렉티브가 소멸하기 이전에 호출
