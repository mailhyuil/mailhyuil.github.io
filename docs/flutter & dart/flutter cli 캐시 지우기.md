# flutter 캐시 지우기

## ios

```sh
flutter clean
rm -rf ios/Pods ios/Podfile.lock ios/.symlinks ios/Flutter/Flutter.podspec
flutter pub get

cd ios
pod install --repo-update
cd ..
```

## android

```sh
flutter clean
flutter pub get
cd android
./gradlew clean
cd ..
```
