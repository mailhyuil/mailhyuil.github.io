# nest DiscoveryModule

> nestjs에서 제공하는 모듈
>
> > 내부적으로 modulesContainer를 사용하여 모든 컨트롤러, 프로바이더를 조회 할 수 있다.
> >
> > > DiscoveryService : 모든 컨트롤러, 프로바이더의 인스턴스에 접근
> > > MetadataScanner : 실제 데코레이팅된 메서드에 접근할 수 있다.

## app.module.ts

```typescript
import { Module } from "@nestjs/common";

import { DiscoveryModule } from "@nestjs/core";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [DiscoveryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## app.service.ts

```typescript
import { Injectable } from "@nestjs/common";
import { DiscoveryService, MetadataScanner } from "@nestjs/core";

@Injectable()
export class AppService {
  constructor(
    private readonly discoveryService: DiscoveryService, //
    private readonly metadataScanner: MetadataScanner
  ) {
    this.discoveryService.getProviders();
    this.metadataScanner.scanFromPrototype();
  }
}
```
