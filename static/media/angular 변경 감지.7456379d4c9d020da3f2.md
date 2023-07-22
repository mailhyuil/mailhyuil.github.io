# angular 변경 감지

> angular의 UI는 ViewRef로 구성됨
>
> > ViewRef는 ChangeDetectorRef를 상속받음
> >
> > > 변경감지트리를 순회하는 것은 ViewRef와 ChangeDetectorRef의 역할
> > >
> > > > DOM 이벤트(click...), http request, timer 등의 이벤트가 발생하면 변경 감지 수행

## 변경 감지 수행

> 리액트는 내부적으로 Object.is() 함수를 사용하여 변경 감지 수행하기 때문에 참조값을 바꿔야 하는 것!!!
>
> > Angular는 애플리케이션 시작 시 zone.js 의 zone을 하나 만듦.
> >
> > > 해당 구역에서 애플리케이션을 구동
> > >
> > > > 해당 구역에서 호출되는 Native API 호출에 대해 통지를 받음
> > > >
> > > > > 통지가 왔을 때 변경 감지(Change Detection) 수행

## OnChanges, DoCheck

> 변경감지 전력이 수행되면 ngOnChanges, ngDoCheck가 호출됨
>
> > OnChanges는 레퍼런스 값이 변경이 안되도 호출됨
> >
> > > OnPush 전략을 사용하면 레퍼런스 값이 변경되어야 호출됨

## SimpleChanges

> ngOnChanges의 매개변수로 전달됨

```ts
interface SimpleChanges {
  [propName: string]: SimpleChange;
}
```

## Options같은 경우는 어떻게 처리해야할까?

> Options는 레퍼런스 값이 변경되지 않아도 변경 감지가 수행되어야 한다.
>
> > this.cdr.detectChanges(); // 변경 감지를 수행
