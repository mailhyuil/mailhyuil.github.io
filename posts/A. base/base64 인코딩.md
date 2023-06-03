# base64 인코딩

> 인코딩(encoding)은 정보의 형태나 형식을 표준화, 보안, 처리 속도 향상, 저장 공간 절약 등을 위해서 다른 형태나 형식으로 변환하는 처리 혹은 그 처리 방식을 말한다.
>
> > Base64란 Binary Data를 Text로 바꾸는 Encoding
> >
> > > Binary Data를 Character set에 영향을 받지 않는 공통 ASCII 영역의 문자로만 이루어진 문자열로 바꾸는 Encoding
> > >
> > > > Binary Data가 시스템 독립적으로 동일하게 전송 또는 저장되는걸 보장하기 위해 사용한다
> > > >
> > > > > 암호화 된게 아니다!

## 용도

> 이메일, 데이터 전송, 데이터 저장, 인증 정보

## js 코드

```ts
const text = "Hello, World!";

// 문자열을 Base64로 인코딩
const encodedText = btoa(text);

console.log(encodedText); // "SGVsbG8sIFdvcmxkIQ=="
```
