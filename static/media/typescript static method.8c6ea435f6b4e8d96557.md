# typescript static method

> mutation을 하지 않고 사이드이펙트가 없는 순수함수를 구현 시 사용하자
>
> > use private static methods to indicate a pure function.
> >
> > > namespace나 module로 대체 가능 (new class 생성을 막기 위해)

```ts
class Person {
  private readonly name: string;
  private readonly age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  static incrementAge(person: Person, age: number) {
    return new Person(person.name, person.age + age);
  }

  printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const person = new Person("John", 25);
const newPerson = Person.incrementAge(person, 1);
person.printInfo();
```
