# nuxt middleware

- 페이지 이동 시 실행되는 함수
- `*.global.ts`파일 명이면 전체 적용

## `middlewares/*.ts`

```ts
// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore(); // Pinia 등에서 인증 상태 가져오기

  // 로그인 페이지로 가려는 게 아닌데 로그인이 안 되어 있다면
  if (to.path !== "/login" && !authStore.isLoggedIn) {
    return navigateTo("/login");
  }
});

// 사용
// pages/admin.vue
definePageMeta({
  middleware: "auth", // middleware/auth.ts 실행
});
```
