# event bus (Event Channel)

> broker or message broker or event bus or event channel,
>
> > 이벤트 버스는 메세지 브로커의 일종이다
> >
> > > 콜백 배열을 사용, 하나의 이벤트네임에 여러개의 콜백이 있을 수 있다.

```ts
class EventBus {
  events: { [key: string]: any };
  constructor() {
    this.events = {};
  }

  on(eventName: string, callback: any) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  off(eventName: string, callback: any) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((cb: any) => cb !== callback);
    }
  }

  emit(eventName: string, data: any) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback: any) => callback(data));
    }
  }
}
```
