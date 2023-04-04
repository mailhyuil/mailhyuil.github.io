# template method

```ts
abstract class AbstractClass {
  // Template method
  templateMethod() {
    this.doOperation1();
    this.doOperation2();
  }

  // Abstract methods to be implemented by subclasses
  doOperation1() {
    throw new Error('Abstract method not implemented');
  }

  doOperation2() {
    throw new Error('Abstract method not implemented');
  }
}

class ConcreteClass extends AbstractClass {
  // Implementation of abstract methods
  doOperation1() {
    console.log('ConcreteClass is doing operation 1.');
  }

  doOperation2() {
    console.log('ConcreteClass is doing operation 2.');
  }
}

// Usage example
const concreteClass = new ConcreteClass();
concreteClass.templateMethod();
```
