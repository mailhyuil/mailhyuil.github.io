# html video.js

## install

```sh
npm install --save video.js
```

## usage

```js
import videojs from "video.js";

const player = videojs("my-video", {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: "https://vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4",
    },
  ],
});
```
