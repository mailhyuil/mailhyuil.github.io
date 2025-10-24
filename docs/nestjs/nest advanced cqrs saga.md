# nest advanced cqrs saga

> 이벤트를 listening하고 있다가 Command를 Trigger하는 역할

```ts
import { Injectable } from "@nestjs/common";
import { ICommand, ofType, Saga } from "@nestjs/cqrs";
import { Observable } from "rxjs";
import { delay, map } from "rxjs/operators";
import { DropAncientItemCommand } from "../commands/impl/drop-ancient-item.command";
import { HeroKilledDragonEvent } from "../events/impl/hero-killed-dragon.event";

const itemId = "0";

@Injectable()
export class HeroesGameSagas {
  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(HeroKilledDragonEvent),
      delay(1000),
      map((event) => {
        return new DropAncientItemCommand(event.heroId, itemId);
      })
    );
  };
}
```
