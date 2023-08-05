# flutter appStore & playStore 등록

## 개발자 계정 생성

> apple 등록비 : 99달러
>
> > google 등록비 : 25달러

## 개인 정보 처리 방침 생성

> 개인정보 포털에서 생성 가능

## Signed Key 생성

[flutter_doc](https://docs.flutter.dev/deployment/android)

### /android/key.properties

> 이 키는 기억해뒀다가 나중에 쓰인다.

```sh
storePassword=123456
keyPassword=123456
keyAlias=upload
storeFile=../app/upload-keystore.jks
```

### /android/app/upload-keystore.jks

## build appbundle

> signed key를 추가한 후 빌드

```sh
flutter build appbundle
```
