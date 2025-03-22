# linux user thread & kernel thread

## kernel-level thread (os thread)

> os에 의해 관리되는 thread
>
> > context switch가 느리다
> >
> > > 커널에서 보면 하나의 단일 프로세스로 보이기 때문에 멀티코어를 직접 활용할 수 없음.

## user-level thread (user thread)

> user(application)에 의해 관리되는 thread
>
> > context switch가 빠르다
