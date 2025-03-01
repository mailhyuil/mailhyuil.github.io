# js error return vs throw

## return

> 함수가 동기적으로 동작한다면 return, throw 둘 다 사용 가능하다.
>
> > 에러 대신 sentinel value(e.g. null, -1 ..)를 사용하여 error를 처리할 수 있다.
> >
> > > 에러가 발생했어도 그 에러를 어떻게 처리할지에 대한 로직을 작성할 수 있다.

## throw

> 함수가 비동기적으로 동작한다면 throw를 사용한다.
>
> > 에러를 throw한다는 것은 더 이상의 로직 수행이 불가능하다는 것을 의미한다.
> >
> > 프로그램이나 함수는 그 즉시 종료된다.
