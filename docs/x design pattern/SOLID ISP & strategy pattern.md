# SOLID ISP & strategy pattern

- ISP (Interface Segregation Principle)
- Strategy Pattern을 사용하여 사용하지 않는 메소드를 가지고 있지 않도록 디자인

```ts
interface IMP3Function {
  mp3(): void;
}

interface ICallFunction {
  call(): void;
}

class NewMp3Function implements IMP3Function {
  mp3(): void {
    console.log("good sound");
  }
}

class NewCallFunction implements ICallFunction {
  call(): void {
    console.log("very good call");
  }
}

abstract class AbNewSmartPhone implements IMP3Function, ICallFunction {
  mp3Function: IMP3Function = new NewMp3Function();
  callFunction: ICallFunction = new NewCallFunction();
  call(): void {
    this.callFunction.call();
  }
  mp3(): void {
    this.mp3Function.mp3();
  }
}

class NewSmartPhone extends AbNewSmartPhone {}

const newSmartPhone = new NewSmartPhone();
newSmartPhone.mp3();
newSmartPhone.call();
```
