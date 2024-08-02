# design pattern Command Pattern With Receiver

```ts
interface Command {
  execute(): void;
}

class ComplexCommand implements Command {
  private receiver: Receiver;

  private something: string;
  private somethingElse: string;

  constructor(receiver: Receiver, something: string, somethingElse: string) {
    this.receiver = receiver;
    this.something = something;
    this.somethingElse = somethingElse;
  }

  public execute(): void {
    console.log("ComplexCommand: Complex stuff should be done by a receiver object.");
    this.receiver.doSomething(this.something);
    this.receiver.doSomethingElse(this.somethingElse);
  }
}

class Receiver {
  public doSomething(a: string): void {
    console.log(`Receiver: Working on (${a}.)`);
  }
  public doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on (${b}.)`);
  }
}

class Invoker {
  private command: Command;

  public setCommand(command: Command): void {
    this.command = command;
  }

  public invoke(): void {
    this.command.execute();
  }
}

const invoker = new Invoker();
const receiver = new Receiver();
invoker.setCommand(new ComplexCommand(receiver, "Send email", "Save report"));
invoker.invoke();
```
