# linux base 스케쥴러 Scheduler

> cpu core에 할당되는 프로세스를 관리하는 scheduler
>
> > process는 priority를 가지고 있으며, 이 priority에 따라 cpu core에 할당되는 프로세스를 결정한다.

## task

> scheduler가 관리하는 최소 단위
>
> > system process, kernel-level thread, user process가 task가 될 수 있다.

## priority

> task의 중요도를 나타내는 값
>
> > priority에는 0 ~ 139까지 총 140단계가 있으며, 0 ~ 99까지는 RT(Real Time) scheduler가, 100 ~ 139까지는 CFS(Completely Fair Scheduler)가 사용한다.
> >
> > > linux kernel의 scheduler는 priority에 따라서 어떤 scheduler를 사용할지, weight을 어떻게 설정할지를 결정한다.

## scheduler 종류

```sh
# Stop
# Deadline
# RT (Real Time)
# CFS (Completely Fair Scheduler)
# Idle Task
```
