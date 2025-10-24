# nest lifecycle hooks

> @Injectable() 에서 사용할 수 있음
>
> > implements를 굳이 안해도 사용할 수 있음

## onModuleInit()

> once the host module's dependencies have been resolved.

## onApplicationBootstrap()

> once all modules have been initialized, but before listening for connections.

## onModuleDestroy()

> after a termination signal (e.g., SIGTERM) has been received.

## beforeApplicationShutdown()

> after all onModuleDestroy() handlers have completed

## onApplicationShutdown()

> after connections close
