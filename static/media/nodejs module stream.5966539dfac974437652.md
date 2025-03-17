# nodejs stream

> 10gb 파일을 메모리에 올려서 처리한다고 생각해보자, 엄청 비효율적 퍼포먼스 다운
>
> > 10gb 파일을 잘게 쪼개서(chunk) 메모리에 올려서(버퍼) 사용 <- stream의 개념
> >
> > > 혹은 비동기 처리에서 데이터가 언제 올지 모르니까 스트림을 사용

## stream 인터페이스를 구현한 모듈

```sh
# Readable Streams
Response
Request
fs readStream
zlib streams
crypto streams
TCP sockets
child process stdout
child process stderr
process.stdin

# Writable Streams
Request
Response
fs writeStream
zlib streams
crypto streams
TCP sockets
child process stdin
process.stdout
process.stderr
```

## stream 종류

```sh
# Readable // 읽기 스트림
파일을 읽을 수 있는 스트림
# Writable // 쓰기 스트림
파일을 쓸 수 있는 스트림
# Duplex // 양방향 스트림
입력을 받을 수도있고 출력을 보낼 수도 있다.
# Transform // 변환 스트림
입력받은 스트림을 변환 후 리턴
```
