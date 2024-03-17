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
