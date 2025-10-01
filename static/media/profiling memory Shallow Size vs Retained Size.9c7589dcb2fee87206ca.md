# profiling Shallow Size vs Retained Size

> Shallow Size 크기에 대비하여 Retained Size가 크다면 메모리 누수를 의심해볼 수 있다.

## Shallow Size

> 오브젝트 자체의 크기
>
> > 즉, 해당 오브젝트가 차지하고 있는 메모리 크기

## Retained Size

> 오브젝트 자체의 크기 + 오브젝트가 참조하고 있는 다른 오브젝트들의 크기
>
> > 즉, 해당 오브젝트를 가비지 컬렉터가 수집할 때까지 유지해야 하는 메모리 크기
> >
> > 해당 오브젝트가 사라지면 참조하고 있는 다른 오브젝트들도 사라진다.
> >
> > > Retain : 유지하다, 보유하다
