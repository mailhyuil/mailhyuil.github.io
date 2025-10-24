# angular ChangeDetectionStrategy.md

## Default

> 부모 컴포넌트에 이벤트 발생 시 모든 자식 컴포넌트의 렌더링을 다시 수행한다.
>
> > 성능적으로 비효율적이다.

## OnPush

> 자식 컴포넌트에 ChangeDetectionStrategy.OnPush를 설정
>
> > 컴포넌트 내의 레퍼런스값(Input, Event Listener, Signal)이 변경되어야 렌더링을 다시 수행한다.
> >
> > > OnPush는 메모리 내의 값(원시값, 참조값)을 비교해서 변경 감지한다.
> > >
> > > (i.e. 객체의 변경 감지를 위해서는 모든 객체를 변경 불가 (immutable)하게 사용해야한다는 뜻이다.)
> > >
> > > OnPush 전략 사용 시 레퍼런스 변수의 타입을 Readonly로 감싸는게 좋다 (keyword readonly 아님)
> > >
> > > user: Readonly\<\{ name: string \}\> = \{ name: "John Doe" \};
> > >
> > > > input 값이 아닌 값을 변경 시 렌더링을 다시 하고 싶다면 Default로 설정하거나 cdr.markForCheck()을 사용해야한다.

```txt
The component was marked dirty (via markForCheck()/AsyncPipe)
One of the input references changed
An event listener in the template fires
A consummed signal is changed
```
