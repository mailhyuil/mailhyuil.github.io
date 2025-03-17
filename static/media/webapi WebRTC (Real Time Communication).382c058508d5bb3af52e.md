# webapi WebRTC (Real Time Communication)

> Nestjs로 Signaling Server를 구현

## SDP (Session Description Protocol)

- peerConnection.localDescription
- 미디어 세션을 설명하는 프로토콜
- 미디어 유형, 포트, 코덱, 해상도 등의 정보를 포함
- WebRTC에서는 SDP를 통해 미디어 정보를 교환

## ICE (Interactive Connectivity Establishment)

- "WebRTC 연결을 설정하는 전체 과정"을 담당하는 프로토콜
- P2P 연결을 위한 최적의 네트워크 경로를 탐색
- ice-candidate란 네트워크 정보(ip, port)를 교환하는 것 (직접교환, STUN을 통한 교환, TURN을 통한 교환)

## STUN (Session Traversal Utilities for NAT)

- NAT 뒤에 있는 클라이언트의 공용 IP 주소를 찾아서 반환해주는 서버
- NAT 환경에서 공용 IP를 찾아 P2P 연결을 가능하게 해줌
- [Peer A - 사설 IP] → (STUN 서버) → [Peer B - 사설 IP]
- 무료 서비스가 많다 (직접 구축할 수도 있음)
- google STUN 서버: stun:stun.l.google.com:19302
- twilio STUN 서버: stun:global.stun.twilio.com

## TURN (Traversal Using Relays around NAT)

- 방화벽으로 인해 P2P 연결이 불가능할 때 사용하는 서버
- P2P 연결이 불가능할 때, TURN 서버를 통해 데이터를 전달
- [Peer A] → (TURN 서버 중계) → [Peer B]
- twilio, xirsys 등을 사용 (대부분 유료)

## RTCPeerConnection

> P2P 연결을 설정하는 객체
>
> > 오디오/비디오 스트리밍, 데이터 전송을 담당
> >
> > > 네트워크 상태 감지, 대역폭 조정 등도 지원

```js
const peerConnection = new RTCPeerConnection();
```

## RTCDataChannel

> WebSocket 없이도 브라우저 간 데이터 전송 가능
>
> > WebRTC 연결 시 사용 가능

```js
const dataChannel = peerConnection.createDataChannel("chat");

dataChannel.onopen = () => {
  dataChannel.send("Hello, WebRTC!");
};

dataChannel.onmessage = event => {
  console.log("받은 메시지:", event.data);
};
```

## ICE (Interactive Connectivity Establishment)

> P2P 연결을 위한 네트워크 정보(ip, port) 교환
>
> > NAT 환경에서도 연결이 가능하도록 STUN, TURN 서버를 사용

```js
const peerConnection = new RTCPeerConnection({
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
});

peerConnection.onicecandidate = event => {
  if (event.candidate) {
    console.log("ICE 후보:", event.candidate);
    // candidate를 signal server로 전송
  }
};
```
