# pub-sub

> 옵저버 패턴과 유사하다
>
> > 옵저버 패턴과 차이점은 중간에 Message Broker 또는 Event Bus(Event Channel)가 존재한다는 것
> >
> > > 옵저버 패턴보다 결합도가 더 낮다

```ts
class EventBus {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      const index = this.events[eventName].indexOf(callback);
      if (index > -1) {
        this.events[eventName].splice(index, 1);
      }
    }
  }

  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        callback(data);
      });
    }
  }
}

class Publisher {
  constructor() {
    this.eventBus = new EventBus();
  }

  subscribe(eventName, callback) {
    this.eventBus.on(eventName, callback);
  }

  unsubscribe(eventName, callback) {
    this.eventBus.off(eventName, callback);
  }

  notify(eventName, data) {
    this.eventBus.emit(eventName, data);
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }

  update(event) {
    console.log(`${this.name} received event: ${event}`);
  }
}

// Usage
const publisher = new Publisher();

const subscriber1 = new Subscriber('Subscriber 1');
const subscriber2 = new Subscriber('Subscriber 2');

subscriber1Callback = subscriber1.update.bind(subscriber1); // 변수에 넣어줘야 레퍼런스값이 유지 됨
subscriber2Callback = subscriber1.update.bind(subscriber2);

publisher.subscribe('event1', subscriber1Callback);
publisher.subscribe('event1', subscriber2Callback);

publisher.notify('event1', 'Hello, world!');

publisher.unsubscribe('event1', subscriber2Callback);

publisher.notify('event1', 'Hello again!');
```

## publisher subscriber 객체 없이 구현

```ts
// Event bus 생성
const EventBus = {
  events: {},

  // 이벤트 구독 함수
  subscribe(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  },

  // 이벤트 발행 함수
  publish(event, data) {
    if (!this.events[event]) {
      return;
    }
    this.events[event].forEach((listener) => {
      listener(data);
    });
  },
};

// 구독자1
function subscriber1(data) {
  console.log('Subscriber 1 received data:', data);
}

// 구독자2
function subscriber2(data) {
  console.log('Subscriber 2 received data:', data);
}

// 구독자1, 구독자2 이벤트 구독
EventBus.subscribe('event', subscriber1);
EventBus.subscribe('event', subscriber2);

// 발행자 이벤트 발행
EventBus.publish('event', { message: 'Hello, World!' });
EventBus.publish('event', { message: '야야야' });
```
