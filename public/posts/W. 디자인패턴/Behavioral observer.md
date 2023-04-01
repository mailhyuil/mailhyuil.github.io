# observer

## 구조

```ts
// Observer 클래스
class Observer {
  update(data) {}
}

// Subject 클래스
class Subject {
  constructor() {
    this.observers = [];
  }
  attach(observer) {
    this.observers.push(observer);
  }
  detach(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

// ConcreteObserver 클래스
class ConcreteObserver extends Observer {
  constructor(name) {
    super();
    this.name = name;
  }
  update(data) {
    console.log(`${this.name} received data: ${data}`);
  }
}

// 객체 생성
const subject = new Subject();
const observerA = new ConcreteObserver('Observer A');
const observerB = new ConcreteObserver('Observer B');

// Observer 추가
subject.attach(observerA);
subject.attach(observerB);

// 상태 변경 및 Observer 알림
subject.notify('Hello world!');

// Observer 제거
subject.detach(observerB);

// 상태 변경 및 Observer 알림
subject.notify('Goodbye world!');
```

## 사용 예

```ts
function Subject() {
  this.observers = [];
}

Subject.prototype = {
  subscribe: function (observer) {
    this.observers.push(observer);

    return this;
  },

  unsubscribe: function (observer) {
    const indexOfObserver = this.observers.indexOf(observer);
    if (indexOfObserver > -1) {
      this.observers.splice(indexOfObserver, 1);
    }

    return this;
  },

  notifyObserver: function (observer) {
    const indexOfObserver = this.observers.indexOf(observer);
    if (indexOfObserver > -1) {
      this.observers[indexOfObserver].notify();
    }

    return this;
  },

  notifyAllObservers: function () {
    this.observers.forEach((observer) => {
      observer.notify();
    });

    return this;
  },
};

function Observer(name) {
  this.name = name;
}

Observer.prototype = {
  notify: function () {
    console.log(`Observer ${this.name} has been notified`);
  },
};

const subject = new Subject();

const observer1 = new Observer('user001');
const observer2 = new Observer('user002');
const observer3 = new Observer('user003');
const observer4 = new Observer('user004');
const observer5 = new Observer('user005');

subject.subscribe(observer1).subscribe(observer2).subscribe(observer3).subscribe(observer4).subscribe(observer5);
subject.notifyObserver(observer4);
subject.unsubscribe(observer4);
subject.notifyAllObservers();
```
