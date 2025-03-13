# event sourcing

> 최종 상태를 저장하는 것이 아니라
>
> 상태가 변경된 과정을 전부 기록한다.
>
> 이벤트를 Replay하여 최종 상태를 얻는다.
>
> (e.g. [햄버거, 콜라] vs 햄버거 주문 -> 콜라 주문 -> 감자튀김 주문 -> 감자튀김 주문취소)
>
> > 쓰기의 성능이 빨리질 수 있지만, 읽기의 성능은 느려진다.
> >
> > > update, delete가 없다. 모든 데이터는 append only이다.
> > >
> > > > event store와 snapshot store를 필요로한다.

## 장점

```txt
데이터 손실 방지: 모든 상태 변경을 이벤트로 저장하여 데이터 손실을 방지 (zero data loss)
상태 복원 용이성: 이벤트를 재생하여 시스템의 현재 상태를 복원하거나 특정 시점의 상태를 재구성
감사 및 추적 기능 향상: 모든 변경 사항이 이벤트로 기록되므로, 시스템 동작의 투명성과 감사 기능이 향상
비즈니스 인사이트 제공: 이벤트 데이터를 분석하여 새로운 비즈니스 기회를 발견하고, 의사 결정에 활용
확장성과 유연성: 이벤트 기반 아키텍처를 통해 시스템 확장성과 유연성을 향상
```

## event store

> 이벤트를 저장하는 저장소
>
> > 쓰기만 가능하다.

## snapshot store

> 이벤트를 처음부터 순회하며 상태를 갱신하는 것은 비효율적이다.
>
> > 이벤트를 일정 주기마다 스냅샷으로 저장하고 이후 이벤트는 스냅샷 이후부터 시작한다.

## 구현

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
      case "USER_CREATED":
        this.currentState.user = event.payload;
        break;
      case "USER_UPDATED":
        this.currentState.user = { ...this.currentState.user, ...event.payload };
        break;
      case "PRODUCT_CREATED":
        this.currentState.product = event.payload;
        break;
      case "PRODUCT_UPDATED":
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
eventSourcing.addEvent(createEvent("USER_CREATED", { name: "John", age: 30 }));
eventSourcing.addEvent(createEvent("USER_UPDATED", { age: 31 }));
eventSourcing.addEvent(createEvent("PRODUCT_CREATED", { name: "Smartphone", price: 1000 }));
eventSourcing.addEvent(createEvent("PRODUCT_UPDATED", { price: 900 }));

// 최종 상태 출력
console.log(eventSourcing.currentState);
```
