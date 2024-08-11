# api payment Toss Payments

> 국내 3대 PG사 : KG이니시스, 토스페이먼츠, NHN한국사이버결제

## flow

```txt
1. orderId와 amount를 먼저 임시저장소에 저장 (e.g. localStorage)
2. 클라이언트가 위젯으로 결제하기 요청
3. 성공 리다이렉트 URL로 이동 (paymentKey, paymentType, orderId, amount)
4. 성공 리다이렉트 URL에서 1번의 요청 불러와서 리다이렉트 URL 데이터와 맞는지 비교 (가격, 포인트 사용 등등)
5. 문제가 없다면 백엔드로 결제 승인 요청
```

## API 키

> 클라이언트 키 : 노출 o
>
> > 시크릿 키 : 노출 x

## 결제키 or 빌링키 요청

> 결제키 : 한번의 결제를 위한 키 (requestPayment)
>
> > 빌링키 : 지속적인 결제 (자동 결제)를 위한 키 (requestBillingAuth)
> >
> > > 구독형 정기결제, 종량제 과금결제 등 원하는 시점에 재 결제를 진행할 수 있는 결제용 암호화 키 입니다. 가맹점이 고객의 카드정보를 소유할 수 없기 때문에 카드사로부터 해당 카드에 대응하는 빌링키 발급 받아 저장하고 원하는 시점에 해당 빌링키로 결제를 청구할 수 있습니다.