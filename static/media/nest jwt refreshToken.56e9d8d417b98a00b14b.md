# nest jwt refreshToken

> payload에 isRefreshToken 이라는 값만 추가해준다

```ts
{ id: auth.id, role: _role, isRefreshToken: true }
```

## refreshToken으로 accessToken 발급

```ts
/**
  * Refresh Token을 이용해 새 Access Token을 발급 받습니다.
  */
  @Post('refresh')
  @ApiOperation({ summary: 'Refresh Token을 이용해 새 Access Token을 발급 받습니다.' })
  @ApiQuery({ name: 'refreshToken', description: 'Refresh Token' })
  async refreshToken(@Query('refreshToken') refreshToken: string): Promise<string> {
    try {
      const payload = this.authUtil.verifyRefreshToken(refreshToken);

      if (!payload.isRefreshToken) {
        throw new HttpException('올바르지 않은 요청입니다.', 498);
      }
      const auth = await this.authService.findById(payload.id);
      const _role = auth.role.map(role => Object.keys(_UserRole).find((key) => _UserRole[key] === role)) as (keyof typeof _UserRole)[]
      return this.authUtil.createAccessToken({ id: auth.id, role: _role });
    } catch (e) {
      throw new HttpException('올바르지 않은 요청 입니다.', 498);
    }
  }
```

## refreshToken으로 accessToken 요청

```ts
export default defineNuxtRouteMiddleware(async (to, from) => {
  const whitelist = ["/login", "/signup", "/find-password"];

  if (!whitelist.includes(to.path)) {
    const authStore = useAuthStore();
    const refreshToken = useCookie<string>("samil_refresh_token");

    if (refreshToken.value) {
      try {
        const { data } = await useApiFetch.post<string>(
          `/auth/refresh?refreshToken=${refreshToken.value}`
        );
        if (data.value) {
          const accessToken = useCookie("samil_access_token");
          accessToken.value = data.value;
          const { data: result } = await useApiFetch.get<IAuthDTO>("/auth", {
            headers: { authorization: `Bearer ${data.value}` },
          });
          if (result.value) {
            authStore.setAuth(result.value);
          }
        }
      } catch (error) {
        authStore.$reset();
        return navigateTo(`/login?replace=${from.path}`, { replace: true });
      }
    } else {
      authStore.$reset();
      return navigateTo(`/login?replace=${from.path}`, { replace: true });
    }
  }
});
```
