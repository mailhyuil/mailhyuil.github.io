# TLS DV & EV & OV (인증서 검증 등급/수준)

## DV (Domain Validation)

> 이 도메인의 소유권이 인증서 요청자(서비스 운영자)에게 있음을 검증하는 인증서
>
> > letsencrypt는 DV만 발급함

## OV (Organization Validation)

> 도메인 소유권 + 기업 실체 확인
>
> > 기업명(조직 정보)가 인증서에 포함됨
> >
> > > 피싱 방지

## EV (Extended Validation)

> OV보다 더 강력한 검증이 필요한 SSL 인증서
>
> > 은행, 금융기관, 대기업, 정부기관 같은 높은 신뢰도가 필요한 서비스에서 사용됨.
