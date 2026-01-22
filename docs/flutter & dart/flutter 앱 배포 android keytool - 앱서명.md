# flutter android keytool - 앱서명

- jks (keystore 파일)을 통해서 서명키를 생성
- 안드로이드 스튜디오 설치 시 ~/.android/debug.keystore 테스트/디버그 키가 기본으로 있다.
  (storepass: android, keypass: android)
- jdk 설치 (mac은 기본으로 설치되어있음)
- jdk/bin 폴더 환경변수 Path에 등록

## keytool cli 사용

```sh
keytool -genkey -v -keystore <path>.jks -storetype <type> -keyalg <alg> -keysize <size> -validity <validity> -alias <alias>
```

## 테스트/디버그용 키 (개발용 키)

```sh
# sha1/sha256 확인
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
```

## 배포용 키 해시

```sh
# jks 파일 생성
keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
# sha1/sha256 확인
keytool -list -v -keystore ./upload-keystore.jks -alias upload -storepass 123456 -keypass 123456
# base64 확인
keytool -exportcert -alias upload -keystore ./upload-keystore.jks -storepass 123456 -keypass 123456 | openssl sha1 -binary | openssl base64
```
