# firebase flutter

> firebase 프로젝트를 손쉽게 생성 및 설정

## install

```sh
# 1. 설치 후 firebase login 실행
npm i -g firebase-tools

# 2. 설치 후 flutter 프로젝트 폴더에서 flutterfire configure 실행
flutter pub global activate flutterfire_cli
# 3. 실행하면 firebase에 android, ios .. 앱이 추가된다.
# 4. firebase console에서 앱으로 들어가서 SDK 설정을 다운로드 받아서 앱에 추가

# 5. 앱에 firebase 추가
flutter pub add firebase_core
# 6. firebase 플러그인 추가해서 사용
flutter pub add firebase_analytics
flutter pub add firebase_auth
flutter pub add firebase_database
...
```

## 사용

```dart
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

await Firebase.initializeApp(
  options: DefaultFirebaseOptions.currentPlatform,
);
```
