# flutter 앱 배포 ios

> apple store에 배포하기 위한 과정

## 개인 정보 처리 방침 생성 및 웹페이지에 배포

> 개인정보 포털에서 생성 가능
>
> > 배포된 웹페이지의 url을 알아두어야 함

## Apple Connect

> Bundle ID : com.mailhyuil.app
>
> > SKU (재고관리코드) : 내가 식별하기 위한 임의의 코드 (e.g. MY_APP_2021_02)

## Certificates, Identifiers & Profiles

> [certificates list](https://developer.apple.com/account/resources/certificates/list)
>
> > 전부 등록 필요! 몇개는 xcode에서 자동으로 등록해줌
> >
> > > 기기등록 : 내 iphone의 UDID 등록 (UDID는 itunes에서 확인 가능)

## Xcode Archive

> Apple Connect에 build한 앱을 업로드
