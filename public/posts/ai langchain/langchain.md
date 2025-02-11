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
  model = new ChatOpenAI({
    model: 'gpt-4o-mini',
    apiKey: process.env['OPENAI_API_KEY'], // 환경변수에서 API 키 로드
  });
  message$ = new Subject<string>();
  template$ = new Subject<string>();

  async message(message: string) {
    const messages = [
      new SystemMessage('Translate the following from English into Italian'),
      new HumanMessage(message),
    ];

    const stream = await this.model.stream(messages);

    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
      this.message$.next(chunk.content.toString());
    }
  }

  async template(message: string) {
    const promptTemplate = ChatPromptTemplate.fromMessages([
      ['system', 'Translate the following from English into {language}'],
      ['user', '{message}'],
    ]);

    const promptValue = await promptTemplate.invoke({
      language: 'italian',
      message,
    });

    const stream = await this.model.stream(promptValue);

    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
      this.message$.next(chunk.content.toString());
    }
  }
}
```

## gpt.controller.ts

```js
import { Body, Controller, Post, Sse } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { of, switchMap } from 'rxjs';
import { GptService } from './gpt.service';

@ApiTags('Gpt')
@Controller({ path: 'gpt', version: '1' })
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('message')
  async message(@Body('message') message: string) {
    await this.gptService.message(message);
  }
  @Sse('message')
  async messageResult() {
    return this.gptService.message$.asObservable().pipe(
      switchMap((data) => {
        return of({ data } as MessageEvent);
      }),
    );
  }

  @Post('template')
  async template(@Body('message') message: string) {
    await this.gptService.template(message);
  }
  @Sse('template')
  async templateResult() {
    return this.gptService.template$.asObservable().pipe(
      switchMap((data) => {
        return of({ data } as MessageEvent);
      }),
    );
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
      this.eventSource = new EventSource(`http://localhost:3000/api/v1/gpt/${this.id}`, {
        withCredentials: false,
      });
    }
    this.eventSource.onmessage = (e: MessageEvent<string>) => {
      if (e.data === "keep-alive") return;
      this.content.update(prev => prev + e.data);
    };
    this.eventSource.onerror = e => {
      console.log(e);
    };
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
