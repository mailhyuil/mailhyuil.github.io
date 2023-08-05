# nestjs Access Key / Secret Key

> 인증 미들웨어를 구현

## auth.middleware.ts

```ts
import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly ACCESS_KEY = "your-access-key"; // 액세스 키
  private readonly SECRET_KEY = "your-secret-key"; // 시크릿 키

  use(req: Request, res: Response, next: NextFunction) {
    const { accessKey, secretKey } = req.headers;

    if (accessKey !== this.ACCESS_KEY || secretKey !== this.SECRET_KEY) {
      throw new UnauthorizedException("Invalid access key or secret key");
    }

    next();
  }
}
```

## app.module.ts

```ts
import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthMiddleware } from "./common/middleware/auth.middleware";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes("*");
  }
}
```
