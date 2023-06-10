# js 난수 생성 (인증번호)

## Math.random() 사용

> 6자리 난수 생성

```
const code = Math.floor(Math.random() * 900_000 + 100_000).toString();
```
