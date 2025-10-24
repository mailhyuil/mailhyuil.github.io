# L7 http headers Cookie 종류 CHIPS - Partitioned Cookie

> third-party cookie를 이용해 다른 사이트에서 사용자를 추적하는 것을 방지하기 위한 방법
>
> 같은 사이트 내에서만 사용자의 행동을 추적할 수 있게 함
>
> 격리된(Partitioned) 상태에서만 동작
>
> > 쿠키를 "사이트별"로 독립적인 저장 공간에 저장 (Partitioning)
> >
> > > 다른 사이트에서는 같은 쿠키라도 접근 불가 (Cross-Site Tracking 차단)
> > >
> > > > 같은 사이트 내에서 iframe이나 서드파티 리소스를 통해 사용 가능
> > > >
> > > > > "Partitioned" 속성을 추가해야 사용 가능
