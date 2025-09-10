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
import { RedisKey } from "@/server/redis/redis.key";
import { REDIS_CLIENT, RedisClient } from "@/server/redis/redis.provider";
import { HttpService } from "@nestjs/axios";
import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  ServiceUnavailableException,
  UnauthorizedException,
} from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { VerifyResponseDTO } from "./sms.dto";

@Injectable()
export class SmsService {
  private logger = new Logger(SmsService.name);

  constructor(private readonly http: HttpService, @Inject(REDIS_CLIENT) private readonly redis: RedisClient) {}

  async sendVerificationCode(tel: string): Promise<void> {
    const code = Math.floor(100000 + Math.random() * 900000);
    const message = `원파트너스 문의 SMS 인증
인증번호: [${code}]
`;

    try {
      // 1. Redis에 먼저 저장 (빠르고 실패 확률 낮음)
      await this.redis.set(RedisKey.smsCode(tel), code, {
        EX: 5 * 60, // 5 minutes
      });

      // 2. SMS 발송 (실패 확률 높음)
      await this.send([tel], message);

      this.logger.debug(`SMS verification code sent to ${tel}`);
    } catch (error) {
      // SMS 발송 실패 시 Redis에서 코드 삭제
      try {
        await this.redis.del(RedisKey.smsCode(tel));
      } catch {
        this.logger.warn(`Failed to cleanup verification code for ${tel}`);
      }
      this.logger.error(`Failed to send verification code to ${tel}:`, error);
    }
  }

  async verifyCode(tel: string, code: string) {
    try {
      const storedCode = await this.redis.get(RedisKey.smsCode(tel));
      if (storedCode !== code) {
        return plainToInstance(VerifyResponseDTO, { success: false });
      }
    } catch (error) {
      throw new ServiceUnavailableException("인증번호 확인 중 오류가 발생했습니다.");
    }

    try {
      await Promise.all([
        this.redis.del(RedisKey.smsCode(tel)),
        this.redis.set(RedisKey.smsVerified(tel), "true", {
          EX: 5 * 60, // 5 minutes
        }),
      ]);
    } catch (error) {
      throw new ServiceUnavailableException("인증번호 확인 중 오류가 발생했습니다.");
    }
    return plainToInstance(VerifyResponseDTO, { success: true });
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
    if (tels.length > 1000) {
      throw new BadRequestException("한번에 1,000건 이상의 전화번호에 문자를 전송할 수 없습니다.");
    }

    const apiEndpoint = process.env.NHN_SMS_API_URL;
    const apiKey = process.env.NHN_SMS_API_KEY;
    const secretKey = process.env.NHN_SMS_API_SECRET;

    const body = {
      body: message,
      sendNo: "15552571",
      recipientList: tels.map(tel => ({
        recipientNo: tel,
        countryCode: "82",
      })),
    };

    try {
      const response = await this.http.axiosRef.post(`${apiEndpoint}/sms/v3.0/appKeys/${apiKey}/sender/sms`, body, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "X-Secret-Key": secretKey,
        },
      });

      if (!response.data.header.isSuccessful) {
        this.logger.error("SMS API Error:", response.data.header.resultMessage);
        throw new InternalServerErrorException("문자 발송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      }

      this.logger.debug(`SMS sent successfully to ${tels.length} recipients`);
    } catch (error) {
      this.logger.error("SMS send failed:", error);

      if (error.response?.status === 429) {
        throw new BadRequestException("SMS 발송 한도가 초과되었습니다.");
      }
      if (error.response?.status === 401) {
        throw new UnauthorizedException("SMS 서비스 인증에 실패했습니다.");
      }

      throw new InternalServerErrorException("문자 발송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }
}
```
