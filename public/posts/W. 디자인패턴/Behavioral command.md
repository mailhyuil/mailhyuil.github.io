# command

> 실행될 기능을 캡슐화함으로써 주어진 여러 기능을 실행할 수 있는 재사용성이 높은 클래스를 설계하는 패턴
>
> > 즉, 이벤트가 발생했을 때 실행될 기능이 다양하면서도 변경이 필요한 경우에 이벤트를 발생시키는 클래스를 변경하지 않고 재사용하고자 할 때 유용하다.

## 구조

```ts
// Command 인터페이스
class Command {
  execute() {}
}

// Receiver 클래스
class Receiver {
  action1() {
    console.log('Receiver executes action1');
  }
  action2() {
    console.log('Receiver executes action2');
  }
}

// ConcreteCommand 클래스 1
class ConcreteCommand1 extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }
  execute() {
    this.receiver.action1();
  }
}

// ConcreteCommand 클래스 2
class ConcreteCommand2 extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }
  execute() {
    this.receiver.action2();
  }
}

// Invoker 클래스
class Invoker {
  constructor(command) {
    this.command = command;
  }
  setCommand(command) {
    this.command = command;
  }
  executeCommand() {
    this.command.execute();
  }
}

// 객체 생성
const receiver = new Receiver();
const command1 = new ConcreteCommand1(receiver);
const command2 = new ConcreteCommand2(receiver);
const invoker = new Invoker(command1);

// Command 패턴 사용
invoker.executeCommand(); // "Receiver executes action1"
invoker.setCommand(command2);
invoker.executeCommand(); // "Receiver executes action2"
```

## 사용 예

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

console.log(calculator.execute('add', 1, 2));
console.log(calculator.execute('subtract', 5, 2));
console.log(calculator.execute('multiply', 11, 2));
console.log(calculator.execute('divide', 10, 2));
console.log(calculator.execute('square root', 20));
```

```ts
class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    return command.execute(this.orders, ...args);
  }
}

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

manager.execute(new PlaceOrderCommand('Pad Thai', '1234'));
manager.execute(new TrackOrderCommand('1234'));
manager.execute(new CancelOrderCommand('1234'));
```

```ts
// The object that knows how to execute the command
const invoker = {
  add: (x, y) => {
    return x + y;
  },
  subtract: (x, y) => {
    return x - y;
  },
};

// the object to be used as abstraction layer when
// we execute commands; it represents a interface
// to the caller object
let manager = {
  execute: (name, args) => {
    if (name in invoker) {
      return invoker[name].apply(invoker, [].slice.call(arguments, 1));
    }
    return false;
  },
};
// prints 8
console.log(manager.execute('add', 3, 5));
// prints 2
console.log(manager.execute('subtract', 5, 3));
```
