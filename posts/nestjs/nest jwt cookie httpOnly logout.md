# cookie httpOnly logout

> domain을 사용시에는 domain도 적어야 해당 도메인의 cookie를 지울 수 있다.

```ts
@Get('logout')
@ApiOperation({
  summary: '로그아웃',
})
@ApiNoContentResponse()
async logout(@Res({ passthrough: true }) res: Response) {
  res.clearCookie('Authorization', {
    httpOnly: true,
    domain: process.env.DOMAIN,
    secure: process.env.NODE_ENV !== 'none',
    sameSite: 'strict',
  });
  res.clearCookie('RefreshToken', {
    httpOnly: true,
    domain: process.env.DOMAIN,
    secure: process.env.NODE_ENV !== 'none',
    sameSite: 'strict',
  });
}
```
