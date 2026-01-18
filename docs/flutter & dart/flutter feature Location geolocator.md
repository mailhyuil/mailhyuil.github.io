# flutter feature Location geolocator

- 주변의 와이파이 등을 통해 현재 위치를 유추
- location과 비슷한 패키지

## install

```sh
dart pub add geolocator
```

## usage

```dart
import 'dart:async';

import 'package:geolocator/geolocator.dart';
import 'package:permission_handler/permission_handler.dart';

Future<Position> getMyLocation() async {
  // 1) ✅ 위치 서비스 활성화 여부
  final serviceEnabled = await Geolocator.isLocationServiceEnabled();
  if (!serviceEnabled) {
    await openAppSettings();
  }
  // 2) ✅ 권한 여부 확인
  LocationPermission permission = await Geolocator.checkPermission();

  // 권한이 승인되어 있지 않다면
  if (permission == LocationPermission.denied) {
    // 권한 요청
    permission = await Geolocator.requestPermission();
    if (permission == LocationPermission.denied) {
      throw Exception('Location permission is denied');
    }
  }

  // 권한이 영구적으로 거절되어 있다면
  if (permission == LocationPermission.deniedForever) {
    // 위치서비스 활성이 안 되어있으면 앱 설정으로 이동
    await openAppSettings();
    throw Exception('Location permission is denied forever');
  }

  // ✅ 3) 캐시된 위치 먼저 (가장 효과 큼)
  final last = await Geolocator.getLastKnownPosition();
  if (last != null) return last;

  // ✅ 4) 고정밀 시도 (timeout 조금 늘리기 권장)
  try {
    return await Geolocator.getCurrentPosition(
      locationSettings: LocationSettings(
        accuracy: LocationAccuracy.high,
        timeLimit: const Duration(seconds: 20),
      ),
    );
  } on TimeoutException {
    // ✅ 5) fallback: 저정밀로 한 번 더
    try {
      return await Geolocator.getCurrentPosition(
        locationSettings: LocationSettings(
          accuracy: LocationAccuracy.low,
          timeLimit: const Duration(seconds: 10),
        ),
      );
    } catch (_) {
      // ✅ 6) 그래도 안 되면 마지막 캐시라도 다시 시도
      final last2 = await Geolocator.getLastKnownPosition();
      if (last2 != null) return last2;

      rethrow; // 최후엔 원래 에러 던짐
    }
  }
  // 다음 로직 진행 (예: Geolocator.getCurrentPosition)
}
```
