# angular react

## install

```sh
npm i react react-dom
npm i -D @types/react @types/react-dom
```

## Button.tsx

```tsx
import { useState } from "react";

// root.render() 스코프에서는 hooks를 사용할 수 없다.
// 따라서 Container로 한번 감싸준다.
export const Container = () => {
  return (
    <>
      <Button />
    </>
  );
};

export const Button = () => {
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1);
  return (
    <button className="font-bold" onClick={onClick}>
      hello world {count}
    </button>
  );
};
```

## button.component.ts

```ts
import { Component, ElementRef, OnDestroy, OnInit } from "@angular/core";
import { createRoot, Root } from "react-dom/client";
import { Container } from "./Button";
@Component({
  selector: "app-react-button",
  standalone: true,
  template: "",
})
export class ReactButtonComponent implements OnInit, OnDestroy {
  root: Root;
  constructor(private readonly ele: ElementRef) {}
  ngOnInit() {
    this.root = createRoot(this.ele.nativeElement);
    this.root.render(Container());
  }
  ngOnDestroy(): void {
    this.root.unmount();
  }
}
```
