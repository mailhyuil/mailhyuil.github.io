# nodejs buffer

> 메모리 안에 있는 고정된 길이의 메모리 청크
>
> > 자바스크립트의 버퍼란 "특정 크기의 메모리 공간"에 "바이너리 데이터"를 저장해두는 객체
> >
> > > Node.js는 Streaming 하는동안에 자동으로 Buffer를 만든다.
> > >
> > > > 데이터를 "1Byte"씩 나누어 저장한다.

## 바이너리 데이터

> 네트워크 content-type 중 application/octet-stream, image/jpeg, image/png, video/mp4 등이 바이너리 데이터이다.
>
> > 바이너리 데이터는 용량이 크기 때문에 메모리에 인코딩된 상태로 저장해두면 메모리를 많이 차지하게 된다.
> >
> > > 따라서 용량이 큰 데이터를 다룰 때는 버퍼를 이용해서 바이너리 데이터 상태로 저장해두고 필요할 때만 인코딩해서 사용한다.

```js
const buffer = Buffer.from("hi");
console.log(buffer); // unicode 값 출력
console.log(buffer[0]); // 버퍼의 값에 접근 아스키 코드값 출력
console.log(buffer.toString("utf-8")); // 문자형으로 출력

// create
const buffer = Buffer.alloc(2); // size가 두개인 버퍼를 생성
const buffer = Buffer.allocUnsafe(2); // 초기화 되지 않은 버퍼를 생성

buffer[0] = 72;
buffer[1] = 105;
buffer.toString();

buffer.copy(otherBuffer);

buffer.concat([buf1, buf2, buf3]);
```

```js
const text = "안녕하세요";
console.log("text : ", text);
const buf = Buffer.from(text); // default utf-8
console.log("buffer : ", buf);
const ascii = buf.toString("base64");
console.log("ascii : ", ascii);
const buf2 = Buffer.from(ascii, "base64");
console.log("buffer2 : ", buf2);
const utf8 = buf2.toString("utf-8");
console.log("utf8 : ", utf8);
```
