# nest email @react-email

## install

```sh
npm i -D @types/react
npm i react-email
npm i @react-email/components
```

## tsconfig.json

```json
  "compilerOptions": {
    "jsx": "react-jsx"
  },
```

## email.template.tsx

```tsx
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
  Link,
} from "@react-email/components";
import * as React from "react";

export const EmailAuthEmail = ({ password }): React.ReactElement => {
  return (
    <Html lang="ko">
      <Head />
      <Preview>이메일 인증 안내</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white text-neutral-900">
          <Container>
            <Hr />
            <Heading> 이메일 인증 안내</Heading>
            <Text>안녕하세요. oooo입니다.</Text>
            <Text>이메일 인증을 위해 아래 링크를 클릭해주세요</Text>
            <Hr />
            <Section className="bg-neutral-100">
              <Link className="text-xl font-extrabold text-center" href={url}>
                인증하기
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
```

## email.service.ts

```ts
import { HttpService } from "@nestjs/axios";
import { EmailAuthEmail } from "./email-auth.template";
import { Injectable, Logger } from "@nestjs/common";
import { render } from "@react-email/render";

@Injectable()
export class EmailService {
  logger = new Logger(EmailService.name);
  constructor(private readonly httpService: HttpService) {}
  async sendEmail({ email, password }: { email: string; password: string }) {
    this.logger.log(`Send email with password ${password}`);
    const endpoint = process.env["NHN_CLOUD_EMAIL_ENDPOINT"];
    const appKey = process.env["NHN_CLOUD_EMAIL_APP_KEY"];
    const secretKey = process.env["NHN_CLOUD_EMAIL_SECRET_KEY"];
    const baseUrl = `${endpoint}/appKeys/${appKey}`;
    const headers = {
      "Content-Type": "application/json;charset=UTF-8",
      "X-Secret-Key": secretKey,
    };

    const data = {
      senderAddress: "help@lepisode.team",
      receiverList: [{ receiveMailAddr: email, receiveType: "MRT0" }],
      title: `사이니지 통합 관리 시스템 이메일 인증 안내`,
      body: render(EmailAuthEmail({ password })),
    };

    return new Promise<void>((resolve, reject) => {
      this.httpService
        .post(`${baseUrl}/sender/mail`, data, {
          headers,
        })
        .subscribe({
          next: res => {
            if (res.data.header.isSuccessful) {
              console.log(`✅ 인증용 이메일 발송에 성공했습니다.`);
              resolve();
            } else {
              console.error(`⛔️ 인증용 이메일 발송에 실패했습니다.`, res.data.header.resultMessage);
              reject(res.data.header.resultMessage);
            }
          },
        });
    });
  }
}
```
