# aws-sdk SES (simple email service)

## install

```sh
npm i @aws-sdk/client-sns

npm i -D @types/react
npm i react-email
npm i @react-email/components
```

## aws-ses.module.ts

```ts
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AwsSesService } from "./aws-ses.service";

@Module({
  imports: [
    JwtModule.register({
      secret: process.env["JWT_ACCESS_TOKEN_SECRET"],
      signOptions: { expiresIn: "1d" },
    }),
  ],
  controllers: [],
  providers: [AwsSesService],
  exports: [AwsSesService],
})
export class AwsSesModule {}
```

## aws-ses.service.ts

```ts
import { PrismaService } from "@/server/prisma/prisma.service";
import { SendEmailCommand, SESClient, VerifyEmailIdentityCommand } from "@aws-sdk/client-ses";
import { Injectable, InternalServerErrorException, Logger, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { render } from "@react-email/render";
import { VerifyEmail } from "./email.template";

const region = process.env["AWS_REGION"];
const accessKeyId = process.env["AWS_ACCESS_KEY"];
const secretAccessKey = process.env["AWS_SECRET_ACCESS_KEY"];
const clientUrl = process.env["CLIENT_URL"];
@Injectable()
export class AwsSesService {
  logger = new Logger(AwsSesService.name);
  ses: SESClient;
  constructor(private readonly jwtService: JwtService, private readonly prisma: PrismaService) {
    if (!region) {
      throw new Error("AWS Region is not provided");
    }
    this.ses = new SESClient({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });
  }

  async send({ emails, sender, title, html }: { emails: string[]; sender: string; title: string; html: string }) {
    const command = new SendEmailCommand({
      Source: sender,
      Destination: {
        ToAddresses: emails,
      },
      Message: {
        Subject: {
          Data: title,
        },
        Body: {
          Html: {
            Data: html,
          },
        },
      },
    });
    await this.ses.send(command).catch(error => {
      this.logger.error(error);
      throw new InternalServerErrorException("Failed to send email");
    });
  }

  async sendToken(email: string, id: string) {
    const token = this.jwtService.sign({ id, email });

    const url = `${clientUrl}/verify-email?token=${token}`;

    const command = new SendEmailCommand({
      Source: "contact@dep.team",
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Subject: {
          Data: "코인리펀 이메일 인증",
        },
        Body: {
          Html: {
            Data: await render(VerifyEmail({ url })),
          },
        },
      },
    });
    await this.ses.send(command).catch(error => {
      this.logger.error(error);
      throw new InternalServerErrorException("Failed to send email");
    });
  }

  async verifyToken(token: string) {
    try {
      const { id, email } = this.jwtService.verify(token);
      console.log(id, email);
      const found = await this.prisma.user.update({
        where: { id, email },
        data: { status: "ACTIVE" },
      });
      if (!found) {
        throw new UnauthorizedException("Failed to verify email");
      }
    } catch (error) {
      this.logger.error(error);
      throw new UnauthorizedException("Failed to verify email");
    }
  }
}
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
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

export const VerifyEmail = ({ url }: { url: string }): React.ReactElement => {
  return (
    <Html lang="ko">
      <Head />
      <Preview>코인리펀 이메일 인증 안내</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white text-neutral-900">
          <Container>
            <Hr />
            <Heading>코인리펀 이메일 인증 안내</Heading>
            <Text>안녕하세요. 코인리펀입니다.</Text>
            <Text>이메일 인증을 위해 아래 링크를 클릭해주세요</Text>
            <Hr />
            <Section className="flex justify-center p-5 bg-neutral-100">
              <Link className="text-xl font-extrabold text-center underline" href={url}>
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
