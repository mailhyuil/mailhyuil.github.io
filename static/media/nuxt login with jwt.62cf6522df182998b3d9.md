# nuxt login with jwt

1. post fetch -> /auth/login -> accessToken
2. accessToken cookie에 담기
3. get fetch -> check user profile with token -> user profile

```
@Get()
@Auth()
async getProfile(@GetUser() user: User): Promise<UserDTO> {
  return plainToInstance(UserDTO, user);
}
```

4. navigateTo
