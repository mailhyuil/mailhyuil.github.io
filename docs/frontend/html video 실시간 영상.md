# html video 실시간 영상

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
