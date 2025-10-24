# ffmpeg fragmented MP4

> 스트리밍형식으로 만들어진 mp4 일정사이즈마다 잘라서 재생이 가능
>
> > 스트리밍 서비스에는 반드시 fragmented mp4가 필요하다.

## mp4 to fragmented mp4

```js
ffmpeg
  .input("input.mp4")
  .outputOptions([
    "-vf scale=100:100",
    "-movflags frag_keyframe+empty_moov", //
    "-frag_duration 1000", //
  ])
  .toFormat("mp4")
  .output("output.mp4")
  .run();
```
