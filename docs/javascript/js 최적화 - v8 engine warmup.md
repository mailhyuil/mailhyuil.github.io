# js 최적화 - v8 engine warmup

> 자주 호출되는 함수를 미리 여러번 돌려서 미리 최적화 시키는 것을 warmup이라고 한다.
>
> > 서버 시작 후 초기 레이턴시가 높은 현상을 줄이기 위해 사용한다.
> >
> > > jvm은 warmup 전후의 성능 차이가 많이 나서 warmup을 하지만
> > >
> > > nodejs는 sparkplug, maglev 중간단계 JIT 컴파일러가 있어서 warmup을 하는 문화가 잘 없다.
