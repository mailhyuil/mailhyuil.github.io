# x DI reflect-metadata 사용

## install

```sh
npm i reflect-metadata
```

## service

```js
export class MyService {
  getHello() {
    return "Hello World!";
  }
}
```

## controller

```js
export class MyController {
  constructor(myService) {
    this.myService = myService;
  }

  getHello() {
    return this.myService.getHello();
  }
}
```

## di-container

```js
export class DIContainer {
  constructor() {
    this.services = {};
  }

  // 서비스 등록
  register(serviceName, serviceInstance) {
    this.services[serviceName] = serviceInstance;
  }

  // 서비스 해결 (주입)
  resolve(targetClass) {
    const dependencies = Reflect.getMetadata("design:paramtypes", targetClass) || [];
    const injections = dependencies.map(dep => this.services[dep.name]);
    return new targetClass(...injections);
  }
}
```

## main

```js
import "reflect-metadata";
import { DIContainer } from "./DI-container.js";
import { MyController } from "./controller.js";
import { MyService } from "./service.js";

function main() {
  // 메타데이터 설정 (생성자 파라미터 타입 저장) Controller에 Service를 주입
  Reflect.defineMetadata("design:paramtypes", [MyService], MyController);

  // DI 컨테이너 생성
  const container = new DIContainer();

  // 서비스 등록
  container.register("MyService", new MyService());

  // 컨트롤러 생성 및 의존성 주입
  const myController = container.resolve(MyController);

  // 메서드 호출
  console.log(myController.getHello()); // "Hello World!"
}
main();
```
