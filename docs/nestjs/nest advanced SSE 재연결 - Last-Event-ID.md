# nest advanced SSE 재연결 - Last-Event-ID

> Sse는 데이터 이벤트마다 0부터 시작하는 id를 부여함 (network tap을 통해 확인 가능)
>
> > SSE로 데이터 전송 중 연결이 끊기는 경우 브라우저는 연결을 자동으로 재시도(Reconnection)함.
> >
> > > 재연결 시, 브라우저는 마지막으로 받은 이벤트 ID를 Last-Event-ID 헤더에 포함하여 서버에 전송함.
> > >
> > > > 서버는 Last-Event-ID를 통해 이를 처리하는 로직을 직접 구현할 수 있음

## usage

```ts
import { Body, Controller, Get, Headers, Param, Post, Res, Sse } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { interval, last } from "rxjs";
import { SseService } from "./sse.service";

@ApiTags("Sse")
@Controller({ path: "sse", version: "1" })
export class SseController {
  @Sse(":id")
  async connect(
    @Param("id") id: string,
    @Res({ passthrough: true }) res: Response,
    @Headers("Last-Event-Id") lastEventId?: string,
  ) {
    if (lastEventId) {
      // handle lastEventId
    }

    const subject$ = this.sseService.create(id);

    // keep-alive
    const subscription = interval(1000 * 60 * 30).subscribe(() => {
      subject$.next({ data: "keep-alive" } as MessageEvent<"keep-alive">);
    });

    res.on("close", () => {
      this.sseService.deleteConnection(id);
      subject$.complete();
      subscription.unsubscribe();
    });
    return subject$.asObservable();
  }
}
```
