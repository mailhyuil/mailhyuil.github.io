# DI

> 객체 생성과 같은 책임을 컨테이너에게 위임
>
> > 느슨한 결합
> >
> > > 테스트 용이
> > >
> > > > 전략 패턴과 DI의 차이점은, 전략 패턴은 실행 중에 동적으로 전략을 변경할 수 있지만, DI는 객체를 생성할 때 의존성을 주입하므로 실행 중에는 의존성을 변경할 수 없습니다.

```ts
// 의존성이 필요한 객체
class Dependency {
  doSomething() {
    console.log('Dependency is doing something');
  }
}

// 의존성을 주입받는 객체
class Dependent {
  private dependency: Dependency;

  constructor(dependency: Dependency) {
    this.dependency = dependency;
  }

  doSomething() {
    console.log('Dependent is doing something');
    this.dependency.doSomething();
  }
}

// 의존성 주입
const dependency = new Dependency();
const dependent = new Dependent(dependency);

// 의존성 주입 후 실행
dependent.doSomething();
```
