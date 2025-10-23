# nuxt runtimeConfig

> 환경변수를 사용할 때 설정

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    // Private config that is only available on the server
    apiSecret: "123",
    // Config within public will be also exposed to the client
    public: {
      apiBase: "/api",
    },
  },
});
```

## 환경변수 확인

```
useRuntimConfig()
```
