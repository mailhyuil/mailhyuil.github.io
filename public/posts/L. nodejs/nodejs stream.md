# nodejs stream

> fs.createReadStream('file') // fs.createWriteStreamm('file')

## stream

> 10gb 파일을 메모리에 올려서 처리한다고 생각해보자, 엄청 비효율적 퍼포먼스 다운
>
> > 10gb 파일을 잘게 쪼개서(chunk) 메모리에 올려서 사용 <- stream의 개념

> 비동기 처리에 대해서 생각해보자
>
> > 데이터가 언제 올지 모르니까 스트림을 사용

```
const rs = fs.createReadStream('file.txt')

rs.on('data',()=>{})
rs.on('error',()=>{})
rs.on('end',()=>{})
```

# 사용법

```
const fs = require('fs')

const ws = fs.createWriteStream('local/big-file')
ws.write('hello, world')
```

# stream 종류

## readable

## writable

## duplex

> 양방향 스트림
> 입력을 받을 수도있고 출력을 보낼 수도 있따.

## transform

> 입력받은 스트림을 변환 후 리턴

## stream pipeline

> 스트림들을 묶어주는 역할
>
> > transform 스트림을 쉽게 활용할 수 있게 해준다

```
const stream = require('stream')

stream.pipeline(
	fs.createReadStream('big-file.txt')
	zlib.createGzip(), // transform
	fs.createWriteStream('big-file.gz')
)

stream.pipeline(
	fs.createReadStream('big-file.gz')
	zlib.createGunzip(), // transform
	fs.createWriteStream('big-file.txt')
)
```
