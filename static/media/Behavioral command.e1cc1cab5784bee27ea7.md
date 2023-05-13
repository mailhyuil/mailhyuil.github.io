# command

> 실행될 기능을 캡슐화함으로써 주어진 여러 기능을 실행할 수 있는 재사용성이 높은 클래스를 설계하는 패턴
>
> > 즉, 이벤트가 발생했을 때 실행될 기능이 다양하면서도 변경이 필요한 경우에 이벤트를 발생시키는 클래스를 변경하지 않고 재사용하고자 할 때 유용하다.
> >
> > > command.execute(), invoker.executeCommand(command)
> > >
> > > > or invoker.setCommand(command) -> invoker.executeCommand()

## 구조

```ts
// receiver가 할 수 있는 여러가지 명령(command)를 각각의 클래스로 구현 commandA, commandB....
const commandA = {
  receiver: null,
  setReceiver: (receiver) => {
    commandA.receiver = receiver;
  },
  execute: () => {
    commandA.receiver.doAction();
  },
  //   undo: () => { 이런게 될지도..
  //     commandA.receiver.undoAction();
  //   },
};

// command를 실행시키는 invoker 클래스
const invoker = {
  commands: [],
  setCommand: (command) => {
    invoker.commands.push(command);
  },
  invoker_did_something: () => {
    // 명령들을 가지고 메소드를 구현
    invoker.commands.pop();
  },
  invoker_did_something_else: () => {
    invoker.commands.forEach((c) => {
      c.execute();
    });
  },
};

// 명령을 받게될 리시버
const receiver = {
  value: null,
  doAction: () => {
    console.log('do Action');
  },
};

commandA.setReceiver(receiver);
invoker.setCommand(commandA);
invoker.setCommand(commandA);
invoker.invoker_did_something();
invoker.invoker_did_something_else();
```

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

manager.execute(new PlaceOrderCommand('Pad Thai', '1234'));
manager.execute(new TrackOrderCommand('1234'));
manager.execute(new CancelOrderCommand('1234'));
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

console.log(calculator.execute('add', 1, 2));
console.log(calculator.execute('subtract', 5, 2));
console.log(calculator.execute('multiply', 11, 2));
console.log(calculator.execute('divide', 10, 2));
console.log(calculator.execute('square root', 20));
```

## 간단한 구현 2

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
