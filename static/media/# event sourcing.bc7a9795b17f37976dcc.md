# event sourcing

```ts
// 이벤트 소싱을 위한 클래스
class EventSourcing {
  constructor() {
    this.events = [];
    this.currentState = {};
  }

  // 상태를 변경할 때마다 이벤트를 저장
  addEvent(event) {
    this.events.push(event);
    this.updateState(event);
  }

  // 저장된 이벤트들을 순회하며 상태를 갱신
  updateState(event) {
    // 이벤트 타입에 따라 갱신 방법이 달라짐
    switch (event.type) {
      case 'USER_CREATED':
        this.currentState.user = event.payload;
        break;
      case 'USER_UPDATED':
        this.currentState.user = { ...this.currentState.user, ...event.payload };
        break;
      case 'PRODUCT_CREATED':
        this.currentState.product = event.payload;
        break;
      case 'PRODUCT_UPDATED':
        this.currentState.product = { ...this.currentState.product, ...event.payload };
        break;
      // ...
      default:
        break;
    }
  }
}

// 이벤트 생성을 위한 함수
function createEvent(type, payload) {
  return { type, payload };
}

// 이벤트 소싱 인스턴스 생성
const eventSourcing = new EventSourcing();

// 이벤트 추가
eventSourcing.addEvent(createEvent('USER_CREATED', { name: 'John', age: 30 }));
eventSourcing.addEvent(createEvent('USER_UPDATED', { age: 31 }));
eventSourcing.addEvent(createEvent('PRODUCT_CREATED', { name: 'Smartphone', price: 1000 }));
eventSourcing.addEvent(createEvent('PRODUCT_UPDATED', { price: 900 }));

// 최종 상태 출력
console.log(eventSourcing.currentState);
```
