# Structural decorator

> 객체의 결합을 통해 기능을 동적으로 유연하게 확장시키는 것
>
> > 1. interface 생성
> >
> > 2. interface 구현체 생성 (base object)
> >
> > 3. interface를 매개변수로 받는 abstract class 생성 (decorator)
> >
> > 4. decorator를 상속하여 abstract 메소드를 구현 (매개변수로 받은 값을 변형)

```ts
interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 1;
  }

  description(): string {
    return "Simple coffee";
  }
}

abstract class CoffeeDecorator implements Coffee {
  // protected를 사용하여 상속받은 클래스에서 접근 가능하도록 함
  constructor(protected coffee: Coffee) {}

  abstract cost(): number;
  abstract description(): string;
}

class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.5;
  }

  description(): string {
    return this.coffee.description() + ", milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.2;
  }

  description(): string {
    return this.coffee.description() + ", sugar";
  }
}

class WhippedCreamDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.7;
  }

  description(): string {
    return this.coffee.description() + ", whipped cream";
  }
}

class CaramelDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.6;
  }

  description(): string {
    return this.coffee.description() + ", caramel";
  }
}

let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
coffee = new WhippedCreamDecorator(coffee);
coffee = new CaramelDecorator(coffee);

console.log(`Cost: $${coffee.cost()}`); // Outputs: Cost: $3.0
console.log(`Description: ${coffee.description()}`); // Outputs: Description: Simple coffee, milk, sugar, whipped cream, caramel
```
