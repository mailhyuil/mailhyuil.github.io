# nest SMS

```js
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SmsService {
  private logger = new Logger(SmsService.name);

  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {}

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

      const { data, request } = await this.httpService.axiosRef.post(`${apiEndpoint}/appKeys/${apiKey}/sender/sms`, body, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'X-Secret-Key': secretKey,
        },
      });

      if (!data.header.isSuccessful) {
        this.logger.error(data.header.resultMessage);
        reject('문자 발송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      } else {
        resolve();
      }
    });
  }
}
```
