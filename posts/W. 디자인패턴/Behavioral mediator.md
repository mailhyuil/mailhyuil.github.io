# mediator

> 서로 상호작용하는 object들을 캡슐화함으로써 loose coupling을 유지하기 위해 사용한다.
>
> > 다수의 publisher와 다수의 subscriber가 존재
> >
> > > observer 패턴은 1개의 publisher와 다수의 subscriber가 존재

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
