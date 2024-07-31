# chain of responsibility (책임 연쇄 패턴)

```ts
interface Handler<Request = string | undefined, Result = string | undefined> {
  setStrategy(handler: Handler<Request, Result>): Handler<Request, Result>;
  handle(...args: any): Result;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler;

  public setStrategy(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(...args: any) {
    if (this.nextHandler) {
      return this.nextHandler.handle(args);
    }
    return;
  }
}

class ResyncWhenUserMissing extends AbstractHandler {
  public handle(...args: any) {
    console.log(`...Resync... userId: ${args}`);
    db.push({ id: "김토스", name: "김토스" });
    console.log("...Resync done...");
    return super.handle(args);
  }
}

const db: any[] = [];

class UserRepository {
  private handler?: Handler;

  public findById(id: string) {
    const found = db.find((user) => user.id === id);
    console.log("Found User: ", found);
    // 유저를 못찾는 경우 그리고 핸들러가 ResyncWhenUserMissing 인 경우 Resync를 수행한다.
    if (!found && this.handler instanceof ResyncWhenUserMissing) {
      this.handle(found); // Resync
      this.handler = undefined; // 핸들러 초기화
      const resyncFound = db.find((user) => user.id === id); // Resync 후 다시 찾기
      console.log("Found User After Resync: ", resyncFound);
      return resyncFound; // Resync 후 결과 반환
    }
    return found;
  }

  public setStrategy(handler: Handler) {
    this.handler = handler;
    return this;
  }

  public handle(...args: any) {
    return this.handler?.handle(args);
  }
}

const userRepo = new UserRepository();
const found = userRepo.setStrategy(new ResyncWhenUserMissing()).findById("김토스");
console.log("Found!:", found);
```
