# nest advanced cqrs command

> 일반 커맨드 패턴이 아닌 커맨드 버스 패턴
>
> > Command는 DTO 역할을 수행하고 Handler는 Command를 처리하는 역할을 수행한다.
> >
> > > Write Transaction의 Trigger 역할을 수행한다.
> > >
> > > 하나의 Command로 끝날 수도 있고, Saga를 통해 여러 Command를 처리할 수도 있다.

## Command

```ts
export class KillDragonCommand {
  constructor(public readonly heroId: string, public readonly dragonId: string) {}
}
```

## Command handler

```ts
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { HeroRepository } from "../../repository/hero.repository";
import { KillDragonCommand } from "../impl/kill-dragon.command";

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  constructor(private readonly repository: HeroRepository, private readonly publisher: EventPublisher) {}

  async execute(command: KillDragonCommand) {
    const { heroId, dragonId } = command;
    const hero = this.publisher.mergeObjectContext(await this.repository.findOneById(+heroId));
    hero.killEnemy(dragonId);
    hero.commit();
  }
}
```

## controller

```ts
import { CommandBus } from "@nestjs/cqrs";

@Controller("hero")
export class HeroesGameController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post(":id/kill")
  async killDragon(@Param("id") id: string, @Body() dto: KillDragonDto) {
    return this.commandBus.execute(new KillDragonCommand(id, dto.dragonId));
  }
}
```
