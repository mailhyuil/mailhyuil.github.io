# nest base DiscoveryModule ExplorerService - DiscoveryService

## app.module.ts

```ts
import { Module } from "@nestjs/common";
import { DiscoveryModule } from "@nestjs/core";

@Module({
  imports: [DiscoveryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

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
      .filter((wrapper) => wrapper.isDependencyTreeStatic())
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

## usage

```ts
export interface UserStrategy {
  update(data: UpdateUserDTO): Promise<string>;
}

@Injectable()
@SetMetadata("strategy:user", "ADMIN")
export class AdminStrategy implements UserStrategy {
  constructor(private readonly prismService: PrismService) {}
  async update(data: UpdateUserDTO) {
    const updated = await this.prismService.update(data);
    return plainToClass(UserDTO, updated);
  }
}

@Injectable()
@SetMetadata("strategy:user", "MEMBER")
export class MemberStrategy implements UserStrategy {
  constructor(private readonly prismService: PrismService) {}
  async update(data: UpdateUserDTO) {
    const updated = await this.prismService.update(data);
    return plainToClass(UserDTO, updated);
  }
}
```

```ts
@Injectable()
export class UserService {
  private readonly userStrategy: Record<Role, UserStrategy>;

  constructor(
    private readonly explorerService: ExplorerService,
    private readonly metadataScanner: MetadataScanner,
    private readonly reflector: Reflector
  ) {
    const providers = this.explorerService.find("strategy:user");
    providers.forEach((provider) => {
      this.metadataScanner.scanFromPrototype(provider, Object.getPrototypeOf(provider), (methodName) => {
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
