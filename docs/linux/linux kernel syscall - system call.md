# linux kernel syscall - system call

> 시스콜은 운영 체제의 커널이 제공하는 서비스에 대해, 응용 프로그램의 요청에 따라 커널에 접근하기 위한 인터페이스
>
> > user space에서 kernel space로 접근하기 위한 인터페이스

```sh
fork() # 자식 프로세스 생성
exec() # 새로운 프로그램 실행
wait() # 자식 프로세스 종료 대기
getpid() # 프로세스 ID 반환
getppid() # 부모 프로세스 ID 반환
exit() # 프로세스 종료
kill() # 프로세스 종료

signal() # 시그널 핸들러 등록
alarm() # 시간 초과 알람 설정
pause() # 시그널 대기
sleep() # 시간 대기

open() # 파일 열기
close() # 파일 닫기
read() # 파일 읽기 === "recv() with a flags argument 0"
write() # 파일 쓰기 === "send() with a flags argument 0"

socket() # 소켓 생성
bind() # 소켓 주소 할당
listen() # 소켓 연결 대기
accept() # 소켓 연결 수락
connect() # 소켓 연결
send() # 소켓으로 데이터 전송
recv() # 소켓으로부터 데이터 수신

select() # 파일 디스크립터 상태 확인
poll() # 파일 디스크립터 상태 확인
epoll() # 파일 디스크립터 상태 확인

stat() # 파일 정보 조회
fstat() # 파일 정보 조회
lstat() # 파일 정보 조회
lseek() # 파일 오프셋 이동
mmap() # 파일 매핑
sync() # 파일 시스템 동기화
fsync() # 파일 동기화
...
```
