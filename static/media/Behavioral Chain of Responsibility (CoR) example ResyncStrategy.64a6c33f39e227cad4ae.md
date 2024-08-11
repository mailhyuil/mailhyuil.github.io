# chain of responsibility (책임 연쇄 패턴)

## core

```ts
interface Handler<Request = string | undefined, Result = string | undefined> {
  setNext(handler: Handler<Request, Result>): Handler<Request, Result>;
  handle(request: Request): Result;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return;
  }
}
```

## usage

```ts
interface Handler<Request = string, Result = any> {
  setNext(handler: Handler<Request, Result>): Handler<Request, Result>;
  handle(request: Request): Result;
}

abstract class AbstractHandler implements Handler {
  protected nextHandler?: Handler;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return undefined;
  }
}

class ResyncWhenUserMissing extends AbstractHandler {
  public handle(request: string) {
    console.log("Resyncing...");
    db.push({ name: "휴일" });
    return super.handle(request);
  }
}

const db: any[] = [];

class UserRepository extends AbstractHandler {
  findByName(name: string): any {
    const found = db.find((user) => user.name === name);
    if (!found && this.nextHandler instanceof ResyncWhenUserMissing) {
      this.nextHandler.handle("resync");
      this.nextHandler = undefined;
      return this.findByName(name);
    }
    return found;
  }

  findAll(): any[] {
    if (!db.length && this.nextHandler instanceof ResyncWhenUserMissing) {
      this.nextHandler.handle("resync");
      this.nextHandler = undefined;
      return this.findAll();
    }
    return db;
  }

  public setNext(handler: Handler) {
    this.nextHandler = handler;
    return this;
  }
}

const userRepository = new UserRepository();
const found = userRepository.setNext(new ResyncWhenUserMissing()).findByName("휴일");
console.log(found);
```
