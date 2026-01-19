# flutter 국제화 - intl

> dart code -> generate arb -> translate arb to dart

## install

```sh
dart pub add intl

# arb파일 읽고 dart 파일 생성
flutter gen-l10n
```

## pubspec.yaml

```yaml
dependencies:
  flutter:
    sdk: flutter
  # 다국어 지원 필수 패키지
  flutter_localizations:
    sdk: flutter
  intl: ^0.19.0 # 날짜, 숫자 포맷팅 등 지원

flutter:
  generate: true # 중요! 다국어 코드를 자동으로 생성하도록 설정
```

## l10n.yaml

```yaml
arb-dir: lib/l10n
template-arb-file: app_en.arb
output-localization-file: app_localizations.dart
```

## lib/l10n/app_en.arb

```arb
{
  "helloWorld": "Hello World!",
  "welcomeMessage": "Welcome, {name}"
}
```

## main.dart

```dart
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart'; // 자동 생성된 파일

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // 다국어 설정 시작
      localizationsDelegates: const [
        AppLocalizations.delegate, // 우리가 만든 번역 파일
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: const [
        Locale('en'), // 영어
        Locale('ko'), // 한국어
      ],
      // 다국어 설정 끝
      
      home: const MyHomePage(),
    );
  }
}
```

## usage

```dart
class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    // 다국어 객체 가져오기
    final l10n = AppLocalizations.of(context)!;

    return Scaffold(
      appBar: AppBar(title: Text(l10n.helloWorld)), // "안녕하세요!" 출력
      body: Center(
        child: Text(l10n.welcomeMessage('지민')), // "환영합니다, 지민님" 출력
      ),
    );
  }
}
```
