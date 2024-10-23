# nest server sent event

> sse 핸들러는 접속한 모두에게 영향을 미친다
>
> interval로 데이터를 보내면 접속한 모든 클라이언트에게 보냄
>
> > client에서 EventSource를 5개 사용하니 앱이 멈춤 (최소한으로 사용)
> >
> > > 브라우저는 1분 이상 데이터를 받지 않은 경우 자동으로 연결을 끊는다
> > >
> > > interval로 데이터를 계속 보내주면 해결
> > >
> > > > server는 MessageEvent interface를 반환해야 한다. (data, type, lastEventId, origin, ports)

## controller

```ts
import { Controller, Sse } from "@nestjs/common";
import { Observable, interval, switchMap } from "rxjs";
import { NoticeService } from "../notice/notice.service";

@Controller({ version: "1" })
export class ServerSentEventController {
  constructor(private readonly noticeService: NoticeService) {}
  @Sse()
  async findOneSse(): Promise<Observable<MessageEvent>> {
    // 1000*60*30 = 30분
    return interval(1000 * 60 * 30).pipe(
      switchMap(async _ => {
        const notice = await this.noticeService.findOne();
        return {
          data: { notice },
        } as MessageEvent;
      }),
    );
  }
}
```

## client

```ts
const eventSource = new EventSource(`http://localhost:4201/api/v1/sse`, {
  withCredentials: false,
});
eventSource.onmessage = (e: MessageEvent) => {
  const data = JSON.parse(e.data);
  this.notice = data.notice;
  this.cdr.detectChanges();
};
eventSource.onerror = (e) => {
  console.log(e);
};

onDestroy() {
  eventSource.close();
}
```
