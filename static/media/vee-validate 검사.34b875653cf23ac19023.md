# vee-validate 검사

## email

```ts
email: yup
    .string()
    .required("email을 입력해주세요")
    .matches(
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
    "XXXX@XXXX.XXX 형식으로 입력해주세요"
    )
    .email("형식에 맞지 않는 이메일입니다."),
```
