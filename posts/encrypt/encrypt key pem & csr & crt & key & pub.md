# pem & key & pub & crt & csr

## pem (Privacy Enhanced Mail)

> Base64 인코딩된 ASCII 텍스트
>
> > 개인키, 서버인증서, 루트인증서, 체인인증서 및 CSR 등 SSL 관련 모든 과정에서 사용되는 기본 포맷이며, Base64 포맷은 가장 광범위하고 거의 99% 시스템에 호환되는 산업 표준 포맷
> >
> > > 어떤 키든 pem 확장자가 될 수 있다.

## key

> "개인키 (private key)"임을 구분하기 위해 사용하는 확장자

## pub (= crt)

> 공개키(public key)을 구분하기 위해 사용하는 확장자
>
> > crt 파일은 CA 에서 서명된 인증서를 포함한 공개키를 가지고 있음

## crt (Certificate)

> 인증서 확장자 (certificate)
>
> > 공개 키와 함께 신원 확인해 사용
> >
> > > 거의 대부분 Base64 PEM 포맷

## csr (Certificate Signing Request)

> SSL 발급 신청을 위해서 본 파일 내용을 인증기관 CA 에 제출하는 요청서 파일
>
> > crt 파일을 만들기 위한 요청서
> >
> > > CA (Certificate Authority)는 공식기관이 될 수도 있고, 개인, 회사의 팀장.. 등이 될 수도 있음
