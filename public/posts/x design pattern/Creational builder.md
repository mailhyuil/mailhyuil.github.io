# builder

> Creational Design Pattern

```ts
class HotDog {
  constructor(public bread: string, public ketchup?: boolean, public mustard?: boolean, public kraut?: boolean) {}

  addKetchup() {
    this.ketchup = true;
    return this; // this를 리턴하여 체이닝 할 수 있도록
  }
  addMustard() {
    this.mustard = true;
    return this;
  }
  addKraut() {
    this.kraut = true;
    return this;
  }
}

const myLunch = new HotDog("gluten free").addKetchup().addMustard().addKraut();
```
