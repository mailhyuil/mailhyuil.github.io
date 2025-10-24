# Creational factory method

> Factory Method = 객체를 생성하는 메소드
>
> > Factory Method Pattern = 팩토리 메소드를 서브클래스에서 구현(오버라이딩)하는 패턴

## core

```ts
// Factory
interface AnimalFactory {
  createAnimal(): Animal; // 이 부분이 팩토리 메서드 패턴
}

// Product : 이 인터페이스를 자식 클래스에서 Cat, Dog..으로 구현하여 생성하면 팩토리 메소드 패턴이다.
interface Animal {
  doSomething(): void;
}
```

## usage

```ts
interface Logistics {
  planDelivery(): void;
  createTransport(): Transport; // 이 부분이 팩토리 메서드 패턴
}

interface Transport {
  deliver(): void;
}

class RoadLogistics implements Logistics {
  planDelivery(): void {
    console.log("Plan road delivery");
  }

  createTransport(): Transport {
    return new Truck();
  }
}

class SeaLogistics implements Logistics {
  planDelivery(): void {
    console.log("Plan sea delivery");
  }

  createTransport(): Transport {
    return new Ship();
  }
}

class Truck implements Transport {
  deliver(): void {
    console.log("Deliver by road");
  }
}

class Ship implements Transport {
  deliver(): void {
    console.log("Deliver by sea");
  }
}

const roadLogistics = new RoadLogistics();
const seaLogistics = new SeaLogistics();

roadLogistics.planDelivery();
seaLogistics.planDelivery();

const truck = roadLogistics.createTransport();
const ship = seaLogistics.createTransport();

truck.deliver();
ship.deliver();
```
