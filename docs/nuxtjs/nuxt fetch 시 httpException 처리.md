# nuxt fetch 시 httpException 처리

```
  const res = await useApi<{ accessToken: string }>("/auth/login", {
    method: "POST",
    body,
    onResponse: ({ response }) => {
      if (response._data.statusCode === 401) {
        useToast("아이디 또는 비밀번호가 올바르지 않습니다.", "primary");
      }
    },
  });
```
