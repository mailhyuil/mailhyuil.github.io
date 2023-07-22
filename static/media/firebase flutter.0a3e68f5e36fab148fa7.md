# firebase flutter

## install

```sh
flutter pub global activate flutterfire_cli
flutter pub add firebase_core
# 플러그인 추가
flutter pub add firebase_analytics
flutter pub add firebase_auth
flutter pub add firebase_database
...
```

## firebase를 사용하기 위한 설정

```
flutterfire configure
```

## 사용

```dart
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

await Firebase.initializeApp(
  options: DefaultFirebaseOptions.currentPlatform,
);
```
