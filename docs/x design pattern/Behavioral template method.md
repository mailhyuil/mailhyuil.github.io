# Behavioral template method

> 템플릿 메소드 : 공통된 역할을 수행하는 로직이 담긴 메소드
>
> > 추상 메소드 : 반드시 구현해야 하는 추상 메소드
> >
> > > 훅 메소드 : 그대로 사용해도 되고 오버라이딩 해도 되는 메소드

```ts
abstract class AbstractClass {
  // 템플릿 메소드
  templateMethod() {
    this.doOperation1();
    this.hookMethod1();
    this.doOperation2();
    this.hookMethod2();
  }

  // subclass에서 구현할 추상 메소드1
  abstract doOperation1(): void;

  // subclass에서 구현할 추상 메소드2
  abstract doOperation2(): void;

  // 훅 메소드1 구현해도되고 안해도 됨
  hookMethod1() {}

  // 훅 메소드1 구현해도되고 안해도 됨
  hookMethod2() {}
}

class ConcreteClass extends AbstractClass {
  // 추상 메소드 구현
  doOperation1() {
    console.log("ConcreteClass is doing operation 1.");
  }

  doOperation2() {
    console.log("ConcreteClass is doing operation 2.");
  }
}

// Usage example
const concreteClass = new ConcreteClass();
concreteClass.templateMethod();
```
