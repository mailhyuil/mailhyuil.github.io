# x DI

> 객체 생성과 같은 책임을 컨테이너에게 위임
>
> > 느슨한 결합
> >
> > > 테스트 용이
> > >
> > > > 전략 패턴과 DI의 차이점은, 전략 패턴은 실행 중에 동적으로 전략을 변경할 수 있지만, DI는 객체를 생성할 때 의존성을 주입하므로 실행 중에는 의존성을 변경할 수 없습니다.

```ts
// 의존성이 필요한 객체
class Service {
  doSomething() {
    console.log("Service is doing something");
  }
}

// 의존성을 주입받는 객체
class Controller {
  private service: Service;

  constructor(service: Service) {
    this.service = service;
  }

  doSomething() {
    console.log("Controller is doing something");
    this.service.doSomething();
  }
}

// 의존성 주입 (DI 컨테이너의 역할)
const service = new Service();
const controller = new Controller(service);

// 의존성 주입 후 실행
controller.doSomething();
```
