# state

> 상태 패턴은 객체의 내부 상태에 따라 행위를 변경해주는 패턴입니다.
>
> > 클라이언트의 어떤 행위(메소드)에 따라 내부적으로 상태를 변경

```ts
interface State {
  think(): string;
}

class HappyState implements State {
  think() {
    return 'I am happy 🙂';
  }
}

class SadState implements State {
  think() {
    return 'I am sad 🙁';
  }
}

class Human {
  state: State;

  constructor() {
    this.state = new HappyState(); // 기본 상태
  }

  changeState(state) {
    this.state = state;
  }

  think() {
    return this.state.think();
  }
}

const human = new Human();
console.log(human.think());
human.changeState(new SadState());
console.log(human.think());
```
