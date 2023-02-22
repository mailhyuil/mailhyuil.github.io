# nuxt jwt

## login

```ts
// login 메소드로 데이터를 보내면 accessToken을 담은 response 반환
const res = await useApi<{ accessToken: string }>("/auth/login", {
  method: "POST",
  body,
  onResponse: ({ response }) => {
    if (response._data.statusCode === 401) {
      useToast("이메일 또는 비밀번호가 올바르지 않습니다.", "primary");
    }
  },
});

// accessToken cookie에 token 담기
const _accessToken = useCookie("avirtual_access_token");
_accessToken.value = res.accessToken;

// userProfile 가져오기 헤더에 Bearer 토큰 담아서 요청
const user = await useApi<IUserDTO>("/auth", {
  headers: {
    Authorization: `Bearer ${_accessToken.value}`,
  },
});

// 계정이 없다면 에러
if (!user) {
  useToast("계정을 찾을 수 없습니다.", "danger");
  return false;
}

// 아이디 rememberMe cookie에 담기
const _rememberMe = useCookie("remember_me");
if (rememberMeCheckbox.value.checked) {
  _rememberMe.value = user.username;
} else {
  _rememberMe.value = null;
}

useToast(`${user.username}님 환영합니다.`, "success");
navigateTo("/admin/dashboard", { replace: true });
```
