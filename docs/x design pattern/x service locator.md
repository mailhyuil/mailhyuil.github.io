# x service locator

> 결합도가 높고
>
> > 테스트에 용이하지 않아 잘 사용되지 않는다.
> >
> > > 안티 패턴

```ts
// 서비스 인터페이스
interface IService {
  getName(): string;
}

// 서비스 인터페이스를 구현하는 서비스
class ServiceA implements IService {
  getName(): string {
    return 'ServiceA';
  }
}

// 서비스 인터페이스를 구현하는 또 다른 서비스
class ServiceB implements IService {
  getName(): string {
    return 'ServiceB';
  }
}

// 서비스를 관리하는 Service Locator 클래스
class ServiceLocator {
  private services: { [key: string]: IService } = {};

  register(name: string, service: IService) {
    this.services[name] = service;
  }

  getService(name: string): IService {
    const service = this.services[name];
    if (!service) {
      throw new Error(`Service not found: ${name}`);
    }
    return service;
  }
}

// Service Locator 인스턴스 생성
const locator = new ServiceLocator();

// 서비스 등록
locator.register('serviceA', new ServiceA());
locator.register('serviceB', new ServiceB());

// 서비스 호출
const serviceA = locator.getService('serviceA');
const serviceB = locator.getService('serviceB');
console.log(serviceA.getName()); // 출력: ServiceA
console.log(serviceB.getName()); // 출력: ServiceB
```
