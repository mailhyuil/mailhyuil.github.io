# nest health checks

## install

```sh
npm i @nestjs/terminus
```

## health.module.ts

```ts
import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { HttpModule } from "@nestjs/axios";
import { HealthController } from "./health.controller";

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthController],
})
export class HealthModule {}
```

## health.controller.ts

```ts
import { Controller, Get } from "@nestjs/common";
import { HealthCheckService, HttpHealthIndicator, HealthCheck } from "@nestjs/terminus";

@Controller("health")
export class HealthController {
  constructor(private healthCheckService: HealthCheckService, private httpHealthIndicator: HttpHealthIndicator) {}

  @Get()
  @HealthCheck()
  check() {
    return this.healthCheckService.check([
      () => this.httpHealthIndicator.pingCheck("nestjs-docs", "https://docs.nestjs.com"),
    ]);
  }

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () =>
        this.http.responseCheck("my-external-service", "https://my-external-service.com", res => res.status === 204),
    ]);
  }
}
```

## custom indicator

```ts

```
