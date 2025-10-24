# webapi Stream API

> HTTP의 Stream 응답을 실시간으로 처리할 수 있다
>
> > angular의 HttpClient는 아직 stream을 지원하지 않는다.
> >
> > 따라서 fetch api를 사용하자

## polyfill

```sh
npm i web-streams-polyfill
```

## ReadableStream

> while문이나 재귀함수를 사용하여 stream이 done이 될때까지 계속 읽기

```js
// server는 요청을 받으면 stream으로 데이터를 보내줘야한다.
const res = await fetch(`${environment.baseUrl}/api/v1/gpt/greeting`);

// TextDecoderStream을 사용하여 binary stream을 text로 변환
const reader = res.body?.pipeThrough(new TextDecoderStream()).getReader();

if (!reader) throw new Error("No reader");

while (true) {
  let { value, done } = await reader.read();
  if (done) break;

  this.content.update(prev => prev + value);
}
```
