# command bus

> command를 handler에게 전달하는 역할을 하는 객체를 정의하여
>
> > command를 정의와 실행을 분리하는 패턴

## command

> 작업을 정의한 객체

```ts
export class KillDragonCommand {
  constructor(public readonly heroId: string, public readonly dragonId: string) {}
}
```

## handler

> command를 처리하는 객체

```ts
@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  constructor(private repository: HeroRepository) {}

  async execute(command: KillDragonCommand) {
    const { heroId, dragonId } = command;
    const hero = this.repository.findOneById(+heroId);

    hero.killEnemy(dragonId);
    await this.repository.persist(hero);
  }
}
```

## command bus

> command를 handler에게 전달하는 객체

```ts
class SimpleCommandBus {
    private Map<Class<?>, CommandHandler<?>> handlers = new HashMap<>();

    public <C> void registerHandler(Class<C> commandType, CommandHandler<C> handler) {
        handlers.put(commandType, handler);
    }

    public void dispatch(Object command) {
        CommandHandler handler = handlers.get(command.getClass());
        if (handler != null) {
            handler.handle(command);
        } else {
            throw new IllegalArgumentException("No handler found for " + command.getClass());
        }
    }
}

class CommandBus {
    private handlers = new Map<string, ICommandHandler<CommandBase>>();
    execute(command: Command) {
    const commandId = this.getCommandId(command);
    const handler = this.handlers.get(commandId);
    if (!handler) {
      const commandName = this.getCommandName(command);
      throw new CommandHandlerNotFoundException(commandName);
    }
    this._publisher.publish(command);
    return handler.execute(command);
  }
}
```
