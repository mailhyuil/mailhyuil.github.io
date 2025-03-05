# firebase flutter

> firebase 프로젝트를 손쉽게 생성 및 설정

## install

```sh
# 1. 설치 후 firebase login 실행
npm i -g firebase-tools

# 2. 설치 후 flutter 프로젝트 폴더에서 flutterfire configure 실행
flutter pub global activate flutterfire_cli

# 3. 실행하면 firebase에 android, ios .. 앱이 추가된다.
flutterfire configure

# 4. 앱에 firebase sdk 추가
flutter pub add firebase_core
# 5. firebase 플러그인 추가
flutter pub add cloud_firestore
flutter pub add firebase_database
flutter pub add firebase_auth
flutter pub add firebase_analytics
```

## usage

```dart
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  /**
  다른 firebase 서비스는 init 밑에 추가
  */
  runApp(const MyApp());
}
```
