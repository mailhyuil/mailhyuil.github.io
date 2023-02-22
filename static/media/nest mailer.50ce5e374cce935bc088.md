# nest mailer

## install

```
npm i @nestjs-modules/mailer
```

## module

```ts
import { Module } from "@nestjs/common";
import { EmailService } from "./email.service";
import { EmailController } from "./email.controller";
import { MailerModule } from "@nestjs-modules/mailer";
import { EjsAdapter } from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";
import { AuthModule } from "src/auth/auth.module";
import { JwtModule } from "@nestjs/jwt";
import { EnvironmentService } from "src/environment/environment.service";

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        defaults: {
          from: "avirtual <info@avirtual.co.kr>",
        },
        transport: {
          host: "email-smtp.ap-northeast-2.amazonaws.com",
          port: 587,
          secure: false,
          auth: {
            user: "AKIA3NC4UZ7GJ3WVHZ5A",
            pass: "BAv6OguzvP+41EY0Y261XMbGSK7RMaYWECACdLEiN1uk",
          },
        },
        template: {
          dir: "",
          adapter: new EjsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
    AuthModule,
    JwtModule.registerAsync({
      useClass: EnvironmentService,
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
```

## service

```ts
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class EmailService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService
  ) {}

  generateCode() {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  sendEmailAuth(username: string): string {
    const code = this.generateCode();

    const token = this.jwtService.sign({ email: username, code });

    this.mailerService.sendMail({
      to: username,
      subject: "에이버추얼 관리자 이메일 인증코드 발급",
      template: "email-auth",
      context: {
        code: code,
      },
    });

    return token;
  }
}
```

## controller

```ts
import { Controller, Post, Body, ConflictException } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthService } from "src/auth/auth.service";
import { EmailService } from "./email.service";

@ApiTags("이메일")
@Controller({ version: "1" })
export class EmailController {
  constructor(
    private readonly emailService: EmailService,
    private readonly authService: AuthService
  ) {}

  @Post("auth/password")
  @ApiOperation({
    summary: "비밀번호 변경 이메일 인증",
    description:
      "입력한 이메일로 비밀번호 변경을 위한 이메일 인증 메일을 전송합니다.",
  })
  async requestSignupEmailAuth(@Body() body: { username: string }) {
    const user = await this.authService.findUserByUsername(body.username);
    if (!user) {
      throw new ConflictException("사용자를 찾을 수 없습니다.");
    }

    const token = this.emailService.sendEmailAuth(body.username);

    return { authToken: token };
  }
}
```
