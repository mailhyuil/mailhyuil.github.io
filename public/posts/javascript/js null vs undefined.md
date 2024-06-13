# null vs undefined

> "값이 없음"을 명시적으로 나타내고 싶다면 null을 사용해라 (또는 Optional type을 사용해도됨)
>
> > undefined는 초기화가 안된 상태 / 값이 대입되지 않은 상태이다.
> >
> > > findById 메소드에서 undefined를 리턴하는건 잘못된 것이다. null을 리턴하던지 에러를 던져라
> > >
> > > 비즈니스 로직이 담긴 함수에서 null을 리턴할 때는 값이 없는 이유에 대해서 생각하게 되는 문제점
> > >
> > > 따라서 이유를 상세히 명시한 에러를 던지거나 함수 내에서 재시도 등의 로직을 통해서 최대한 null을 던지지 않도록 하는게 좋다.
> > >
> > > null 뿐만 아니라 다른 sentinel values (e.g. -1, "", [] ..)에서도 똑같이 적용
> > >
> > > > "Early Return pattern" 사용시에는 undefined 를 리턴
