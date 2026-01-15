# flutter 캐시 지우기

## ios

```sh
flutter clean
rm -rf ios/Pods ios/Podfile.lock
rm -rf ~/Library/Developer/Xcode/DerivedData
cd ios
pod repo update
pod install
cd ..
flutter build ios
```

## android

```sh
flutter clean
flutter pub get
cd android
./gradlew clean
cd ..
```
