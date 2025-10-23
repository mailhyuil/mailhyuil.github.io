# navigator.mediaDevices

> 사용자의 카메라, 마이크를 사용할 수 있는 API

```js
async function getMedia() {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    video.srcObject = stream; // video 태그에 stream을 넣어주면 실시간 카메라 영상이 출력된다.
    /* use the stream */
  } catch (err) {
    /* handle the error */
  }
}
```
