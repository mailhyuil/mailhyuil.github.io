# rxjs base observable vs promise

## Observable

> 여러 값을 emit
>
> > lazy
> >
> > > 취소 가능
> > >
> > > > 모든 subscribers에게 에러를 전달

## Promise

> 하나의 값을 emit
>
> > not lazy
> >
> > > 취소 불가
> > >
> > > > 다음 프로미스에게 에러를 전달
