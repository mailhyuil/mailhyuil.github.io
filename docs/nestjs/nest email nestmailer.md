# nest email nestmailer

> nodemailer 를 wrapping한 라이브러리
>
> > smtp 메일 서버가 필요 (e.g. 네이버 메일 서버, 구글 메일 서버)

## install

```sh
npm i @nestjs-modules/mailer nodemailer
npm i -D @types/nodemailer
```

## module

```ts
import { Module } from "@nestjs/common";
import { EmailService } from "./email.service";
import { MailerModule } from "@nestjs-modules/mailer";
import { EjsAdapter } from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        defaults: {
          from: "mailhyuil <mailhyuil@gmail.com>",
        },
        transport: {
          host: "smtp.naver.com", /// mail server 주소
          port: 587, /// mail server port
          secure: false, /// ssl
          auth: {
            user: "mailhyuil", /// mail server 아이디
            pass: "1234", /// mail server 비밀번호
          },
        },
        template: {
          dir: "",
          adapter: new EjsAdapter(), // ejs template engine 사용
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  providers: [EmailService],
})
export class EmailModule {}
```

## service

```ts
import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}
  sendEmail(email: string): string {
    this.mailerService.sendMail({
      to: email,
      subject: "안녕하세요 제목입니다.",
      template: "안녕하세요 내용입니다.",
      context: {
        data: "data",
      },
    });
  }
}
```
