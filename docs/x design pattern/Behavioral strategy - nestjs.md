# Behavioral strategy - nestjs

> role이 MEMBER인 경우와 ADMIN인 경우에 따라 다른 로직을 수행하는 예제

## explorer.service.ts

```ts
import { Injectable } from "@nestjs/common";
import { DiscoveryService, MetadataScanner, Reflector } from "@nestjs/core";

@Injectable()
export class ExplorerService {
  constructor(private readonly discoveryService: DiscoveryService) {}

  find(metadataKey: string | symbol) {
    const providers = this.discoveryService.getProviders();

    return providers
      .filter(wrapper => wrapper.isDependencyTreeStatic())
      .filter(({ metatype, instance }) => {
        if (!instance || !metatype) {
          return false;
        }
        return Reflect.getMetadata(metadataKey, metatype);
      })
      .map(({ instance }) => instance);
  }
}
```

## user.controller.ts

```ts
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Put(":id")
  update(@Body() body: UpdateUserDTO, @Query("role") role: Role) {
    return this.userService.update(body, role);
  }
}
```

## user.strategy.ts

```ts
export abstract class UserStrategy {
  abstract update(data: UpdateUserDTO): Promise<string>;
}
```

## admin.strategy.ts

```ts
@Injectable()
@SetMetadata("strategy:user", "ADMIN")
export class AdminStrategy implements UserStrategy {
  constructor(private readonly prismService: PrismService) {}
  async update(data: UpdateUserDTO) {
    const updated = await this.prismService.update(data);
    return plainToInstance(UserDTO, updated);
  }
}
```

## member.strategy.ts

```ts
@Injectable()
@SetMetadata("strategy:user", "MEMBER")
export class MemberStrategy implements UserStrategy {
  constructor(private readonly prismService: PrismService) {}
  async update(data: UpdateUserDTO) {
    const updated = await this.prismService.update(data);
    return plainToInstance(UserDTO, updated);
  }
}
```

## user.service.ts

```ts
@Injectable()
export class UserService {
  private readonly userStrategy: Record<Role, UserStrategy>;

  constructor(
    private readonly explorerService: ExplorerService,
    private readonly metadataScanner: MetadataScanner,
    private readonly reflector: Reflector,
  ) {
    const providers = this.explorerService.find("strategy:user");
    providers.forEach(provider => {
      this.metadataScanner.scanFromPrototype(provider, Object.getPrototypeOf(provider), methodName => {
        const role = this.reflector.get("strategy:user", provider);
        this.userStrategy[role] = provider;
      });
    });
  }

  async update(data: UpdateUserDTO, role: Role = "MEMBER") {
    return await this.userStrategy[role].update(data);
  }
}
```
