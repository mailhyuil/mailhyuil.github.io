# bridge

> 큰 클래스 또는 밀접하게 관련된 클래스들의 집합을 두 개의 개별 계층구조​(추상화 및 구현)​로 나눈 후 각각 독립적으로 개발할 수 있도록 하는 구조 디자인 패턴

```ts
// input devices

const Gestures = function (output) {
  this.output = output;

  this.tap = function () {
    this.output.click();
  };
  this.swipe = function () {
    this.output.move();
  };
  this.pan = function () {
    this.output.drag();
  };
  this.pinch = function () {
    this.output.zoom();
  };
};

const Mouse = function (output) {
  this.output = output;

  this.click = function () {
    this.output.click();
  };
  this.move = function () {
    this.output.move();
  };
  this.down = function () {
    this.output.drag();
  };
  this.wheel = function () {
    this.output.zoom();
  };
};

// output devices

const Screen = function () {
  this.click = function () {
    console.log('Screen select');
  };
  this.move = function () {
    console.log('Screen move');
  };
  this.drag = function () {
    console.log('Screen drag');
  };
  this.zoom = function () {
    console.log('Screen zoom in');
  };
};

const Audio = function () {
  this.click = function () {
    console.log('Sound oink');
  };
  this.move = function () {
    console.log('Sound waves');
  };
  this.drag = function () {
    console.log('Sound screetch');
  };
  this.zoom = function () {
    console.log('Sound volume up');
  };
};

function run() {
  const screen = new Screen();
  const audio = new Audio();

  const hand = new Gestures(screen);
  const mouse = new Mouse(audio);

  hand.tap();
  hand.swipe();
  hand.pinch();

  mouse.click();
  mouse.move();
  mouse.wheel();
}
```

```ts
// '추상화'는 두 클래스 계층구조의 '제어' 부분에 대한 인터페이스를 정의하며,
// 이것은 '구현' 계층구조의 객체에 대한 참조를 유지하고 모든 실제 작업을 이
// 객체에 위임합니다.
class RemoteControl {
  protected device: Device;
  constructor(device: Device) {
    this.device = device;
  }
  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }
  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 10);
  }
  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10);
  }
  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1);
  }
  channelUp() {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}

// 이제 추상화 계층구조로부터 클래스들을 장치 클래스들과 독립적으로 확장할 수
// 있습니다.
class AdvancedRemoteControl extends RemoteControl {
  mute() {
    this.device.setVolume(0);
  }
}

// '구현' 인터페이스는 모든 구상 구현 클래스들에 공통적인 메서드를 선언하며, 이는
// 추상화의 인터페이스와 일치할 필요가 없습니다. 실제로 두 인터페이스는 완전히 다를
// 수 있습니다. 일반적으로 구현 인터페이스는 원시​(primitive) 작업들만 제공하는
// 반면 추상화는 이러한 원시 작업들을 기반으로 더 상위 수준의 작업들을 정의합니다.
interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percent: number): void;
  getChannel(): number;
  setChannel(channel: number): void;
}

// 모든 장치는 같은 인터페이스를 따릅니다.
class Tv implements Device {
  isEnabled(): boolean {
    throw new Error('Method not implemented.');
  }
  enable(): void {
    throw new Error('Method not implemented.');
  }
  disable(): void {
    throw new Error('Method not implemented.');
  }
  getVolume(): number {
    throw new Error('Method not implemented.');
  }
  setVolume(percent: number): void {
    throw new Error('Method not implemented.');
  }
  getChannel(): number {
    throw new Error('Method not implemented.');
  }
  setChannel(channel: number): void {
    throw new Error('Method not implemented.');
  }
}

class Radio implements Device {
  isEnabled(): boolean {
    throw new Error('Method not implemented.');
  }
  enable(): void {
    throw new Error('Method not implemented.');
  }
  disable(): void {
    throw new Error('Method not implemented.');
  }
  getVolume(): number {
    throw new Error('Method not implemented.');
  }
  setVolume(percent: number): void {
    throw new Error('Method not implemented.');
  }
  getChannel(): number {
    throw new Error('Method not implemented.');
  }
  setChannel(channel: number): void {
    throw new Error('Method not implemented.');
  }
}

// 클라이언트 코드 어딘가에…
const tv = new Tv();
const remote = new RemoteControl(tv);
remote.togglePower();

const radio = new Radio();
const advancedRemote = new AdvancedRemoteControl(radio);
```
