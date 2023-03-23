# typescript 생성자

```
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

```
class Parent {

  constructor(private arr: string[];) {
    this.arr = ["a"];
  }

  getSome() {
    return this.arr;
  }
}
```
