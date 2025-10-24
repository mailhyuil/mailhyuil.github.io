# Behavioral event bus

> broker, message broker, event bus, event channel 등 다양한 이름으로 불린다.
>
> > 이벤트 버스는 메세지 브로커의 일종이다
> >
> > > eventEmitter는 옵저버 패턴
> > >
> > > eventBus는 pub/sub 패턴이다.

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

```ts
import { v4 as uuid } from "uuid";

type EventHandler = (args?: any) => void;

interface EventSubscription {
  id: string;
  event: string;
  handler: EventHandler;
}

interface StickyEvent {
  event: string;
  args?: any;
}

class EventBus {
  private subscriptions: EventSubscription[] = [];
  private stickyEvents: StickyEvent[] = [];

  public register(event: string, handler: EventHandler): string {
    const id = uuid();
    const subscription = { id, event, handler };
    this.subscriptions.push(subscription);
    return id;
  }

  public unregister(id: string): void {
    const index = this.subscriptions.findIndex((subscription) => subscription.id === id);
    if (index !== -1) {
      this.subscriptions.splice(index, 1);
    }
  }

  public post(event: string, args?: any): void {
    const subscriptions = this.subscriptions.filter((subscription) => subscription.event === event);
    subscriptions.forEach((subscription) => subscription.handler(args));
  }

  public postStickyEvent(event: string, args?: any): void {
    this.stickyEvents.push({ event, args });
  }

  public consumeStickyEvent(event: string): void {
    const index = this.stickyEvents.findIndex((stickyEvent) => stickyEvent.event === event);
    if (index !== -1) {
      const { args } = this.stickyEvents[index];
      this.stickyEvents.splice(index, 1);
      this.post(event, args);
    }
  }
}

const eventBus = new EventBus();
eventBus.postStickyEvent("eventName", "some data");
```

## sticky event

> 실행됐던 마지막 이벤트??
>
> > In an event bus, a "sticky event" is an event that stays "sticky" in memory, even after it has been published, so that any future subscribers to that event can receive the most recent value of the event without having to wait for a new instance of the event to be published.
