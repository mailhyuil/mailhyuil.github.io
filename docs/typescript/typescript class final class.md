# typescript class final class

> decorator를 이용하여 final class를 만들 수 있다.
>
> > constructor를 private로 만드는 방법도 있다

## final class decorator

```ts
/**
 * Make the following class unable to be extended.
 *
 * @param target
 * @returns The new class
 */
export function final<T extends { new (...args: any[]): object }>(target: T): T {
  return class Final extends target {
    constructor(...args: any[]) {
      if (new.target !== Final) throw new Error(`Cannot extend a final class "${target.name}"`);
      super(...args);
    }
  };
}
```

## private constructor

```ts
class FinalClass {
  private constructor() {
    // 생성자 내용
  }

  static createInstance() {
    return new FinalClass();
  }

  someMethod() {
    console.log("Final class method");
  }
}
```
