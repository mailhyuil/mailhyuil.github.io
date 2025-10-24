# Behavioral command

```ts
interface Command {
  execute(): void;
}

class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  public execute(): void {
    console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
  }
}

class Invoker {
  private command: Command;

  public setCommand(command: Command): void {
    this.command = command;
  }

  public invoke() {
    this.command.execute();
  }
}

const invoker = new Invoker();
invoker.setCommand(new SimpleCommand("Say Hi!"));
invoker.invoke();
```
