## nginx ssl ssl_trusted_certificate

> OCSP stapling을 사용하기 위한 인증서 체인 파일
>
> > 없어도 ssl은 동작하지만, OCSP stapling을 사용하기 위해서는 필요
> >
> > > OCSP를 사용하면 SSL/TLS 인증서의 유효성을 빠르게 확인 할 수 있음
> > >
> > > 매번 CA에 요청하지 않고, 서버(nginx)에서 인증서 상태 정보를 stapling(캐싱)하여 제공함
> > >
> > > OCSP Stapling을 사용하려면, 중간 인증서 체인을 제공하는 ssl_trusted_certificate가 반드시 필요함!
> > >
> > > > (해당 기능이 정상동작을 하기 위해서는 서버가 외부 인증기관과 직접 통신이 가능해야 합니다.)

```conf
# nginx https TLS & SSL OCSP - Online Certificate Status Protocol - ssl_trusted_certificate
ssl_trusted_certificate /etc/nginx/ssl/ssl_trusted_certificate.pem;
ssl_stapling on;
ssl_stapling_verify on;
resolver 8.8.8.8 1.1.1.1; # 네임서버의 주소 (호스팅 업체의)
```
