# nodejs module stream back pressure

> Producer(생산자, read stream)이 데이터를 생산한는 속도를 Consumer(소비자, write stream)가 따라가지 못할 때 발
>
> 버퍼가 가득차게 되어 발생 Producer는 데이터를 전송하지 못하고 대기 상태에 빠지게 된다.
>
> > highWaterMark의 임계점에 도달하면 backpressure를 유발하여 스트림은 일시정지 상태가 된다.
> >
> > > backpressure를 방지하려면 수동으로 chunk의 크기를 조절해야한다.

```ts
const fs = require("fs");

const readableStream = fs.createReadStream("largefile.txt");
readableStream.on("data", chunk => {
  if (!someConsumer.write(chunk)) {
    // 만약 소비자가 처리할 수 없는 경우
    readableStream.pause(); // 스트림을 일시 중지
  }
});

someConsumer.on("drain", () => {
  readableStream.resume(); // 소비자가 처리할 수 있으면 다시 시작
});
```
