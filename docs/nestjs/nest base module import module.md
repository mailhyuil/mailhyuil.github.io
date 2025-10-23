# nestjs module export

```ts
import { Global, Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AccessTokenModule } from "./token/access-token.module";
import { RefreshTokenModule } from "./token/refresh-token.module";

@Global()
@Module({
  imports: [AccessTokenModule, RefreshTokenModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService, AccessTokenModule, RefreshTokenModule], // Module을 함께 export
})
export class AuthModule {}
```
