# typescript method override

> 오버라이드된 메소드는 부모 클래스의 메소드와 호환되어야 하며, 기존 동작을 파괴해서는 안 됩니다.
>
> > 리스코프 치환 원칙을 준수해야합니다.
> >
> > > 메소드 오버라이드를 남용하면 코드를 이해하기 어렵게 만들 수 있습니다.
> > >
> > > > 메소드 오버라이드가 루프 내에서 빈번하게 호출되는 경우 성능 이슈가 발생할 수 있으므로 성능에 영향을 미칠 수 있는 경우에는 주의해야 합니다.
> > > >
> > > > > typescript 4.3 이상에서는 메소드 오버라이드를 할 때, `override` 키워드를 사용할 수 있습니다. (명시적으로 사용하기 위해서)

```ts
class Animal {
  say(name: string): void;
  say(name: string, age: number): void;
  say(name: string, age?: number) {
    if (age && typeof age === "number") {
      console.log(`Hello, I'm ${name}! I'm ${age} years old!`);
    } else {
      console.log(`Hello, I'm ${name}!`);
    }
  }
}

class Cat extends Animal {
  say(name: string): void;
  say(name: string, age: number): void;
  say(name: string, age?: number): void {
    console.log("Meow! Meow!");
    if (age && typeof age === "number") {
      super.say(name, age);
    } else {
      super.say(name);
    }
    console.log("Bye! Bye!");
  }
}

const cat = new Cat();

cat.say("mail");
cat.say("hyuil", 4);
```
