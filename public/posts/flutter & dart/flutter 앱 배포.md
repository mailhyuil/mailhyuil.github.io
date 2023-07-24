# flutter appStore & playStore 등록

## 개발자 계정 생성

> apple 등록비 : 99달러
>
> > google 등록비 : 25달러

## 개인 정보 처리 방침 생성

> 개인정보 포털에서 생성 가능

## Signing

### window

```sh
keytool -genkey -v -keystore %userprofile%\upload-keystore.jks ^
-storetype JKS -keyalg RSA -keysize 2048 -validity 10000 ^
-alias upload
```

### mac

```sh
keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA \
-keysize 2048 -validity 10000 -alias upload
```
