# api oauth kakao logout

```ts
logout() {
window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${environment.KAKAO_JAVASCRIPT_KEY}&logout_redirect_uri=${environment.KAKAO_LOGOUT_REDIRECT_URI}`;
}
```
