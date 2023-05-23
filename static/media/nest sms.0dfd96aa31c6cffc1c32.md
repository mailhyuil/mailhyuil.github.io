# nest SMS

```
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SmsService {
  private logger = new Logger(SmsService.name);

  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {}

  /**
   * 입력한 전화번호들을 대상으로 SMS 전송합니다.
   * @param {string[]} tel
   * @param {string} message
   * @returns {Promise<void>}
   * @author 최강훈 <ganghun@lepisode.team>
   * @since 1.0.0
   */
  async send(tel: string[], message: string): Promise<void> {
    const apiEndpoint = this.configService.get<string>('NHN_SMS_API_URL');
    const apiKey = this.configService.get<string>('NHN_SMS_API_KEY');
    const secretKey = this.configService.get<string>('NHN_SMS_API_SECRET');
    return new Promise<void>(async (resolve, reject) => {
      if (tel.length > 1000) {
        reject('한번에 1,000건 이상의 전화번호에 문자를 전송할 수 없습니다.');
      }
      const body = {
        body: message,
        sendNo: '0623749987',
        recipientList: tel.map((item) => ({
          recipientNo: item,
          countryCode: '82',
        })),
      };

      resolve();
      const { data, request } = await this.httpService.axiosRef.post(`${apiEndpoint}/appKeys/${apiKey}/sender/sms`, body, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'X-Secret-Key': secretKey,
        },
      });
      if (!data.header.isSuccessful) {
        this.logger.error(data.header.resultMessage);
        reject('문자 발송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      }
      resolve();
    });
  }
}

```

## SMS 인증 번호 로직

```
@Post('request')
@ApiOperation({ summary: '회원가입을 위해 휴대폰 인증번호를 요청합니다.' })
@ApiQuery({ name: 'tel', description: '인증할 휴대전화 번호' })
async requestCode(@Query('tel') tel: string, @Query('username') username: string): Promise<string> {
  const auth = await this.authService.findByUsername(username);
  if (auth) {
    throw new ConflictException('등록된 아이디 입니다.');
  }

  const code = Math.floor(100_000 + Math.random() * 900_000).toString();

  await this.smsService.send([tel], `삼일건설 회원가입을 위해 인증번호를 입력해 주세요. [${code}]`);

  const token = this.authUtil.createTelToken({ username, tel, code });

  return token;
}
```
