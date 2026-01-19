# firebase remote config

## install

```sh
flutter pub add firebase_remote_config
```

## firebase_remote_config.dart

```dart
import 'package:firebase_remote_config/firebase_remote_config.dart';

class RemoteConfigService {
  final FirebaseRemoteConfig _remoteConfig = FirebaseRemoteConfig.instance;
  // 데이터 읽기 예시
  String get welcomeMessage => _remoteConfig.getString("welcome_message");
  bool get isEventOn => _remoteConfig.getBool("is_event_on");

  Future<void> init() async {
    await _remoteConfig.setConfigSettings(
      RemoteConfigSettings(
        fetchTimeout: const Duration(minutes: 1), // 서버 응답 대기 시간
        minimumFetchInterval: const Duration(
          hours: 1,
        ), // 캐시 유지 시간 (개발 시에는 0으로 설정 권장)
      ),
    );

    // 콘솔에 값이 없을 경우 사용할 기본값 설정
    await _remoteConfig.setDefaults(<String, dynamic>{
      "welcome_message": "Hello!",
      "is_event_on": false,
    });

    // 서버에서 값을 가져와서 활성화
    await fetchAndActivate();
  }

  Future<void> fetchAndActivate() async {
    // fetchAndActivate는 서버에서 데이터를 가져온 뒤 즉시 적용합니다.
    bool updated = await _remoteConfig.fetchAndActivate();
    if (updated) {
      print("새로운 설정이 적용되었습니다.");
    }
  }
}
```

## main

```dart
Future<void> init(){

WidgetsFlutterBinding.ensureInitialized();
    final remoteConfigService = RemoteConfigService();

    // Firebase Remote Config 초기화
    await remoteConfigService.init(),

      // external event listener
    FirebaseRemoteConfig.instance.onConfigUpdated.listen((event) async {
      await FirebaseRemoteConfig.instance.activate();
      // 여기서 UI를 다시 그리거나 상태를 업데이트하는 로직 수행
      print("실시간 업데이트 완료: ${event.updatedKeys}");
    });
}
```
