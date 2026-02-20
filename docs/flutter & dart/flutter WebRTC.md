# flutter WebRTC

> WebRTC는 실시간(Sub-Second급)에 가까운 지연시간을 가지고 있으며, 최적의 상황에서 1초 이내의 지연율을 가지고 있는 기술
>
> > Audio, Video, Data를 실시간으로 주고 받을 수 있는 기술

## install

```sh
dart pub add flutter_webrtc
```

## process

```sh
1. Create offer
2. Set Local Description
3. Send Offer
4. Set Remote Description
5. Create Answer
```

## Offer

통화를 먼저 거는 쪽(Caller)이 생성
미디어 정보: "나 지금 비디오랑 오디오 보낼 준비 됐어."
코덱: "나는 H.264나 VP8 코덱을 사용할 수 있어."
보안: "암호화 방식은 이걸로 하자."

## Answer

제안을 받은 쪽(Callee)이 생성
동의: "네가 제안한 코덱 중에 나도 VP8은 쓸 수 있어. 그걸로 하자."
자신의 정보: "나도 내 비디오랑 오디오 정보를 여기 적어 보낼게."

## Local Description

내가 생성한 내 기기의 미디어 사양과 네트워크 정보입니다.

## Remote Description

상대방으로부터(Firebase 등을 통해) 전달받은 상대방 기기의 사양 정보

## Local Stream

getUserMedia()를 통해 내 컴퓨터의 카메라/마이크에서 가져온 데이터

## Remote Stream

상대방이 보낸 데이터를 내 브라우저가 수신하여 합친 데이터
