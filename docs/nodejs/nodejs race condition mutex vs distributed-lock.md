# nodejs race condition mutex vs distributed-lock

## mutex (뮤텍스)

> 단일 프로세스에서 사용하는 방식

## distributed-lock (분산락)

> 멀티 프로세스에서 사용하는 방식
>
> > 노드간의 메시지를 통한 락 또는 저장소를 통한 락 공유 방식을 사용
> >
> > 락을 관리하는 서버가 따로 있거나 여러 노드가 알고리즘(리더 선출 방식..)을 통해 락을 관리한다.
