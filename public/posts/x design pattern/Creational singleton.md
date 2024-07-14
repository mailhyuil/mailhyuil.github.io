# singleton

> Creational Design Pattern
>
> > 생성자를 private으로 설정하여 new 연산자로 생성을 못하도록 한다.

```ts
class Settings {
  static instance: Settings;
  public readonly mode = "dark";

  // prevent new with private constructor
  // 생성자를 private으로 설정하여 new 연산자로 생성을 못하도록 한다.
  private constructor() {}

  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }

    return Settings.instance;
  }
}

const settings = new Settings(); // throws error
const settings = Settings.getInstance();
```
