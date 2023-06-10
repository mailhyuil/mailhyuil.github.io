# js 난수 생성 (인증번호)

## Math.random() 사용

> 6자리 난수 생성

```ts
const code = Math.floor(Math.random() * 900_000 + 100_000).toString();
```

## 원하는 문자 혼합

```ts
function randomGenerator(length: number) {
  let text = "";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`{}[]:;<>?,./|";
  for (let i = 0; i < length; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
}

console.log(randomGenerator(15));
```
