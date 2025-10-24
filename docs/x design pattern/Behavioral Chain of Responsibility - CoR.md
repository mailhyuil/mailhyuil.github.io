# Behavioral Chain of Responsibility - CoR

> spring, nestjs의 interceptor, filter, guard, pipe 등도 CoR 패턴으로 구현한 것이다.
>
> throwing error 도 이 패턴을 사용한다.
>
> > Handler가 연결되어 있고 이 체인을 통과하면서 request을 처리한다.

```ts
interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | undefined;
}

abstract class AbstractHandler implements Handler {
  private next: Handler;
  setNext(handler: Handler): Handler {
    this.next = handler;
    return handler;
  }
  handle(request: string) {
    if (this.next) {
      return this.next.handle(request);
    }
    return;
  }
}

class RequestListener extends AbstractHandler {
  handle(request: string) {
    return super.handle(request);
  }
}

class ResponseSender extends AbstractHandler {
  handle(request: string) {
    console.log(`ResponseSender가 request를 받았습니다, request를 전송합니다.`);
    return request;
  }
}

class EmojiPrefixer extends AbstractHandler {
  handle(request: string) {
    console.log(`EmojiPrefixer가 request를 받았습니다, request에 이모지를 추가합니다.`);
    return super.handle(`❤️  ${request}`);
  }
}

class UppercaseTransformer extends AbstractHandler {
  handle(request: string) {
    console.log(`UppercaseTransformer가 request를 받았습니다, request를 대문자로 변환합니다.`);
    return super.handle(request.toUpperCase());
  }
}

class BlankRequestFilter extends AbstractHandler {
  handle(request: string) {
    if (request === "") {
      console.log(`BlankRequestFilter가 request를 받았습니다, request가 비어있으므로 에러를 던집니다.`);
      throw new Error("Request is empty");
    }
    return super.handle(request);
  }
}

const listener = new RequestListener();
listener.setNext(new BlankRequestFilter()).setNext(new EmojiPrefixer()).setNext(new UppercaseTransformer()).setNext(new ResponseSender());
const res = listener.handle("hello world");
console.log("Response : ", res);
listener.handle("");

// EmojiPrefixer가 request를 받았습니다, request에 이모지를 추가합니다.
// UppercaseTransformer가 request를 받았습니다, request를 대문자로 변환합니다.
// ResponseSender가 request를 받았습니다, request를 전송합니다.
// Response : ❤️  HELLO WORLD
// BlankRequestFilter가 request를 받았습니다, request가 비어있으므로 에러를 던집니다.
// Error: Request is empty
```
