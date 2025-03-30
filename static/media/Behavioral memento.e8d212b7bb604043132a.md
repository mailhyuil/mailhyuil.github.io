# memento

> 객체의 상태 정보를 가지는 클래스를 따로 생성하여, 객체의 상태를 저장하거나 이전 상태로 복원할 수 있게 해주는 패턴
>
> > 원하는 시점의 상태 복원이 가능하다

## 구조

```ts
// Originator 클래스
class Originator {
  constructor(state) {
    this.state = state;
  }
  createMemento() {
    return new Memento(this.state);
  }
  restoreMemento(memento) {
    this.state = memento.getState();
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
  }
}

// Memento 클래스
class Memento {
  constructor(state) {
    this.state = state;
  }
  getState() {
    return this.state;
  }
}

// Caretaker 클래스
class Caretaker {
  constructor() {
    this.mementos = [];
  }
  addMemento(memento) {
    this.mementos.push(memento);
  }
  getMemento(index) {
    return this.mementos[index];
  }
}

// 객체 생성
const originator = new Originator("Initial state");
const caretaker = new Caretaker();

// 상태 변경 후 Memento 저장
originator.setState("Changed state");
caretaker.addMemento(originator.createMemento());

// 상태 변경 후 Memento 저장
originator.setState("New state");
caretaker.addMemento(originator.createMemento());

// 이전 상태로 복원
originator.restoreMemento(caretaker.getMemento(0));
console.log(originator.getState()); // "Changed state"
```

## usage 예

```ts
class Person {
  constructor(name, street, city, state) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
  }

  hydrate() {
    const memento = JSON.stringify(this);
    return memento;
  }

  dehydrate(memento) {
    const m = JSON.parse(memento);
    this.name = m.name;
    this.street = m.street;
    this.city = m.city;
    this.state = m.state;
  }
}

class CareTaker {
  mementos = {};

  add(key, memento) {
    this.mementos[key] = memento;
  }

  get(key) {
    return this.mementos[key];
  }
}

const mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
const john = new Person("John Wang", "48th Street", "San Jose", "CA");
const caretaker = new CareTaker();

// save state // 상태를 저장

caretaker.add(1, mike.hydrate());
caretaker.add(2, john.hydrate());

// mess up their names // 상태 바꾸기

mike.name = "King Kong";
john.name = "Superman";

// restore original state // 상태 복원

mike.dehydrate(caretaker.get(1));
john.dehydrate(caretaker.get(2));

console.log(mike.name);
console.log(john.name);
```
