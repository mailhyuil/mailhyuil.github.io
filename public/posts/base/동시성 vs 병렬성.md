# 동시성 vs 병렬성

## 동시성 (Concurrency)

> 동시성은 한 번에 여러 작업을 수행하는 것처럼 보이는 것이다.
>
> > 작업들의 시점과 관계가 없이 시작 가능하다는 뜻

## 병렬성 (Parallelism or Simultaneously)

> 병렬성은 물리적으로 여러 작업을 동시에 수행하는 것이다.
>
> > 멀티 코어에서만 가능하다. 여러개의 프로세스를 동시에 실행하는 것이다.
> >
> > > CPU 수보다 처리해야 할 프로세스나 스레드 수가 많다면 CPU를 사용하기 전까지 대기가 발생한다. (concurrency로 동작한다.)
> > >
> > > > 보통 동시성에 비해서 병렬성은 각 코어들이 동시에 실행되므로 CPU의 유휴 시간(idle time)이 줄어들어 성능이 좋다
> > > >
> > > > > 하나의 코어가 처리할 수 있는 스레드 개수를 아는 것이 중요

## 정리

> 병렬성을 가지면 동시성도 가지지만
>
> > 동시성을 가진다고 병렬서을 갖는건 아니다
> >
> > > 병렬성을 가지면 메모리 소모가 심해진다
> > >
> > > > 멀티코어라고 해도 무조건 병렬성을 가지는 건 아니다. (상황에 따라서 동시성을 가지게 할것인지 병렬성을 가지게 할것인지 선택해라)
