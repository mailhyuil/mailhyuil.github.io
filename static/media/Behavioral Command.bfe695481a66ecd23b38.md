# command

> 실행될 기능을 캡슐화함으로써 주어진 여러 기능을 실행할 수 있는 재사용성이 높은 클래스를 설계하는 패턴
>
> > 즉, 이벤트가 발생했을 때 실행될 기능이 다양하면서도 변경이 필요한 경우에 이벤트를 발생시키는 클래스를 변경하지 않고 재사용하고자 할 때 유용하다.
> >
> > > command = DTO, receiver = usecase = service, invoker = controller

## mvc, usecase로 비유

```js
// Controller (Invoker)
const controller = {
  // add handler
  add: (a, b) => {
    return service.execute(dto.create("add", [a, b]));
  },
  // subtract handler
  subtract: (a, b) => {
    return service.execute(dto.create("subtract", [a, b]));
  },
};

// Service / Usecase  (Receiver)
const service = {
  execute: function (command) {
    const { name, args } = command;
    if (!(name in this)) return "존재하지 않는 메서드입니다.";
    const [x, y] = args;
    return this[name](x, y);
  },
  // 비즈니스 로직을 구현하는 메서드들
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
};

// DTO (Command)
const dto = {
  create: (name, args) => {
    return { name, args };
  },
};

const result = controller.subtract(3, 1);
console.log(result);
```

## 구조

```ts
// invoker & receiver
class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    // 명령 객체가 Manager 객체의 order를 변경
    return command.execute(this.orders, ...args);
  }
}

// command
class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function PlaceOrderCommand(order, id) {
  return new Command((orders) => {
    orders.push(id);
    console.log(`You have successfully ordered ${order} (${id})`);
  });
}

function CancelOrderCommand(id) {
  return new Command((orders) => {
    orders = orders.filter((order) => order.id !== id);
    console.log(`You have canceled your order ${id}`);
  });
}

function TrackOrderCommand(id) {
  return new Command(() => console.log(`Your order ${id} will arrive in 20 minutes.`));
}

const manager = new OrderManager();

manager.execute(new PlaceOrderCommand("Pad Thai", "1234"));
manager.execute(new TrackOrderCommand("1234"));
manager.execute(new CancelOrderCommand("1234"));
```

## 간단한 구현 1

```ts
const calculationMethods = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
};

const calculator = {
  execute: function (method, num1, num2) {
    if (!(method in calculationMethods)) return null;

    return calculationMethods[method](num1, num2);
  },
};

console.log(calculator.execute("add", 1, 2));
console.log(calculator.execute("subtract", 5, 2));
console.log(calculator.execute("multiply", 11, 2));
console.log(calculator.execute("divide", 10, 2));
console.log(calculator.execute("square root", 20));
```
