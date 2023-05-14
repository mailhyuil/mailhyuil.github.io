# nest 최초 관리자 생성

```
export class AuthModule implements OnModuleInit {
  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {}

  async onModuleInit() {
    const defaultAdminEmail = this.configService.get<string>(
      'DEFAULT_ADMIN_EMAIL',
    );
    const defaultAdminPassword = this.configService.get<string>(
      'DEFAULT_ADMIN_PASSWORD',
    );

    if (!defaultAdminEmail) {
      throw new Error('DEFAULT ADMIN EMAIL NOT SET!');
    }
    if (!defaultAdminPassword) {
      throw new Error('DEFAULT ADMIN PASSWORD NOT SET!');
    }

    const check = await this.prismaService.user.findUnique({
      where: { username: defaultAdminEmail },
    });

    if (!check) {
      await this.prismaService.user.create({
        data: {
          username: defaultAdminEmail,
          password: await bcrypt.hash(defaultAdminPassword, 10),
          realname: '관리자',
        },
      });
    }
  }
}
```
