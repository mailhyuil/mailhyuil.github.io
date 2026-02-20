# firebase app check

요청을 보낼 때 앱이 정상적인 앱인지 확인하는 서비스
스크립트로 요청을 날리는 공격을 막아준다.

## main

```dart
Future<void> _initServices() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Firebase 초기화
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  await FirebaseAppCheck.instance.activate(
    providerAndroid: kReleaseMode
        ? AndroidPlayIntegrityProvider()
        : AndroidDebugProvider(),
    providerApple: kReleaseMode
        ? AppleAppAttestProvider()
        : AppleDebugProvider(),
  );
  final remoteConfigService = FirebaseRemoteConfigService();
  await remoteConfigService.init();
  await RevenueCatService.initialize();
  debugPrint('debug:RevenueCatService 초기화');
}
```

## console에 나온 debug token을 firebase appcheck debug token으로 등록

```txt
```
