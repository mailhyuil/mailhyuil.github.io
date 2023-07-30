# flutter KeyHash

> keytool 명령어로 사용

```sh
keytool -genkey -v -keystore <path>.jks -storetype <type> -keyalg <alg> -keysize <size> -validity <validity> -alias <alias>
```

## Windows

```sh
keytool -genkey -v -keystore %userprofile%\upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```

## Mac

```sh
keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```

## 디버그용 키 해시

```sh
keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore -storepass android -keypass android | openssl sha1 -binary | openssl base64
```
