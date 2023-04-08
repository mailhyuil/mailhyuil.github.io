# template callback

> 전략 패턴의 변형으로 DI (Dependency injection) 의존성 주입에서 사용하는 특별한 전략 패턴

```ts
interface Strategy {
  runStrategy(): void;
}

class Context {
  run(strategy: Strategy) {
    console.log('start');
    strategy?.runStrategy();
    console.log('end');
  }
}

const context = new Context();

context.run({
  runStrategy() {
    console.log('strategy!');
  },
});
```
