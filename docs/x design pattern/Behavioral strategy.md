# strategy pattern

> 실행 중에 알고리즘(로직)을 선택할 수 있게 하는 행위 소프트웨어 디자인 패턴
>
> > 클라이언트가 상태 클래스를 직접 넣어서 상태를 변경
> >
> > > 모든 전략(상태)에 대한 인터페이스를 정의해라

## 구현1

```ts
export class AppComponent implements OnInit {
  private state = "a";
  private service?: AppService;
  constructor() {}
  ngOnInit(): void {
    this.service = new AppService(this.state === "a" ? new StrategyA() : new StrategyB());
    this.service.init();
    this.service.doSomething();
  }
}
```

## 구현2

```ts
class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): void {
    console.log("Context: Sorting data using the strategy (not sure how it'll do it)");
    const result = this.strategy.doAlgorithm(["a", "b", "c", "d", "e"]);
    console.log(result.join(","));
  }
}

interface Strategy {
  doAlgorithm(data: string[]): string[];
}

class ConcreteStrategyA implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

class ConcreteStrategyB implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

const context = new Context(new ConcreteStrategyA());
console.log("Client: Strategy is set to normal sorting.");
context.doSomeBusinessLogic();

console.log("");

console.log("Client: Strategy is set to reverse sorting.");
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();
```

## Duck

```ts
interface FlyBehavior {
  fly(): void;
}
class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I am flying");
  }
}
class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("I can not fly");
  }
}
interface QuackBehavior {
  quack(): void;
}
class Quack implements QuackBehavior {
  quack(): void {
    console.log("Quack");
  }
}
class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log("<< Silence >>");
  }
}
abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;
  abstract display(): void;
  performFly(): void {
    this.flyBehavior.fly();
  }
  performQuack(): void {
    this.quackBehavior.quack();
  }
}
class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }
  display(): void {
    console.log("I am a real Mallard duck");
  }
}
class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
  }
  display(): void {
    console.log("I am a model duck");
  }
}
const mallard = new MallardDuck();
mallard.performFly();
mallard.performQuack();

const model = new ModelDuck();
model.performFly();
model.performQuack();
```
