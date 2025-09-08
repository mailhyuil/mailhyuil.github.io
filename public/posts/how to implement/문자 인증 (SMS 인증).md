# 문자 인증

## 로직

```txt
1. 사용자가 서버로 전화번호 전송 (인증코드 요청)
2. 전화번호로 인증코드 전송 (인증코드는 redis에 EX와 함께 저장)
3. 사용자가 인증코드를 서버로 전송
4. redis에서 인증코드 조회
5. 인증완료시 전화번호를 verified 상태로 업데이트 후 저장
6. 사용자의 요청 시 전화번호가 verified 상태인지 확인
```

## controller

```ts
import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { SendVerificationCodeDTO, VerifyCodeDTO } from "./sms.dto";
import { SmsService } from "./sms.service";

@ApiTags("SMS")
@Controller({ path: "sms", version: "1" })
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Post("send")
  async sendVerificationCode(@Body() body: SendVerificationCodeDTO): Promise<void> {
    const { tel } = body;
    await this.smsService.sendVerificationCode(tel);
  }

  @Post("verify")
  async verifyCode(@Body() body: VerifyCodeDTO): Promise<void> {
    const { tel, code } = body;
    await this.smsService.verifyCode(tel, code);
  }
}
```

## service

```ts
import { BusinessException, ErrorInfo } from "@/server/errors";
import { RedisKey } from "@/server/redis/redis.key";
import { REDIS_CLIENT, RedisClient } from "@/server/redis/redis.provider";
import { HttpService } from "@nestjs/axios";
import { Inject, Injectable, Logger } from "@nestjs/common";

@Injectable()
export class SmsService {
  private logger = new Logger(SmsService.name);

  constructor(private readonly http: HttpService, @Inject(REDIS_CLIENT) private readonly redis: RedisClient) {}

  async sendVerificationCode(tel: string): Promise<void> {
    const code = Math.floor(100000 + Math.random() * 900000);
    const message = `SMS 인증
인증 코드: [${code}]
`;
    await Promise.all([
      this.send([tel], message),
      this.redis.set(RedisKey.smsCode(tel), code, {
        EX: 1000 * 5 * 60, // 5 minutes
      }),
    ]);
  }

  async verifyCode(tel: string, code: string): Promise<void> {
    const storedCode = await this.redis.get(RedisKey.smsCode(tel));
    if (storedCode !== code) {
      throw new BusinessException(ErrorInfo.InvalidVerificationCode);
    }
    await Promise.all([
      this.redis.del(RedisKey.smsCode(tel)),
      this.redis.set(RedisKey.smsVerified(tel), "true", {
        EX: 1000 * 5 * 60, // 5 minutes
      }),
    ]);
  }

  async isVerified(tel: string): Promise<boolean> {
    try {
      const verified = await this.redis.get(RedisKey.smsVerified(tel));
      return verified === "true";
    } catch (error) {
      this.logger.error(`인증 상태 확인 실패: ${tel}`, error);
      return false;
    }
  }

  private async send(tels: string[], message: string): Promise<void> {
    const apiEndpoint = process.env.NHN_SMS_API_URL;
    const apiKey = process.env.NHN_SMS_API_KEY;
    const secretKey = process.env.NHN_SMS_API_SECRET;

    return new Promise<void>((resolve, reject) => {
      if (tels.length > 1000) {
        reject("한번에 1,000건 이상의 전화번호에 문자를 전송할 수 없습니다.");
      }
      const body = {
        body: message,
        sendNo: "01012345678",
        recipientList: tels.map(item => ({
          recipientNo: item,
          countryCode: "82",
        })),
      };

      this.http
        .post(`${apiEndpoint}/appKeys/${apiKey}/sender/sms`, body, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "X-Secret-Key": secretKey,
          },
        })
        .subscribe({
          next: ({ data, request }) => {
            if (!data.header.isSuccessful) {
              this.logger.error(data.header.resultMessage);
              reject("문자 발송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
            } else {
              resolve();
            }
          },
          error(error) {
            this.logger.error(error);
            reject("문자 발송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
          },
        });
    });
  }
}
```
