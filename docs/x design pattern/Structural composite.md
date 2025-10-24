# Structural composite

> 여러 개의 객체들로 구성된 복합 객체와 단일 객체를 클라이언트에서 구별없이 다루게 해주는 패턴
>
> > 트리 구조로 이루어진 객체들을 재귀적으로 구조화하여 표현할 수 있음
> >
> > > 다계층의 구조를 갖는다.
> > >
> > > > 부모역할을 할 수 있는 component(composite)와 자식역할만 하는 component(leaf)를 나눠서 구현해라
> > > >
> > > > 부모역할을 하는 component는 children을 배열로 갖고있고 add/remove 메소드를 가지고 있다.

## 구조

```ts
interface Component {
  operation(): void;
}

class Leaf implements Component {
  operation(): void {
    console.log("Leaf operation");
  }
}

class Composite implements Component {
  children: Component[] = [];

  add(component: Component): void {
    this.children.push(component);
  }

  remove(component: Component): void {
    const index = this.children.indexOf(component);
    if (index >= 0) {
      this.children.splice(index, 1);
    }
  }

  operation(): void {
    console.log("Composite operation");
    this.children.forEach(child => {
      child.operation();
    });
  }
}

// 예시 코드
const leaf1 = new Leaf();
const leaf2 = new Leaf();
const composite = new Composite();
composite.add(leaf1);
composite.add(leaf2);
composite.operation();
```

## usage

```ts
// Component
abstract class Device {
  abstract getPrice(): number;
  abstract getPower(): number;
}

// Leaf
class Keyboard extends Device {
  constructor(private power: number, private price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }

  getPower(): number {
    return this.power;
  }
}

// Leaf
class Body extends Device {
  constructor(private power: number, private price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }

  getPower(): number {
    return this.power;
  }
}

// Leaf
class Monitor extends Device {
  constructor(private power: number, private price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }

  getPower(): number {
    return this.power;
  }
}

// Leaf
class Mouse extends Device {
  constructor(private power: number, private price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }

  getPower(): number {
    return this.power;
  }
}

// Composite
class Computer extends Device {
  private components: Device[] = [];

  addComponent(component: Device): void {
    this.components.push(component);
  }

  removeComponent(component: Device): void {
    this.components = this.components.filter(c => c !== component);
  }

  getPrice(): number {
    return this.components.reduce((total, component) => total + component.getPrice(), 0);
  }

  getPower(): number {
    return this.components.reduce((total, component) => total + component.getPower(), 0);
  }
}

// Client code
const keyboard = new Keyboard(5, 2);
const mouse = new Mouse(2, 5);
const monitor = new Monitor(20, 30);
const body = new Body(100, 70);

const computer = new Computer();
computer.addComponent(keyboard);
computer.addComponent(mouse);
computer.addComponent(body);
computer.addComponent(monitor);

const computerPrice = computer.getPrice();
const computerPower = computer.getPower();
console.log(`Computer Price: ${computerPrice} 만원`);
console.log(`Computer Power: ${computerPower} W`);
```
