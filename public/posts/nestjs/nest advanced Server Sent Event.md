# nest server sent event

> client에서 EventSource를 5개 사용하니 앱이 멈춤 (최소한으로 사용)

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
      switchMap(async (_) => {
        const notice = await this.noticeService.findOne();
        return {
          data: { notice },
        } as MessageEvent;
      })
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
```
