# nodejs webRTC

> web realtime communication
>
> > peer to peer(p2p) 방식으로 실시간 통신을 가능하게 해주는 기술 (클라이언트들 끼리 통신)
> >
> > > UDP를 기반으로 실시간 통신을 가능하게 해준다.

## install

```sh
# 프론트엔드 서버
npm i socket.io-client
# 백엔드 서버
npm i socket.io
```

## 백엔드

> Signaling Server
>
> > 상대 브라우저의 ip, port, 방화벽, 라우터 등등의 정보를 알려주는 서버

```js

```

## 프론트엔드

```js
async function getMedia() {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    video.srcObject = stream; // video 태그에 stream을 넣어주면 실시간 카메라 영상이 출력된다.
  } catch (err) {
    /* handle the error */
  }
}
```
