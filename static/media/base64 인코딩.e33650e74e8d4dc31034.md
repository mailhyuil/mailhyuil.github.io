# base64 인코딩

> Binary Data를 Character set에 영향을 받지 않는 공통 ASCII 영역의 문자로만 이루어진 문자열로 바꾸는 Encoding
>
> > Binary Data가 시스템 독립적으로 동일하게 전송 또는 저장되는걸 보장하기 위해 사용한다
> >
> > > 암호화 된게 아니다!
> > >
> > > > 끝에 == 패딩이 붙어있으면 base64 다.

## 용도

> 이메일, 데이터 전송, 데이터 저장, 인증 정보

## js 코드

```ts
const text = "Hello, World!";

// 문자열을 Base64로 인코딩
const encodedText = btoa(text);

console.log(encodedText); // "SGVsbG8sIFdvcmxkIQ=="
```
