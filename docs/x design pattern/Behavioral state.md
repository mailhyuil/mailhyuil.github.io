# state pattern

> 상태 패턴은 객체의 **내부 상태**에 따라 행위를 변경해주는 패턴입니다.
>
> > 클라이언트의 어떤 행위(메소드)에 따라 내부적으로 상태를 변경
> >
> > > 모든 전략(상태)에 대한 인터페이스를 정의해라
> > >
> > > > state pattern은 state machine보다 decouple된 방식으로 상태를 관리할 수 있습니다.
> > > >
> > > > > e.g. 문서가 읽음 상태일 때는 오른쪽 클릭을 했을 때 읽음상태용 콘텍스트메뉴를 띄우고 안읽음 상태면 안읽음상태용 콘텍스트 창을 띄우기

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

```ts
// 상태 인터페이스
class State {
  handle(context: Order) {
    throw new Error("handle() method must be implemented");
  }
}

// 구체적인 상태들
class PendingState extends State {
  handle(context: Order) {
    console.log("Pending: Transition to Approved");
    context.setState(new ApprovedState());
  }
}

class ApprovedState extends State {
  handle(context: Order) {
    console.log("Approved: Transition to Paid");
    context.setState(new PaidState());
  }
}

class PaidState extends State {
  handle(context: Order) {
    console.log("Paid: Transition to Shipped");
    context.setState(new ShippedState());
  }
}

class ShippedState extends State {
  handle(context: Order) {
    console.log("Shipped: Final state");
  }
}

// Context 클래스
class Order {
  state: State;
  constructor() {
    this.state = new PendingState();
  }

  setState(state: State) {
    this.state = state;
  }

  handle() {
    this.state.handle(this);
  }
}

// 사용 예제
const order = new Order();
order.handle(); // Pending: Transition to Approved
order.handle(); // Approved: Transition to Paid
order.handle(); // Paid: Transition to Shipped
order.handle(); // Shipped: Final state
```
