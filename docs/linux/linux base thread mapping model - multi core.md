# linux base thread mapping model - multi core

> 유저 스레드는 multi core를 활용할 수 없기에 multi core를 활용하기 위해서는 kernel thread와 매핑해야한다.

## N:1 모델 (One to Many)

> 여러 개의 유저스레드가 하나의 커널스레드와 매핑되는 모델이다.
>
> > 멀티코어 사용 불가능
> >
> > > 하나의 유저 스레드가 블록되면 모든 유저 스레드가 블록된다.
> > >
> > > > e.g. green thread

## 1:1 모델 (One to One)

> 각 유저스레드가 하나의 커널스레드와 매핑되는 모델이다.
>
> > 멀티코어 사용 가능
> >
> > > e.g. java thread, nodejs(worker_threads)

## M:N 모델 (Many to Many)

> 여러 개의 유저 스레드가 여러 개의 커널 스레드와 매핑되는 모델이다.
>
> > 멀티코어 사용 가능
> >
> > > e.g. golang thread
