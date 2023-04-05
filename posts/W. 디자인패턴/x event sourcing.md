# event sourcing

> 모든 시스템 상태 변경 사항이 이벤트 스트림에 기록되며, 이벤트 스트림은 시스템의 상태를 재구성하는 데 사용
>
> > 시스템의 상태 변경 사항을 "소스"로 추적하고 저장합니다.
> >
> > > 따라서 "sourcing"은 시스템의 상태 변경 이벤트의 출처를 추적하는 과정을 의미합니다.
> > >
> > > > 추가 전용 저장소를 사용하여 해당 데이터에 수행된 전체 작업을 기록
> > > >
> > > > > 간단히 말하자면 이벤트 기록 저장소

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
