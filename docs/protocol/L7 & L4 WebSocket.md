# L4 WebSocket

> 웹소켓은 L7이고 L4에 의존한다.
>
> > Twitch, Whatsapp, Discord, WebRTC.. 이 사용

## Websocket handshake

```sh
## request
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13

## response
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Protocol: chat
```
