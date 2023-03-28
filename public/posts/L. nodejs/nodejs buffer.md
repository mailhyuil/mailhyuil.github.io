# nodejs buffer

> 메모리 안에 있는 고정된 길이의 메모리 청크
>
> > array of integer

```
const buffer = Buffer.from('hi')
console.log(buffer) // unicode 값 출력
console.log(buffer[0]) // 버퍼의 값에 접근 아스키 코드값 출력
console.log(buffer.toString("utf-8")) // 문자형으로 출력

// create
const buffer = Buffer.alloc(2) // size가 두개인 버퍼를 생성
const buffer = Buffer.allocUnsafe(2) // 초기화 되지 않은 버퍼를 생성

buffer[0] = 72;
buffer[1] = 105;
buffer.toString()

buffer.copy(otherBuffer)

buffer.concat([buf1, buf2, buf3])
```

## 10GB영상을 8GB메모리에 한번에 올려서 볼 수는 없다

## 10GB영상을 작은 chunk로 나눠서 메모리에 올려서(버퍼) 영상을 시청
