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

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  unsubscribe(eventName, callback) {
    if (this.events[eventName]) {
      const index = this.events[eventName].indexOf(callback);
      if (index > -1) {
        this.events[eventName].splice(index, 1);
      }
    }
  }

  notify(eventName, data) {
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
    this.eventBus.subscribe(eventName, callback);
  }

  unsubscribe(eventName, callback) {
    this.eventBus.unsubscribe(eventName, callback);
  }

  notify(eventName, data) {
    this.eventBus.notify(eventName, data);
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

publisher.subscribe('event1', subscriber1.update.bind(subscriber1));
publisher.subscribe('event1', subscriber2.update.bind(subscriber2));

publisher.notify('event1', 'Hello, world!');

publisher.unsubscribe('event1', subscriber2.update.bind(subscriber2));

publisher.notify('event1', 'Hello again!');
```
