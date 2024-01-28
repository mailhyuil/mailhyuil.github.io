# I/O (입출력)

> 스트림 : 입출력할 두 대상을 연결하고 데이터를 전송시키는 연결통로 (단반향)
> 입력스트림 / 출력스트림이 있다
> 최상위 부모 InputStream / OutputStream

## 바이트기반 스트림

> 1바이트단위로 데이터를 전송

```
ByteArray Input/OutputStream // 메모리, 즉 바이트배열에 데이터를 입출력시 사용

File Input/OutputStream // 파일에 입출력시 사용

Piped Input/OutputStream // 쓰레드간에 데이터를 주고받을때 사용

Audio Input/OutputStream // 오디오데이터를 입출력시 사용
```

- 보조스트림
  > 데이터를 입출력할 수 있는 기능은 없음 즉 보조스트림만 사용할 수는 없다.
  > 기능을 향상시키거나 기능을 추가하는 역할

```
Filter Input/OutputStream // 모든 보조스트림의 조상

Buffered Input/OutputStream // 입출력의 효율을 높여준다

Data Input/OutputStream // 8가지 원시타입의 단위로 읽고 쓸 수 있는 장점

Sequence InputStream // 여러 개의 입력스트림을 연속적으로 연결시켜준다

LineNumber InputStream

ObjectInput Input/OutputStream // 직렬화를 위해 사용 * 객체는 Serializable을 구현해야함

Print OutputStream // PrintWriter를 사용하는게 좋다

Pushback InputStream
```

## 문자기반 스트림

> char형은 2바이트이기 때문에 바이트기반 스트림을 사용하면 어려움이 있다

```
CharArray Reader/Writer // 입출력 대상이 메모리

String Reader/Writer // 입출력 대상이 메모리

File Reader/Writer // 파일로부터 텍스트를 읽고 쓰기위해 사용

Piped Reader/Writer // 쓰레드간의 데이터 전송시 사용
```

- 보조스트림

```
Filter Reader/Writer // 조상

Buffered Reader/Writer

InputStreamReader / OutputStreamWriter // 바이트기반 스트림을 문자기반 스트림으로 연결시켜주는 역할

LineNumber Reader/Writer

Print Reader/Writer

Pushback Reader/Writer
```
