# angular 변경감지트리

> angular의 UI는 ViewRef로 구성됨
>
> > ViewRef는 ChangeDetectorRef를 상속받음
> >
> > > 변경감지트리를 순회하는 것은 ViewRef와 ChangeDetectorRef의 역할

## OnChanges, DoCheck

> 변경감지 전력이 수행되면 ngOnChanges, ngDoCheck가 호출됨
>
> > OnChanges는 레퍼런스 값이 변경이 안되도 호출됨
> >
> > > OnPush 전략을 사용하면 레퍼런스 값이 변경되어야 호출됨
