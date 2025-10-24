# Structural facade

> 일련의 저수준 인터페이스들의 메소드를 하나의 고수준 인터페이스에 묶어서 한번에 호출하는 것
>
> > 클라이언트가 여러 저수준의 인터페이스의 메소드를 일일히 호출하는게 아니라
> >
> > > 고수준의 하나의 인터페이스의 메서드를 호출하는 것
> > >
> > > > 서비스 로직에서는 퍼사드 패턴을 사용해서 최소한의 함수만 호출하도록 한다.

```ts
class PlumbingSystem {
  // low evel access to plubming system
  setPressure(v: number) {}
  turnOn() {}
  turnOff() {}
}

class ElectricalSystem {
  // low evel access to electrical system
  setVoltage(v: number) {}
  turnOn() {}
  turnOff() {}
}

class House {
  private plumbing = new PlumbingSystem();
  private electrical = new ElectricalSystem();

  public turnOnSystems() {
    this.electrical.setVoltage(120);
    this.electrical.turnOn();
    this.plumbing.setPressure(500);
    this.plumbing.turnOn();
  }

  public shutDown() {
    this.plumbing.turnOff();
    this.electrical.turnOff();
  }
}

const client = new House();
client.turnOnSystems();
client.shutDown();
```
