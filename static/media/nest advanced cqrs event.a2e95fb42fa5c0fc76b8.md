# nest CQRS Event

## Event

```ts
export class HeroKilledDragonEvent {
  constructor(public readonly heroId: string, public readonly dragonId: string) {}
}
```

## Event handler

```ts
import { IEventHandler } from "@nestjs/cqrs";
import { EventsHandler } from "@nestjs/cqrs/dist/decorators/events-handler.decorator";
import { HeroKilledDragonEvent } from "../impl/hero-killed-dragon.event";

@EventsHandler(HeroKilledDragonEvent)
export class HeroKilledDragonHandler implements IEventHandler<HeroKilledDragonEvent> {
  handle(event: HeroKilledDragonEvent) {
    console.log(`Hero with id ${event.heroId} killed dragon with id ${event.dragonId}`);
  }
}
```

## Aggregate

```ts
import { AggregateRoot } from "@nestjs/cqrs";
import { HeroKilledDragonEvent } from "../events/impl/hero-killed-dragon.event";

export class Hero extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  killEnemy(enemyId: string) {
    // logic
    this.apply(new HeroKilledDragonEvent(this.id, enemyId));
  }
}
```
