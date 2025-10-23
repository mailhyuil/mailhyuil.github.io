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
import { Body, Controller, Param, Post, Res, Sse } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { interval } from "rxjs";
import { SseService } from "./sse.service";

@ApiTags("Sse")
@Controller({ path: "sse", version: "1" })
export class SseController {
  constructor(private readonly sseService: SseService) {}

  @Post("message")
  async message(@Body() body: { id: string; message: string }) {
    await this.sseService.message(body);
  }

  @Sse(":id")
  async connect(@Param("id") id: string, @Res({ passthrough: true }) res: Response) {
    const subject$ = this.sseService.create(id);

    // keep-alive
    const subscription = interval(1000 * 60 * 30).subscribe(() => {
      subject$.next({ type: "keep-alive", data: "keep-alive" } as MessageEvent);
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

## service

```ts
import { Injectable } from "@nestjs/common";
import { Subject } from "rxjs";

@Injectable()
export class SseService implements OnModuleDestroy {
  connections = new Map<string, Subject<MessageEvent<{ chunk: string }>>>();

  onModuleDestroy() {
    for (const subject$ of this.connections.values()) {
      subject$.complete();
    }
  }

  create(id: string) {
    if (!this.connections.has(id)) {
      this.connections.set(id, new Subject<MessageEvent<{ chunk: string }>>());
    }
    const subject$ = this.connections.get(id);

    return subject$;
  }

  deleteConnection(id: string) {
    this.connections.delete(id);
  }

  async message(data: { id: string; message: string }) {
    const { id, message } = data;

    const subject$ = this.create(id);

    subject$.next({
      data: { chunk: `received message : ${message}` },
    } as MessageEvent<{ chunk: string }>);

    subject$.next({ type: "end", data: "end" } as MessageEvent);
  }
}
```

## client

```ts
import { HttpClient } from "@angular/common/http";
import { Component, inject, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { fromEvent } from "rxjs";

@Component({
  selector: "app-greeting",
  templateUrl: "./greeting.component.html",
  imports: [],
  standalone: true,
})
export class GreetingComponent {
  http = inject(HttpClient);
  content = signal("");
  eventSource?: EventSource;
  id = Math.random().toString(36).substring(7);

  constructor() {
    if (!this.eventSource) {
      this.eventSource = new EventSource(`http://localhost:3000/api/v1/sse/${this.id}`, {
        withCredentials: false,
      });
    }
    fromEvent(this.eventSource, "open")
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        console.log("connected");
      });
    fromEvent(this.eventSource, "error")
      .pipe(takeUntilDestroyed())
      .subscribe(error => {
        console.error(error);
      });
    fromEvent<MessageEvent<string>>(this.eventSource, "message")
      .pipe(takeUntilDestroyed())
      .subscribe(({ data }) => {
        const { chunk } = JSON.parse(data);
        this.content.update(prev => prev + chunk);
      });
    fromEvent<MessageEvent<string>>(this.eventSource, "end")
      .pipe(takeUntilDestroyed())
      .subscribe(({ data }) => {
        // end 처리
      });
  }

  onClick() {
    this.http
      .post(`http://localhost:3000/api/v1/sse/message`, {
        id: this.id,
        message: "Hello, World!",
      })
      .subscribe();
  }

  onDestroy() {
    this.eventSource?.close();
    this.eventSource = undefined;
  }
}
```
