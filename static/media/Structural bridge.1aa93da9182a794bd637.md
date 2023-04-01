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
