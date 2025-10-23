# Sanitization

> string으로 부터 위험한 문자들 (e.g. xss, sql injection, 개인정보)을 제거하는 작업
>
> > filtering, masking, escaping 등의 방법으로 구현

```ts
password.replace(/[^a-zA-Z0-9]/g, "");
```
