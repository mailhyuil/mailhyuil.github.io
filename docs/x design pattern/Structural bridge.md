# Structural bridge

> 하나의 객체의 속성을 클래스 이름으로 표현하면 그 조합이 기하급수적으로 늘어나 관리가 어려워진다. (RedCircle, BlueSquare, GreenCircle...)
>
> 속성 클래스를 Has-A 관계로 연결하는 것을 브리지 패턴이라고 한다. (Shape with color property)
>
> > 추상화(set과 get을 가진 클래스) 및
> >
> > > 구현(volumeUp, turnon같은 클래스)으​로 나눈 후
> > >
> > > > 각각 독립적으로 개발할 수 있도록 하는 구조 디자인 패턴

## 행위를 디자인

1. Abstraction; 기능 Controller
2. RefinedAbstraction; // 추가 기능 UpgradedRemoteController

## get과 set 메소드로만 구현

3. Implementor; 객체 인터페이스 Device
4. ConcreteImplementor; // 객체 구현 Tv..

## 구조

```ts
interface Device {
  // 이런 디바이스 인터페이스가 있다..
  isEnabled: boolean;
  volume: number;
  channel: number;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percent: number): void;
  getChannel(): number;
  setChannel(channel: number): void;
}

class RemoteControl {
  // 그 디바이스의 '기능'을 제어할 클래스
  protected device: Device;
  constructor(device: Device) {
    this.device = device;
  }
  togglePower() {
    if (this.device.isEnabled) {
      this.device.disable();
      console.log(`device off`);
    } else {
      this.device.enable();
      console.log(`device on`);
    }
  }
  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 10);
    console.log(`volume set to ${this.device.getVolume()}`);
  }
  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10);
    console.log(`volume set to ${this.device.getVolume()}`);
  }
  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1);
    console.log(`channel set to ${this.device.getChannel()}`);
  }
  channelUp() {
    this.device.setChannel(this.device.getChannel() + 1);
    console.log(`channel set to ${this.device.getChannel()}`);
  }
}

class AdvancedRemoteControl extends RemoteControl {
  // 기능을 확장한 클래스
  mute() {
    this.device.setVolume(0);
    console.log(`device muted`);
  }
}

class Tv implements Device {
  // 디바이스를 구현한 클래스
  isEnabled: boolean;
  volume: number;
  channel: number;
  constructor() {
    (this.isEnabled = false), (this.volume = 0);
    this.channel = 0;
  }
  enable(): void {
    this.isEnabled = true;
  }
  disable(): void {
    this.isEnabled = false;
  }
  getVolume(): number {
    return this.volume;
  }
  setVolume(volume: number): void {
    this.volume = volume;
  }
  getChannel(): number {
    return this.channel;
  }
  setChannel(channel: number): void {
    this.channel = channel;
  }
}

class Radio implements Device {
  // 디바이스를 구현한 클래스
  isEnabled: boolean;
  volume: number;
  channel: number;
  constructor() {
    (this.isEnabled = false), (this.volume = 0);
    this.channel = 0;
  }
  enable(): void {
    this.isEnabled = true;
  }
  disable(): void {
    this.isEnabled = false;
  }
  getVolume(): number {
    return this.volume;
  }
  setVolume(volume: number): void {
    this.volume = volume;
  }
  getChannel(): number {
    return this.channel;
  }
  setChannel(channel: number): void {
    this.channel = channel;
  }
}

const tv = new Tv();
const remote = new RemoteControl(tv);
remote.togglePower();

const radio = new Radio();
const advancedRemote = new AdvancedRemoteControl(radio);
```
