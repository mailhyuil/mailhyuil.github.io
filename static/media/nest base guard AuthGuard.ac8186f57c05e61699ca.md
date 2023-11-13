# nestjs AuthGuard

## 구현

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
