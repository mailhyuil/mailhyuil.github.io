# mediator pattern (중재자 패턴)

> 서로 상호작용하는 object들을 캡슐화함으로써 loose coupling을 유지하기 위해 사용한다.
>
> > 다수의 publisher와 다수의 subscriber가 존재
> >
> > > observer 패턴은 1개의 publisher와 다수의 subscriber가 존재

## 구조

```ts
interface Mediator {
  subscribe(colleague: Colleague): void;
  unsubscribe(colleague: Colleague): void;
  broadcast(sender: Colleague, message: string): void;
}

class ConcreteMediator implements Mediator {
  private colleagues: Colleague[] = [];

  public subscribe(colleague: Colleague): void {
    this.colleagues.push(colleague);
  }

  public unsubscribe(colleague: Colleague): void {
    const index = this.colleagues.indexOf(colleague);
    if (index !== -1) {
      this.colleagues.splice(index, 1);
    }
  }

  public broadcast(sender: Colleague, message: string): void {
    this.colleagues.forEach((colleague) => {
      if (colleague !== sender) {
        colleague.receive(message);
      }
    });
  }
}

abstract class Colleague {
  constructor(private mediator: Mediator) {}

  public send(message: string): void {
    this.mediator.broadcast(this, message);
  }

  public abstract receive(message: string): void;
}

class ConcreteColleagueA extends Colleague {
  public receive(message: string): void {
    console.log(`ConcreteColleagueA received: ${message}`);
  }
}

class ConcreteColleagueB extends Colleague {
  public receive(message: string): void {
    console.log(`ConcreteColleagueB received: ${message}`);
  }
}

// Usage example
const mediator = new ConcreteMediator();
const colleagueA = new ConcreteColleagueA(mediator);
const colleagueB = new ConcreteColleagueB(mediator);

mediator.subscribe(colleagueA);
mediator.subscribe(colleagueB);

colleagueA.send("Hello from A!"); // Logs "ConcreteColleagueB received: Hello from A!"
colleagueB.send("Hello from B!"); // Logs "ConcreteColleagueA received: Hello from B!"

mediator.unsubscribe(colleagueA);

colleagueA.send("This message won't be received by anyone!"); // Does not log anything
colleagueB.send("Hello again from B!"); // Logs "ConcreteColleagueA received: Hello again from B!"
```

## usage 예

> 채팅방을 연상하면 된다.
>
> > 다수가 다수에게 메시지를 전달
> >
> > > mediator는 확성기 역할

```ts
// Mediator
class ChatRoom {
  users: User[];

  constructor() {
    this.users = [];
  }

  broadcast(user: User, message: string) {
    const sender = user.getName();
    console.log(`${new Date().toLocaleString()} [${sender}]: ${message}`);
  }
}

// Colleague
class User {
  name: string;
  chatroom: ChatRoom;

  constructor(name: string, chatroom: ChatRoom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message: string) {
    this.chatroom.broadcast(this, message);
  }
}

const chatroom = new ChatRoom();

const user1 = new User("SB", chatroom);
const user2 = new User("Hyuil", chatroom);

user1.send("Hi there!");
user2.send("Hey!");
```
