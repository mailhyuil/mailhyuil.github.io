# typescript mixin

## 구현1

```js
type Constructor<Type = {}> = new (...args: any[]) => Type;

type HasTheSubject = Constructor<{ subject: string }>;

function CanDoSomething<BaseType extends HasTheSubject>(Base: BaseType) {
  return class extends Base {
    doSomething() {
      console.log(`I can do ${this.subject}`);
    }
  };
}

class Person {
  subject: string;
  constructor(subject: string) {
    this.subject = subject;
  }
}

const PersonWithCanDoSomething = CanDoSomething(Person);

const person = new PersonWithCanDoSomething("math");

person.doSomething(); // I can do math
```

## 구현2

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

const dogFunctionality = {
  bark: () => console.log("Woof!"),
  wagTail: () => console.log("Wagging my tail!"),
  play: () => console.log("Playing!"),
};

Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("Daisy");

pet1.name; // Daisy
pet1.bark(); // Woof!
pet1.play(); // Playing!
```
