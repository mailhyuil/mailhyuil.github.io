# state

> 상태 패턴은 객체의 내부 상태에 따라 행위를 변경해주는 패턴입니다.
>
> > 클라이언트의 어떤 행위(메소드)에 따라 내부적으로 상태를 변경
> >
> > > 모든 전략(상태)에 대한 인터페이스를 정의해라

## usage 예

```ts
interface State {
  think(): string;
}

class HappyState implements State {
  think() {
    return "I am happy 🙂";
  }
  valueOf() {
    return "Happy";
  }
}

class SadState implements State {
  think() {
    return "I am sad 🙁";
  }
  valueOf() {
    return "Sad";
  }
}

class Human {
  private state: State;
  private money: number;

  constructor(money: number) {
    this.money = money;
    if (this.money < 5000) {
      this.state = new SadState();
    } else {
      this.state = new HappyState();
    }
  }

  private checkMoney() {
    if (this.money < 5000) {
      this.state = new SadState();
    } else {
      this.state = new HappyState();
    }
  }

  lostMoney() {
    this.money -= 1000;
    this.checkMoney();
    console.log(`lost money 💵\ncurrent money : ${this.money}\ncurrent state : ${this.state.valueOf()}`);
  }

  earnMoney() {
    this.money += 1000;
    this.checkMoney();
    console.log(`earn money ❤️\ncurrent money : ${this.money}\ncurrent state : ${this.state.valueOf()}`);
  }

  think() {
    return this.state.think();
  }
}

const human = new Human(7000);
console.log(human.think()); // I am happy 🙂
human.lostMoney();
human.lostMoney();
human.earnMoney();
human.lostMoney();
human.lostMoney();
human.lostMoney();
console.log(human.think()); // I am sad 🙁
```
