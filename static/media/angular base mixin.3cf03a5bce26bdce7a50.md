# angular base mixin

## LogMixin

```ts
import { OnInit } from "@angular/core";

// mixin을 구현하기 위한 타입
type Constructor<T> = new (...args: any[]) => T;

// Component에 적용할 mixin 타입
type Loggable = Constructor<{ log: (message: string) => void }>;

// mixin function 구현
export function LogMixin<T extends Loggable>(Base: T = class {} as any) {
  return class extends Base implements OnInit {
    constructor(...args: any[]) {
      super(...args);
    }
    ngOnInit(): void {
      this.log("init");
    }
  };
}
```

## ts

```ts
export default class SomePage extends LogMixin() {
  constructor() {
    super();
  }
}
```
