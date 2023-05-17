# nestjs jwt

[jwt.io](https://jwt.io/)

## RandomKeygen

[randomkeygen](https://randomkeygen.com/)

## jwt 구조

```
{
    "accessToken":
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.           <-- header
     eyJpZCI6MSwidXNlcm5hbWUiOiJjb2RlZ2VhciIsImlhdC  <-- payload
     I6MTY0MzUxOTI2MCwiZXhwIjoxNjQzNTE5NTYwfQ.       <-- payload
     jxsk2FtHsRRhoAZrsUDgHaHOLCxI9IlSMKTrkZ0zUl4"    <-- verify signature
}
```

## install

```
npm i --save @nestjs/jwt
```

## .env 파일에 key를 환경변수로 등록

```
JWT_SECRET_KEY=5BTENutJCTpGO2aHfDDs2u0KKKKpKV8s
JWT_PUBLIC_KEY=Xv26XN6L86kGOvHMS2rfV2k9HsLVEEEp
JWT_PRIVATE_KEY=PAwXjs5j7eLj8WIeczIRgZN2TdJqi2Bn
```

## EnvironmentService에 JwtModuleOptions를 사용하여 환경변수 적용

> ConfigModule을 import한 EnvironmentService에 JwtOptionsFactory를 구현하여 환경 설정

```ts
@Injectable()
export class EnvironmentService implements JwtOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createJwtOptions(): JwtModuleOptions {
    return {
      secret: this.configService.get<string>("JWT_SECRET_KEY"),
      publicKey: this.configService.get<string>("JWT_PUBLIC_KEY"),
      privateKey: this.configService.get<string>("JWT_PRIVATE_KEY"),
    };
  }
}
```

## AuthModule에 JwtModule 등록

> EnvironmentService에 ConfigService로 환경변수에 등록된 키 사용
>
> > accessToken 발급, 검증을 분리하고싶다면 AuthUtils로 분리해서 provider를 등록 및 export

```ts
@Module({
  imports: [
    JwtModule.registerAsync({
      useClass: EnvironmentService,
    }),
  ],
  providers: [AuthService, AuthUtils],
  controllers: [AuthController],
  exports: [AuthUtils, AuthService],
})
export class AuthModule {}
```

```ts
JwtModule.registerAsync({
  useClass: EnvironmentService, // EnvironmentService는 ConfigModule을 등록함
}),
```

## AuthUtils

> AccessToken 발급과 AccessToken을 검증하는 메소드 분리

```ts
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt/dist/jwt.service";
@Injectable()
export class AuthUtils {
  constructor(private readonly jwtService: JwtService) {}

  /**
   * 1시간의 유효기간을 가진 Access Token을 발급합니다.
   */
  createAccessToken(payload): string {
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: "60m",
    });

    return accessToken;
  }

  /**
   * AccessToken을 검증합니다.
   */
  verifyAccessToken(accessToken: string) {
    return this.jwtService.verify(accessToken);
  }
}
```

## AuthService

```ts
@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService, private readonly jwtService: JwtService) {}

  findUserById(userId: string) {
    return this.prismaService.user.findUnique({ where: { id: userId } });
  }

  findUserByUsername(username: string) {
    return this.prismaService.user.findUnique({ where: { username } });
  }

  create(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({ data });
  }
}
```

## AuthController

```ts
@ApiTags("인증")
@Controller({ version: "1" })
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly jwtService: JwtService) {}

  @Post("login") //로그인
  async login(@Body() body: LoginDTO) {
    const { username, password } = body;
    const user = await this.authService.findUserByUsername(username);
    if (!user) throw new NotFoundException("사용자를 찾을 수 없습니다.");

    const isEqual = bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new UnauthorizedException("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
    ///////////////////////-- JWT logic --////////////////////////////////
    // payload에 유저 정보 담기
    const payload: AccessTokenPayload = {
      id: user.id,
    };

    // 유저 정보 객체를 signature로 사용하여 1시간짜리 토큰 생성
    // AuthUtils으로 대체 가능
    const token = this.jwtService.sign(payload, {
      expiresIn: "60m",
    });

    // accessToken 키로 반환
    return { accessToken: token };
    ///////////////////////-- JWT logic --////////////////////////////////
  }

  @Post("register") // 회원가입
  async register(@Body() body: RegisterDTO) {
    const { username, password, passwordConfirm } = body;
    const checkUsername = await this.authService.findUserByUsername(username);
    if (checkUsername) throw new BadRequestException("이미 등록된 아이디 입니다.");

    if (password !== passwordConfirm) {
      throw new BadRequestException("비밀번호가 일치하지 않습니다.");
    }

    await this.authService.create({
      username,
      password: await bcrypt.hash(password, 10),
    });

    return;
  }
}
```

## AuthGaurd 로 인가

```ts
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const headers = request.headers;

    // headers에서 authorization 키를 가진 값 찾기
    const hasAuthorization = headers.hasOwnProperty("authorization");

    if (!hasAuthorization) {
      throw new HttpException("사용자 정보를 찾을 수 없습니다.", 498);
    }

    // authorization 값을 공백 문자로 나누기 -> 배열로 만들기
    const authorization = headers.authorization.split(" ") as string[];

    if (authorization.length < 2) {
      throw new HttpException("사용자 정보를 찾을 수 없습니다.", 498);
    }
    // 값이 bearer 토큰인지 확인
    const hasBearer = authorization[0].toLowerCase().startsWith("bearer");

    if (!hasBearer) {
      throw new HttpException("사용자 정보를 찾을 수 없습니다.", 498);
    }
    // 토큰 가져오기
    const accessToken = authorization[1];

    // jwtService를 사용하여 토큰 검증
    // AuthUtils으로 대체 가능
    try {
      const { id }: AccessTokenPayload = await this.jwtService.verify<AccessTokenPayload>(accessToken);
      const user = await this.authService.findUserById(id);
      if (!user) throw new NotFoundException("사용자를 찾을 수 없습니다.");

      request.user = user;
      return true;
    } catch (e) {
      return false;
    }
  }
}
```

## Auth decorator

```ts
export function Auth() {
  return applyDecorators(UseGuards(AuthGuard));
}
```

## GetUser decorator

```ts
export const GetUser = createParamDecorator<User>((data: User, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
```

## client

```ts
const login = handleSubmit(async (values) => {
  if (isChecked.value) {
    localStorage.setItem("admin_id", values.username);
  } else {
    localStorage.removeItem("admin_id");
  }

  try {
    const { accessToken, refreshToken } = await useApi<{
      accessToken: string;
      refreshToken: string;
    }>("/auth/login", { method: "POST", body: values });

    if (!accessToken && !refreshToken) {
      useToast("아이디 또는 비밀번호를 확인해 주세요.", "danger");
      return;
    }

    const _accessToken = useCookie("access_token");
    const _refreshToken = useCookie("refresh_token");

    _accessToken.value = accessToken;
    _refreshToken.value = refreshToken;

    const { data: result, error } = await useApiFetch.get<IAuthDTO>("/auth", {
      headers: { authorization: `Bearer ${accessToken}` },
    });

    if (result.value) {
      authStore.setAuth(result.value);
      useToast("로그인이 완료되었습니다.", "success");
      await navigateTo(`/dashboard`, { replace: true, redirectCode: 200 });
    }
  } catch (error: any) {
    throw error;
  }
});
```
