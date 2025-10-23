# base64

> 특수문자가 http 헤더에 포함되면 문제가 생길 수 있기 때문에 이를 base64로 인코딩해서 전송한다.
>
> 또는 바이너리 데이터를 문자열로 변환할 때 사용한다.
>
> > binary data를 ascii로 변환
> >
> > (Binary Data를 Character set에 영향을 받지 않는 공통 ASCII 영역의 문자로만 이루어진 문자열로 바꾸는 Encoding)
> >
> > > Binary Data가 시스템 독립적으로 동일하게 전송 또는 저장되는걸 보장하기 위해 사용한다
> > >
> > > > base64는 데이터의 크기를 33% 증가시킨다.
> > > >
> > > > > 암호화 된게 아니다!
> > > > >
> > > > > > 끝에 == 패딩이 붙어있으면 base64 다.

## 용도

> smtp같은 프로토콜은 기본으로 ascii만 지원하기 때문에 multipart 데이터는 base64로 인코딩해서 전송한다.
>
> > 이메일, 데이터 전송, 데이터 저장, 인증 정보

## base64 인코딩

```ts
const text = "Hello, World!";

// 문자열을 Base64로 인코딩
const encodedText = btoa(text);
const encodedText = Buffer.from(text, "utf-8").toString("base64");

console.log(encodedText); // "SGVsbG8sIFdvcmxkIQ=="
```

## base64 디코딩

```ts
const encodedText = "SGVsbG8sIFdvcmxkIQ==";

// Base64를 문자열로 디코딩
const text = atob(encodedText);
const text = Buffer.from(encodedText, "base64").toString("utf-8");

console.log(text); // "Hello, World!"
```
