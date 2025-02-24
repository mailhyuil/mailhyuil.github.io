# nodejs webRTC

> web realtime communication
>
> > peer to peer(p2p) 방식으로 실시간 통신을 가능하게 해주는 기술 (클라이언트들 끼리 통신)
> >
> > > UDP를 기반으로 실시간 통신을 가능하게 해준다.

## 개념

```txt
ICE (Interactive Connectivity Establishment)
- "WebRTC 연결을 설정하는 전체 과정"을 담당하는 프로토콜
- P2P 연결을 위한 최적의 네트워크 경로를 탐색

STUN (Session Traversal Utilities for NAT)
- "NAT 뒤에 있는 클라이언트의 공용 IP 주소를 찾아주는 서버"
- NAT 환경에서 공용 IP를 찾아 P2P 연결을 가능하게 해줌

TURN (Traversal Using Relays around NAT)
- "P2P 연결이 불가능할 때, 중계 서버를 통해 데이터를 전달하는 방식"
- P2P 연결이 불가능할 때, TURN 서버를 통해 데이터를 전달

P2P 연결이 가능 -> STUN 서버만 사용 직접 연결
P2P 연결이 불가능 -> TURN 서버를 사용해 데이터를 중계
```

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
> > WebRTC 피어 간 직접 연결하기 위해 필요한 정보를 교환하는 서버
> >
> > > 상대 브라우저의 ip, port, 방화벽, 라우터 등등의 정보를 알려주는 서버

```js
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
  console.log("사용자 연결됨:", socket.id);

  // 특정 방 참가
  socket.on("join", roomId => {
    socket.join(roomId);
    console.log(`사용자 ${socket.id}가 방 ${roomId}에 참가`);

    // 방에 두 명이 있으면 통신 시작
    const clients = io.sockets.adapter.rooms.get(roomId);
    if (clients.size === 2) {
      io.to(roomId).emit("ready");
    }
  });

  // offer(초기 연결 요청) 전달
  socket.on("offer", (offer, roomId) => {
    socket.to(roomId).emit("offer", offer);
  });

  // answer(응답) 전달
  socket.on("answer", (answer, roomId) => {
    socket.to(roomId).emit("answer", answer);
  });

  // ICE candidate 전달
  socket.on("ice-candidate", (candidate, roomId) => {
    socket.to(roomId).emit("ice-candidate", candidate);
  });

  socket.on("disconnect", () => {
    console.log("사용자 연결 해제:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Signaling Server가 3000번 포트에서 실행 중...");
});
```

## 프론트엔드

> mediaDevices API 사용

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebRTC P2P Video</title>
  </head>
  <body>
    <h1>WebRTC P2P Video Chat</h1>
    <video id="localVideo" autoplay playsinline></video>
    <video id="remoteVideo" autoplay playsinline></video>

    <script src="https://cdn.socket.io/4.0.1/socket.io.min.js"></script>
    <script>
      const socket = io("http://localhost:3000");
      const roomId = "testRoom";
      let localStream, peerConnection;

      // STUN 서버 설정 (공용 STUN 사용)
      const iceServers = {
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
      };

      async function startVideoChat() {
        // 카메라 및 마이크 스트림 가져오기
        localStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        document.getElementById("localVideo").srcObject = localStream;

        // 방에 참가
        socket.emit("join", roomId);
      }

      // WebRTC 연결 생성
      function createPeerConnection() {
        peerConnection = new RTCPeerConnection(iceServers);

        // 로컬 스트림을 P2P 연결에 추가
        localStream.getTracks().forEach(track => {
          peerConnection.addTrack(track, localStream);
        });

        // ICE candidate 이벤트 수신
        peerConnection.onicecandidate = event => {
          if (event.candidate) {
            socket.emit("ice-candidate", event.candidate, roomId);
          }
        };

        // 원격 스트림 수신
        peerConnection.ontrack = event => {
          document.getElementById("remoteVideo").srcObject = event.streams[0];
        };
      }

      // 상대방과 연결 준비 완료 시
      socket.on("ready", async () => {
        createPeerConnection();

        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);
        socket.emit("offer", offer, roomId);
      });

      // 상대방의 offer 수신
      socket.on("offer", async offer => {
        createPeerConnection();

        await peerConnection.setRemoteDescription(offer);
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        socket.emit("answer", answer, roomId);
      });

      // 상대방의 answer 수신
      socket.on("answer", async answer => {
        await peerConnection.setRemoteDescription(answer);
      });

      // ICE candidate 수신
      socket.on("ice-candidate", async candidate => {
        await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
      });

      startVideoChat();
    </script>
  </body>
</html>
```
