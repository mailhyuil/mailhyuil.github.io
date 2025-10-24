# L5 TLS certificate crt - Certificate

> 인증서(digital certificate)는 "개인키 소유자의 공개키(public key)"에 "인증기관의 개인키"로 전자서명한 데이타
>
> > 모든 인증서에는 root CA의 서명이 필요하다
> >
> > > CA를 사용하지 않을 경우 개인키를 root CA에 넣어서 Self-Signed Certificate를 만들 수 있다. (안전하지 않음)

## 브라우저

> IE, FireFox, Chrome 등의 Web Browser 제작사는 VeriSign 이나 comodo 같은 유명 ROOT CA 들의 인증서를 신뢰하는 CA로 브라우저에 미리 탑재해 놓는다.
>
> > Self-Signed Certificate는 브라우저에 등록된 CA가 아니기 때문에 브라우저에서 경고창이 뜬다. (테스트 용으로 사용)

## 키 생성

```sh
# 개인키 생성
openssl genrsa -out private.key 2048

# 공개키 생성
openssl rsa -in private.key -pubout -out public.key
```
