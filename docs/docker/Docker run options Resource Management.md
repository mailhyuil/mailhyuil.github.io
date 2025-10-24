# Docker run options Resource Management

## CPU

```txt
--cpus
컨테이너에 할당 된 CPU core수를 지정

--cupset-cups
컨테이너가 사용할 수 있는 cpu나 core를 할당.
cpu index는 0부터

--cpu-share
컨테이너가 사용하는 cpu 비중을 1024값을 기반으로 설정
```

## Memory

```txt
--memory, -m
컨테이너가 사용 할 최대 메모리 양을 지정

--memory-swap
컨테이너가 사용할 스왑 메모리 영역에 대한 설정, 값은 [메모리 +스왑]값. 생략시 메모리의 2배가 설정 됨

--memory-reservation
--memory값보다 적은 값으로 구성하는 소프트 제한 값 설정, 최소한으로 보장 받는 값

--oom-kill-disable
OOM Killer가 프로세스 kill 하지 못하도록 보호
```

## BLOCK I/O (Disk)

> blkio

```txt
--blkio-weigh
--blkio-weigh-device
BlockIO 의 quota 설정을 할 수 있으며 100-1000까지 선택
(default 500)

--blkio-read-bps
--blkio-write-bps
특정 디바이스에 대한 읽기와 쓰기 작업의 초당 제한을 kb, mb, gb 단위로 설정
(bps: bytes per second)

--device-read-iops
--device-write-iops
컨테이너의 read/write 속도의 쿼터를 설정, 초당 quota를 제한해서 I/O를 발생시킴.
0이상의 정수로 표시
초당 데이터 전송량 = IOPS * 블럭크기 (단위 데이터 용량)
(iops: input/output operations per second)
```
