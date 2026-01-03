# flutter package

## flutter pub

- flutter의 패키지 관리 명령어
- dart pub과 동일

```sh
flutter pub add
flutter pub add --dev
flutter pub get
flutter pub upgrate
flutter pub outdated
flutter pub publish
```

## pubspec.yaml

dependencies를 직접 추가

## package 불러오기

import 구문 사용

```dart
import 'package:http/http.dart' as http;

void getSomething(){
//    get(url) // as http 미사용
      http.get(url) // http 사용
}
```
