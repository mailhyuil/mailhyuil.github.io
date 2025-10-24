# Creational abstract factory

> 관련된 객체집합(Product Family)을 일관성 있게 묶어서 한번에 생성하는 인터페이스를 제공하여 구현

```ts
interface Factory {
  createKeyboard(): Keyboard;
  createComputer(): Computer;
  createMouse(): Mouse;
  createProduct(): ComputerSet;
}
interface Keyboard {
  type(): string;
}
interface Computer {
  compute(): string;
}
interface Mouse {
  click(): string;
}
interface ComputerSet {
  keyboard: Keyboard;
  computer: Computer;
  mouse: Mouse;
}

abstract class AbstractFactory implements Factory {
  abstract createKeyboard(): Keyboard;
  abstract createComputer(): Computer;
  abstract createMouse(): Mouse;
  createProduct() {
    const keyboard = this.createKeyboard();
    const computer = this.createComputer();
    const mouse = this.createMouse();
    return { keyboard, computer, mouse };
  }
}

class AppleKeyboard implements Keyboard {
  type() {
    return "Apple Keyboard";
  }
}
class AppleComputer implements Computer {
  compute() {
    return "Apple Computer";
  }
}
class AppleMouse implements Mouse {
  click() {
    return "Apple Mouse";
  }
}

class WindowsKeyboard implements Keyboard {
  type() {
    return "Windows Keyboard";
  }
}
class WindowsComputer implements Computer {
  compute() {
    return "Windows Computer";
  }
}
class WindowsMouse implements Mouse {
  click() {
    return "Windows Mouse";
  }
}

class AppleFactory extends AbstractFactory {
  createKeyboard() {
    return new AppleKeyboard();
  }
  createComputer() {
    return new AppleComputer();
  }
  createMouse() {
    return new AppleMouse();
  }
}

class WindowsFactory extends AbstractFactory {
  createKeyboard() {
    return new WindowsKeyboard();
  }
  createComputer() {
    return new WindowsComputer();
  }
  createMouse() {
    return new WindowsMouse();
  }
}

const appleFactory = new AppleFactory();
const windowsFactory = new WindowsFactory();

const appleSet = appleFactory.createProduct();
const windowsSet = windowsFactory.createProduct();

console.log(appleSet);
console.log(windowsSet);
```
