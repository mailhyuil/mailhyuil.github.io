# redis base hotkey

> 많은 요청이 집중되는 key
>
> > 핫키가 만료되는 순간, 여러 요청이 동시에 데이터베이스를 불필요하게 반복해서 조회할 수 있어요.
> >
> > > 가능하다면 캐시의 만료 기한을 없애거나, 백그라운드에서 주기적으로 새 값을 적용해서 캐시가 만료되지 않게 하는 것이 좋습니다.
> > >
> > > > 하지만 핫키가 때에 따라 바뀌는 환경에서는 더 이상 핫키가 아닌 데이터로 인해 캐시 저장소 공간이 낭비될 수 있어요.
