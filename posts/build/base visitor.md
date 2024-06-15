# base visitor

> visitor pattern for AST traversal

## visitor 선언

```ts
const MyVisitor = {
  // Node Type
  Identifier() {
    // 이 함수는 Identifier Node를 만날 때마다 호출된다.
    console.log("Called!");
  },
};

const MyVisitor = {
  Identifier: {
    enter() {
      // 이 함수는 Identifier Node를 만날 때마다 호출된다.
      console.log("Entered!");
    },
    exit() {
      // 이 함수는 Identifier Node를 빠져나갈 때마다 호출된다.
      console.log("Exited!");
    },
  },
};
```

## usage

```ts
path.traverse(MyVisitor);
```
