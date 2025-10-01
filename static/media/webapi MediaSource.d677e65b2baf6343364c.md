# MediaSource

> video, audio 태그의 src에 직접 url을 넣는 대신 더 세밀한 제어를 위한 방법
>
> HTMLMediaElement가 MediaSource를 사용
>
> > MediaSource는 SourceBuffer를 소유하고 사용한다.
> >
> > > SourceBuffer를 이용해 MediaSource에 미디어 세그먼트를 전달해주고
> > >
> > > HTMLMediaElement(Video)는 플레이하면서 필요한 데이터를 MediaSource로 부터꺼내와 사용한다.
> > >
> > > > mp4 파일은 fragmented mp4로 보내야한다.

```js
this.mediaSource = new MediaSource(); // 생성하면 sourceopen 이벤트가 발생함
video.src = URL.createObjectURL(this.mediaSource); // mediaSource의 url을 video src에 커넥트

this.mediaSource.addEventListener("sourceopen", () => {
  // sourceopen 시 sourceBuffer를 생성하여 arrayBuffer를 add
  const sourceBuffer = this.mediaSource.addSourceBuffer(this.mimeCodec);
  // arrayBuffer를 fetch하여 sourceBuffer에 add
  this.http
    .get("videos/:id", {
      responseType: "arrayBuffer",
      header: {
        Range: `bytes=${this.start}-${this.end}`,
      },
    })
    .subscribe(arrayBuffer => {
      sourceBuffer.addEventListener("updateend", () => {
        // arrayBuffer add가 끝나면 endOfStream을 호출시켜 비디오 실행 준비 완료
        this.mediaSource.endOfStream();
        video.play();
      });
      sourceBuffer.appendBuffer(arrayBuffer);
    });
});
```
