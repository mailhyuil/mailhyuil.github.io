# linux base user space & kernel space

## user space

> 사용자 공간은 프로세스, 애플리케이션, 라이브러리 등 사용자 레벨의 프로그램들이 실행되는 메모리 영역
>
> > 사용자가 직접 컴퓨터에 설치한 소프트웨어나 애플리케이션 대부분은 사용자 공간에서 동작

## kernel space

> 커널이 실행되는 메모리 영역
>
> > 시스템의 모든 핵심 기능과 하드웨어 제어를 담당
> >
> > > 사용자 공간과는 별도로 존재하여 시스템의 안정성과 보안성을 보장
> > >
> > > > 시스템의 중앙 제어 부분인 커널, 드라이버, 인터럽트 핸들러 등이 실행되는 메모리 영역으로 사용자 공간의 프로그램들이 필요로 하는 핵심적인 시스템 서비스와 하드웨어 관리를 위한 공간
