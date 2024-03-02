# nest SMS 인증 번호

## notification.controller.ts

```ts
@Controller({ path: "notification", version: "1" })
export class NotificationController {
  constructor(private readonly httpService: HttpService, private readonly authService: AuthService) {}

  @Post("sms/send")
  @ApiOperation({ summary: "회원가입을 위해 휴대폰 인증번호를 요청합니다." })
  async requestCode(@Query() query: { username: string; tel: string }): Promise<string> {
    return await this.authService.requestCode(query);
  }
}
```

## auth.service.ts

```ts
@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly smsService: SmsService, private readonly jwtService: JwtService) {}

  async requestCode(query: { tel: string; username: string }): Promise<string> {
    const user = await this.prisma.user.findUnique({ where: { username } });
    if (user) {
      throw new ConflictException("이미 등록된 아이디 입니다.");
    }

    const code = generateRandomCode();

    await this.smsService.send([tel], `삼일건설 회원가입을 위해 인증번호를 입력해 주세요. [${code}]`);

    // jwt token에 인증번호를 담아서 반환
    const token = this.jwtService.createToken({ username, tel, code });

    return { token };
  }
}
```
