# langchain

## install

```sh
npm i langchain
npm i @langchain/core
npm i @langchain/openai

# client polyfill
npm i web-streams-polyfill@4
```

## gpt.service.ts

```js
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatOpenAI } from '@langchain/openai';
import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class GptService {
  connections = new Map<string, Subject<MessageEvent<string>>>();
  model = new ChatOpenAI({
    model: 'gpt-4o-mini',
    apiKey: process.env['OPENAI_API_KEY'], // 환경변수에서 API 키 로드
  });

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

  async test(data: { id: string; message: string }) {
    const { id, message } = data;
    const subject$ = this.create(id);

    subject$.next({
      data: `received message : ${message} [id: ${id}]`,
    } as MessageEvent<string>);
  }

  async message(data: { id: string; message: string }) {
    const { id, message } = data;
    const messages = [
      new SystemMessage('Translate the following from English into Italian'),
      new HumanMessage(message),
    ];

    const stream = await this.model.stream(messages);

    const subject$ = this.create(id);
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
      subject$.next({ data: chunk.content.toString() } as MessageEvent<string>);
    }
    // store the chunks in the database
  }

  async template(data: { id: string; message: string }) {
    const { id, message } = data;
    const promptTemplate = ChatPromptTemplate.fromMessages([
      ['system', 'Translate the following from English into {language}'],
      ['user', '{message}'],
    ]);

    const promptValue = await promptTemplate.invoke({
      language: 'italian',
      message,
    });

    const stream = await this.model.stream(promptValue);
    const subject$ = this.create(id);
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
      subject$.next({ data: chunk.content.toString() } as MessageEvent<string>);
    }
    // store the chunks in the database
  }
}
```

## gpt.controller.ts

```js
import { Body, Controller, Param, Post, Res, Sse } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { interval } from 'rxjs';
import { GptService } from './gpt.service';

@ApiTags('Gpt')
@Controller({ path: 'gpt', version: '1' })
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('test')
  async test(@Body() body: { id: string; message: string }) {
    await this.gptService.test(body);
  }

  @Post('message')
  async message(@Body() body: { id: string; message: string }) {
    await this.gptService.message(body);
  }

  @Post('template')
  async template(@Body() body: { id: string; message: string }) {
    await this.gptService.template(body);
  }

  @Sse(':id')
  async connect(
    @Param('id') id: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const subject$ = this.gptService.create(id);

    // keep-alive
    const subscription = interval(1000 * 60 * 30).subscribe(() => {
      subject$.next({ data: 'keep-alive' } as MessageEvent<string>);
    });
    res.on('close', () => {
      this.gptService.deleteConnection(id);
      subject$.complete();
      subscription.unsubscribe();
    });
    return subject$.asObservable();
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
      this.eventSource = new EventSource(`http://localhost:3000/api/v1/gpt/${this.id}`, {
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
      .post(`http://localhost:3000/api/v1/gpt/message`, {
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
