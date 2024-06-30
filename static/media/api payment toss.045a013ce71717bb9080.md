# api payment toss

1. api key로 결제 창 띄우기 (paymentWidget.requestBillingAuth())
2. 사용자가 결제 => Authorization Code(authKey, customerKey)를 params로 리턴
3. 리턴 받은 Authorization Code를 서버로 전송
4. Authorization Code로 Access Token(결제 key or 빌링 key)를 pg 서버에 요청 (https://api.tosspayments.com/v1/billing/authorizations/issue)
5. Access Token 받기

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
