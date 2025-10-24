# Creational builder

> Builder만 쓰는 경우 / Builder와 Director를 함께 쓰는 경우가 있다.
>
> > 복잡한 객체 생성시 유용
> >
> > 가독성 향상
> >
> > > 빌더 패턴을 사용하면 불변 객체(immutable object)를 쉽게 생성할 수 있습니다.
> > >
> > > 빌더 패턴은 객체의 내부 상태를 설정한 후, 한 번에 객체를 생성하기 때문에 객체가 생성된 후에는 변경할 수 없는 상태로 만들기 쉽습니다.

```ts
interface Builder {
  setPartA(part: string): Builder;
  setPartB(part: string): Builder;
  setPartC(part: string): Builder;
}

class Product {
  public partA: string;
  public partB: string;
  public partC: string;
}

class ConcreteBuilder implements Builder {
  private product: Product;

  constructor() {
    this.reset(); // ConcreteBuilder가 init될 때 Product 인스턴스를 생성
  }

  public reset(): void {
    this.product = new Product();
  }

  public setPartA(part: string) {
    this.product.partA = part;
    return this;
  }

  public setPartB(part: string) {
    this.product.partB = part;
    return this;
  }

  public setPartC(part: string) {
    this.product.partC = part;
    return this;
  }

  public build(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildABProduct({ partA, partB }): void {
    this.builder.setPartA(partA).setPartB(partB);
  }

  public buildFullProduct({ partA, partB, partC }): void {
    this.builder.setPartA(partA).setPartB(partB).setPartC(partC);
  }
}

// only builder
const builder = new ConcreteBuilder();
const productA = builder.setPartA("A").setPartB("B").setPartC("C").build();
console.log("ProductA:", productA);

// with director
const director = new Director();
director.setBuilder(builder);

director.buildABProduct({
  partA: "A",
  partB: "B",
});
const productB = builder.build();
console.log("ProductB:", productB);

director.buildFullProduct({
  partA: "A",
  partB: "B",
  partC: "C",
});
const productC = builder.build();
console.log("ProductC:", productC);
```
