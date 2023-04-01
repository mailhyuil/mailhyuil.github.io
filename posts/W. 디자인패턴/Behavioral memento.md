# memento

> 객체의 상태 정보를 가지는 클래스를 따로 생성하여, 객체의 상태를 저장하거나 이전 상태로 복원할 수 있게 해주는 패턴
>
> > 원하는 시점의 상태 복원이 가능하다

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

const mike = new Person('Mike Foley', '1112 Main', 'Dallas', 'TX');
const john = new Person('John Wang', '48th Street', 'San Jose', 'CA');
const caretaker = new CareTaker();

// save state // 상태를 저장

caretaker.add(1, mike.hydrate());
caretaker.add(2, john.hydrate());

// mess up their names // 상태 바꾸기

mike.name = 'King Kong';
john.name = 'Superman';

// restore original state // 상태 복원

mike.dehydrate(caretaker.get(1));
john.dehydrate(caretaker.get(2));

console.log(mike.name);
console.log(john.name);
```
