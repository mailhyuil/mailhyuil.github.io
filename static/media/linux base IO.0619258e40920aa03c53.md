# linux base IO

> IO의 종류가 아니라 IO 방식에 따라서 CPU 점유 여부가 달라진다.

## IO 종류

```txt
Block I/O	저장장치 (HDD/SSD 등)	/dev/sda, /dev/nvme0n1, IOPS, BPS 제한
File I/O	파일	open, read, write to .txt, .log, DB 파일
Character I/O	키보드, 터미널	/dev/tty, /dev/null, stdin/out/err
Network I/O	네트워크 (패킷 송수신)	TCP, UDP 소켓, HTTP, gRPC
Memory I/O	RAM ↔ 디스크 등	mmap, swap, page fault
Pipe I/O	프로세스 간 통신	`
Device I/O	기타 장치	마우스, 프린터, 센서 등 장치제어
```

## IO 방식

> IO 방식은 Blocking IO, Non-blocking IO, Asynchronous IO, Synchronous IO로 나뉜다.
>
> > 현대의 대부분의 IO는 Non-blocking IO + Asynchronous IO를 사용한다.
> >
> > > 하지만 파일 IO는 대부분 Blocking IO + Synchronous IO를 사용한다.

```md
# Blocking I/O : 요청하고 → 완료될 때까지 대기

# Non-blocking I/O : 요청하고 → 완료될 때까지 대기하지 않음

# Asynchronous I/O : 요청하고 → 완료는 콜백으로 받음

# Synchronous I/O : 요청하고 → 완료는 콜백으로 받음
```

## IO 개념

```txt
IOPS (I/O Per Second)	초당 I/O 횟수 (디스크 성능 지표)
Throughput	            초당 전송량 (MB/s)
Latency	                하나의 I/O 작업에 걸리는 시간
Zero-copy I/O	        데이터 복사 없이 이동 (sendfile, mmap)
Interrupt-driven I/O	I/O 완료 시 인터럽트 발생 (vs polling)
```
