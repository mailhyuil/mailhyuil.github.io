# Creational factory method example GUI

> 서브클래스에서 객체 생성 메소드를 오버라이드하여 객체를 생성하는 패턴

## usage 1

```ts
interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }
  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

interface Button {
  paint();
}

class WinButton implements Button {
  // 버튼을 윈도우 스타일로 렌더링하세요.
  paint() {}
}

class MacButton implements Button {
  // 버튼을 맥 스타일로 렌더링하세요.
  paint() {}
}

interface Checkbox {
  paint();
}

class WinCheckbox implements Checkbox {
  // 윈도우 스타일의 확인란을 렌더링하세요.
  paint() {}
}

class MacCheckbox implements Checkbox {
  // 맥 스타일의 확인란을 렌더링하세요.
  paint() {}
}

class Application {
  private factory: GUIFactory;
  private button: Button;
  constructor(factory: GUIFactory) {
    this.factory = factory;
  }

  createUI() {
    this.button = this.factory.createButton();
  }

  paint() {
    this.button.paint();
  }
}

/* main */

const config = { OS: "Mac" };

let factory;

if (config.OS == "Windows") {
  factory = new WinFactory();
} else if (config.OS == "Mac") {
  factory = new MacFactory();
} else {
  console.error("Error! Unknown operating system.");
}

const app: Application = new Application(factory);
```

## result

```ts
// Without Factory
class IOSButton {}
class AndroidButton {}
const button1 = os === "ios" ? new IOSButton() : new AndroidButton();
const button2 = os === "ios" ? new IOSButton() : new AndroidButton();
class ButtonFactory {
  createButton(os: string): IOSButton | AndroidButton {
    if (os === "ios") {
      return new IOSButton();
    } else {
      return new AndroidButton();
    }
  }
}

// With Factory
const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
const btn2 = factory.createButton(os);
```
