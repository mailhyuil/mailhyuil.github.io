# 동시 편집 CRDT - Conflict-Free Replicated Data Type

- 각 클라이언트가 독립적으로 상태를 바꾸고, 나중에 merge해도 일관성 보장
- 서버는 거의 “브로드캐스팅 허브 + 영속화” 정도 역할.
- 각 글자를 유니크한 값으로 식별하여 동기화
- 복잡한 서버 조정 없이도 eventually-consistent 충돌 해결
- 글자가 섞여버리는 문제가 발생할 수 있다.

## install

```sh
npm i yjs
```

## server - websocket

```ts
// src/collab/collab.gateway.ts
import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({
  cors: {
    origin: "*", // 실제론 도메인 제한
  },
})
export class CollabGateway {
  @WebSocketServer()
  server: Server;

  // 클라이언트가 특정 문서 방에 join
  @SubscribeMessage("joinDoc")
  handleJoin(@MessageBody() data: { documentId: string }, @ConnectedSocket() client: Socket) {
    client.join(data.documentId);
    // 필요하면 현재 상태 보내기
    // const state = this.collabService.getState(data.documentId);
    // client.emit('docState', state);
  }

  // CRDT/OT operation 수신
  @SubscribeMessage("docOp")
  handleOperation(
    @MessageBody()
    data: {
      documentId: string;
      clientId: string;
      op: any; // CRDT 업데이트 or OT op
      version?: number;
    },
    @ConnectedSocket() client: Socket,
  ) {
    // 1) 서버에서 검증
    // 2) 영속화 (db에 append log or 스냅샷)
    // 3) 같은 문서 방에 브로드캐스트
    client.to(data.documentId).emit("remoteOp", data);
  }
}
```

## client - socket.io

```ts
// collab-socket.service.ts
import { Injectable } from "@angular/core";
import { io, Socket } from "socket.io-client";
import { Observable, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class CollabSocketService {
  private socket: Socket;
  private remoteOp$ = new Subject<any>();

  constructor() {
    this.socket = io("https://api.example.com", {
      transports: ["websocket"],
    });

    this.socket.on("remoteOp", data => {
      this.remoteOp$.next(data);
    });
  }

  joinDoc(documentId: string) {
    this.socket.emit("joinDoc", { documentId });
  }

  sendOp(payload: { documentId: string; clientId: string; op: any }) {
    this.socket.emit("docOp", payload);
  }

  onRemoteOp(): Observable<any> {
    return this.remoteOp$.asObservable();
  }
}
```

## yjs usage

```ts
// collab-doc.service.ts
import { Injectable } from "@angular/core";
import { CollabSocketService } from "./collab-socket.service";
// import * as Y from 'yjs'; // 실제로는 이런 식

@Injectable({ providedIn: "root" })
export class CollabDocService {
  private docId!: string;
  private clientId = crypto.randomUUID();
  // private ydoc = new Y.Doc();
  // private yText = this.ydoc.getText('content');

  constructor(private collabSocket: CollabSocketService) {
    this.collabSocket.onRemoteOp().subscribe(data => {
      if (data.clientId === this.clientId) return; // 내꺼는 무시
      // 여기서 CRDT 업데이트 적용
      // Y.applyUpdate(this.ydoc, data.op);
    });
  }

  init(documentId: string) {
    this.docId = documentId;
    this.collabSocket.joinDoc(documentId);
  }

  // 로컬이 상태 변경 시
  applyLocalChange(op: any) {
    // 1) 로컬 CRDT에 적용
    // Y.applyUpdate(this.ydoc, op);
    // 2) 서버로 전송
    this.collabSocket.sendOp({
      documentId: this.docId,
      clientId: this.clientId,
      op,
    });
  }
}
```
