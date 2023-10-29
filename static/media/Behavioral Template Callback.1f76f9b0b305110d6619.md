# template callback

> 전략 패턴의 변형으로 DI (Dependency injection) 의존성 주입에서 사용하는 특별한 전략 패턴

## template method vs template callback

> 템플릿 메소드는 추상 메소드에서 기본 뼈대를 만들고 구현체에서 나머지 메소드를 정의
>
> > 템플릿 콜백은 콜백함수를 통해서 정의

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

```ts
const template = {
  logic1: function () {
    console.log('logic1');
  },
  logic2: function () {
    console.log('logic2');
  },
  execute(str: string, cb: any) {
    this.logic1();
    cb(str);
    this.logic2();
  },
};
template.execute('hi', (str: string) => console.log(str));
```
