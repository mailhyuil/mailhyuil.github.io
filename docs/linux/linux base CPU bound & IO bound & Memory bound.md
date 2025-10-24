# linux base CPU bound & IO bound & Memory bound

> 만약 100% cpu bound problem이라면 multi-threading으로는 문제를 해결할 수 없다.
>
> > monitoring을 통해서 cpu bound인지 I/O bound인지 확인
> >
> > > cpu burst가 많은지 I/O burst가 많은지에 따라 결정 (burst 연속된 작업)

## CPU bound

> CPU 사용 기간이 I/O Waiting 보다 긴 경우
>
> > 행렬 곱, 고속 연산을 할 때 나타남
> >
> > > CPU 성능에 의해 작업 속도가 결정된다.
> > >
> > > > scale-up으로 성능을 향상시킬 수 있다.
> > > >
> > > > multi-processing 또는 parallel-threading으로 성능을 향상시킬 수 있다.

## I/O bound

> I/O Waiting 시간이 CPU 사용 시간보다 긴 경우
>
> > 파일 읽기, 쓰기, 디스크 작업, 네트워크 통신을 할 때 나타남
> >
> > > 병목 현상(bottleneck)을 다루는 부분에서 작업 속도가 결정된다.
> > >
> > > > scale-out으로 성능을 향상시킬 수 있다.
> > > >
> > > > multi-threading으로 성능을 향상시킬 수 있다.
> > > >
> > > > Async I/O 사용으로 성능을 향상시킬 수 있다.

## Memory bound
