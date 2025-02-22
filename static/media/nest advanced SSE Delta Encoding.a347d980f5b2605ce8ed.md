# nest advanced SSE Delta Encoding

> 데이터의 변경된 부분만 전송하여 대역폭을 절약하는 SSE Delta Encoding 구현
>
> > Hello World라는 메세지를 보냈고 다음 메세지가 Hello NestJS라면
> >
> > Hello World와 Hello NestJS의 차이인 World만 전송

## 구현

```ts
import { Controller, Sse } from "@nestjs/common";
import { Observable, interval, map } from "rxjs";

@Controller("sse")
export class SseController {
  private previousData = "";

  @Sse('message')
  delta(): Observable<MessageEvent> {
    return interval(2000).pipe(
      map(() => {
        return { data: message };
      }),
    );
  }

  @Sse('delta')
  delta(): Observable<MessageEvent> {
    return interval(2000).pipe(
      map(() => {
        const newData = this.getUpdatedData();
        const delta = this.computeDelta(this.previousData, newData);
        this.previousData = newData; // 이전 데이터 업데이트

        return { type: "delta" data: delta };
      }),
    );
  }

  private getUpdatedData(): string {
    // 💡 여기서 실제 변경된 데이터 가져오는 로직을 구현 (DB, API 등)
    const sampleResponses = ["Hello World", "Hello Next", "Hello NestJS", "Hello NestJS SSE!"];
    return sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
  }

  private computeDelta(prev: string, current: string): string {
    if (prev === current) return "";

    let delta = "";
    for (let i = 0; i < current.length; i++) {
      if (i >= prev.length || prev[i] !== current[i]) {
        delta += current[i];
      }
    }
    return delta;
  }
}
```
