# method chaining

```ts
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  setName(name: string): Person {
    this.name = name;
    return this;
  }

  setAge(age: number): Person {
    this.age = age;
    return this;
  }

  toString(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

const person = new Person("John", 30);
console.log(person.setName("Jane").setAge(25).toString());
```
