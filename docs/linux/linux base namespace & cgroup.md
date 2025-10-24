# linux base namespace & cgroup

## namespace

> 리소스를 논리적으로 분리하는 것
>
> 프로세스별로 각각 공간을 만들어서 분리
>
> > namespace A에서 무엇을 하더라도 namespace B에는 영향을 주지 않는다 (e.g. hostname 변경)
> >
> > 즉 프로세스에 대한 환경 격리 (다만 하드웨어 자원에 대한 분리를 수행하지는 않음)

## cgroup (Control Group)

> 프로세스 별 가용 컴퓨팅 자원(메모리, cpu, device, device, disk I/o)을 제어하는 것
>
> > 프로세스 그룹에 대한 "자원 할당을 제어"하는 커널 모듈
> >
> > Resource Limits, Priorities, Accounting, Control
> >
> > > 쿠버네티스의 Pod는 cgroup을 사용하여 자원을 제어한다

## chroot

> 프로세스의 루트 디렉토리를 변경하는 것
>
> > 프로세스는 지정된 루트 디렉토리의 하위 디렉토리와 파일만 접근 가능
> >
> > 프로세스와 파일시스템을 격리하는 방법이다
