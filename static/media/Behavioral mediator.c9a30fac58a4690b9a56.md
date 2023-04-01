# mediator

> 서로 상호작용하는 object들을 캡슐화함으로써 loose coupling을 유지하기 위해 사용한다.
>
> > 다수의 publisher와 다수의 subscriber가 존재
> >
> > > observer 패턴은 1개의 publisher와 다수의 subscriber가 존재

## 구조

```ts
// Mediator 클래스
class Mediator {
  constructor() {
    this.colleagues = [];
  }
  register(colleague) {
    this.colleagues.push(colleague);
  }
  send(message, colleague) {
    for (let c of this.colleagues) {
      if (c !== colleague) {
        c.receive(message);
      }
    }
  }
}

// Colleague 클래스
class Colleague {
  constructor(mediator) {
    this.mediator = mediator;
  }
  send(message) {
    this.mediator.send(message, this);
  }
  receive(message) {
    console.log(`${this.constructor.name} received: ${message}`);
  }
}

// ConcreteColleague 클래스
class ConcreteColleague1 extends Colleague {
  constructor(mediator) {
    super(mediator);
  }
}

class ConcreteColleague2 extends Colleague {
  constructor(mediator) {
    super(mediator);
  }
}

// 객체 생성
const mediator = new Mediator();
const colleague1 = new ConcreteColleague1(mediator);
const colleague2 = new ConcreteColleague2(mediator);

// Mediator에 Colleague 등록
mediator.register(colleague1);
mediator.register(colleague2);

// Colleague1이 Colleague2에게 메시지 전송
colleague1.send('Hello, colleague2!'); // "ConcreteColleague2 received: Hello, colleague2!"
```

## 사용 예

```ts
class ChatRoom {
  logMessage(user, message) {
    const sender = user.getName();
    console.log(`${new Date().toLocaleString()} [${sender}]: ${message}`);
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatroom.logMessage(this, message);
  }
}

const chatroom = new ChatRoom();

const user1 = new User('John Doe', chatroom);
const user2 = new User('Jane Doe', chatroom);

user1.send('Hi there!');
user2.send('Hey!');
```
