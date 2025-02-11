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
    const subscription = interval(1000 * 60 * 30).subscribe(() => {
      subject$.next({ data: "keep-alive" } as MessageEvent<string>);
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
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { Injectable } from "@nestjs/common";
import { Subject } from "rxjs";

@Injectable()
export class SseService {
  connections = new Map<string, Subject<MessageEvent<string>>>();
  create(id: string) {
    if (!this.connections.has(id)) {
      this.connections.set(id, new Subject<MessageEvent<string>>());
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

    subject$.next({ data: `received message : ${message}` } as MessageEvent<string>);
  }
}
```

## client

```ts
import { HttpClient } from "@angular/common/http";
import { Component, inject, signal } from "@angular/core";

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
      .subscribe(e => {
        if (e.data === "keep-alive") return;
        this.content.update(prev => prev + e.data);
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
