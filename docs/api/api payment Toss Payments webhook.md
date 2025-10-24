# api payment Toss Payments webhook

## nginx

```conf
location /api/v1/ {
    proxy_set_header  X-Forwarded-For $remote_addr;
    proxy_pass http://server:3000;
}
```

## main.ts

```ts
app.set("trust proxy", true);
```

## toss-payments-webhook.guard.ts

```ts
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";

const whitelist = ["13.124.18.147", "13.124.108.35", "3.36.173.151", "3.38.81.32"];

@Injectable()
export class TossPaymentsWebhookGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const req: Request = context.switchToHttp().getRequest();
    const ip = req.ip;
    if (!ip) throw new Error("IP 주소를 찾을 수 없습니다.");
    if (ip && !whitelist.includes(ip)) {
      throw new UnauthorizedException("허용되지 않은 IP 주소입니다.");
    }
    return true;
  }
}
```

## webhook handler

```ts
  @Post('webhook')
  @ApiOperation({
    summary: 'Toss Payment 웹훅',
  })
  @ApiOkResponse()
  @UseGuards(TossPaymentsWebhookGuard)
  async webhook(@Body() body: any) {
    const eventType = body.eventType;
    switch (eventType) {
      case 'PAYMENT_STATUS_CHANGED':
        await this.paymentService.changePaymentStatus(body);
        break;
      case 'DEPOSIT_CALLBACK':
        await this.paymentService.changePaymentStatus(body);
        break;
      case 'PAYOUT_STATUS_CHANGED':
        throw Error('서브몰 지급대행 서비스는 지원하지 않습니다.');
      case 'METHOD_UPDATED':
        throw Error('브랜드페이 서비스는 지원하지 않습니다.');
      case 'CUSTOMER_STATUS_CHANGED':
        throw Error('브랜드페이 서비스는 지원하지 않습니다.');
    }
  }
```
