# typescript 생성자

```ts
class Parent {
  private arr: string[];

  constructor() {
    this.arr = ["a"];
  }

  getSome() {
    return this.arr;
  }
}
```

or

```ts
class Parent {

  constructor(private arr: string[];) {
    this.arr = ["a"];
  }

  getSome() {
    return this.arr;
  }
}
```
