# chain of responsibility (책임 연쇄 패턴)

```ts
interface Handler<Request = string | undefined, Result = string | undefined> {
  setNext(handler: Handler<Request, Result>): Handler<Request, Result>;
  handle(...args: any): Result;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(...args: any) {
    if (this.nextHandler) {
      return this.nextHandler.handle(...args);
    }
    return;
  }
}

class A_Handler extends AbstractHandler {
  public handle(...args: any) {
    console.log(`...A strategy... ${args}`);
    return super.handle(...args);
  }
}

class B_Handler extends AbstractHandler {
  public handle(...args: any) {
    console.log(`...B strategy... ${args}`);
    return super.handle(...args);
  }
}

class C_Handler extends AbstractHandler {
  public handle(...args: any) {
    console.log(`...C strategy... ${args}`);
    return super.handle(...args);
  }
}

class User {
  private handler: Handler;

  public doSomething() {
    this.handle();
    console.log("...do something...");
  }

  public setNext(handler: Handler) {
    this.handler = handler;
    return handler;
  }

  public handle(...args: any) {
    if (this.handler) {
      return this.handler.handle(...args);
    }
  }
}

const user = new User();
user.setNext(new A_Handler()).setNext(new B_Handler()).setNext(new C_Handler());
user.doSomething();
```
