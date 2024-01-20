# MediaSource

> video의 bytes를 나눠서 로드할 수 있게 해주는 web api

```js
const chunkSize = Number(VIDEO_CHUNK_SIZE_BYTES);

let startByte = 0;
startByte = startByte + chunkSize;
const endByte = startByte + chunkSize - 1;

const mediaSource = new MediaSource();

const videoUrl = URL.createObjectURL(mediaSource);

mediaSource.addEventListener(
  "sourceopen",
  async () => {
    const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');

    const res = await fetch("https://www.w3schools.com/html/mov_bbb.mp4");
    const buffer = await res.arrayBuffer();
    await sourceBuffer.appendBuffer(buf);
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
    });
  },
  { once: true }
);
```
