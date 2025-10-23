# flutter 국제화 (intl)

> dart code -> generate arb -> translate arb to dart

## install

```sh
flutter pub add intl
```

## messages.dart

```dart
import 'package:intl/intl.dart';

class Messages {
  String get appName => Intl.message(
    "Flutter APP",
    name: "appName"
  );

  String get helloWorld => Intl.message(
    "Hello, World!",
    name: "helloWorld"
  );

  hello(str) => Intl.message(
      "Hello, $text!",
      name: "hello",
      args: [str]
  );
}
```

## 다국어 생성

> 생성된 arb 파일을 intl_en.arb, intl_ko.arb 등으로 복사

```sh
######## dart -> arb ########
flutter pub run intl_translation:extract_to_arb --output-dir=<추출한 arb 파일이 저장될 경로> <arb를 추출할 dart 파일>
# flutter pub run intl_translation:extract_to_arb --output-dir=assets/i18n lib/i18n/messages.dart
```

```json
{
  "@@last_modified": "2021-03-04T20:04:17.732096",
  "appName": "플루터 APP", // 한국어 입력
  "@appName": {
    "type": "text",
    "placeholders": {}
  },
  "helloWorld": "안녕, 세상!", // 한국어 입력
  "@helloWorld": {
    "type": "text",
    "placeholders": {}
  },
  "hello": "안녕, {str}!", // 한국어 입력
  "@hello": {
    "type": "text",
    "placeholders": {
      "str": {}
    }
  }
}
```

## arb 파일을 다시 dart 파일로 변환

> flutter에서 사용할 수 있도록 다시 dart로 변환

```sh
######## arb -> dart ########
flutter pub run intl_translation:generate_from_arb --output-dir=[저장될 경로] --no-use-deferred-loading <문자열이 있는 dart파일> <다국어 arb 파일들>
# windows
# flutter pub run intl_translation:generate_from_arb --output-dir=lib/i18n --no-use-deferred-loading lib/i18n/messages.dart assets/i18n/intl_ko.arb assets/i18n/intl_en.arb

# mac, linux
# flutter pub run intl_translation:generate_from_arb --output-dir=lib/i18n --no-use-deferred-loading lib/i18n/messages.dart assets/i18n/intl_*.arb
```

## LocationDelegate 사용

> lib/i18n/localizations.dart

```dart
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import 'messages_all.dart';

class AppLocalizations {
  static Future<AppLocalizations> load(Locale locale) {
    final String name = locale.countryCode == null ? locale.languageCode : locale.toString();
    final String localeName = Intl.canonicalizedLocale(name);

    return initializeMessages(localeName).then((bool _ ) {
    Intl.defaultLocale = localeName;
    return new AppLocalizations();
    });
  }

  static AppLocalizations of(BuildContext context) {
    return Localizations.of<AppLocalizations>(context, AppLocalizations);
  }
}

class AppLocalizationDelegate extends LocalizationsDelegate<AppLocalizations> {

  @override
  bool isSupported(Locale locale) {
    return ['en', 'ko'].contains(locale.languageCode);
  }

  @override
  Future<AppLocalizations> load(Locale locale) {
    return AppLocalizations.load(locale);
  }

  @override
  bool shouldReload(LocalizationsDelegate<AppLocalizations> old) {
    return false;
  }
}
```

## main.dart

```dart
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'i18n/localizations.dart';
import 'i18n/messages.dart';

void main() => {
  runApp(MyApp());
}

final msg = Messages();

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      localizationsDelegates: [
        AppLocalizationDelegate(),
        GlobalMaterialLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
      ],
      supportedLocales: [Locale("en"), Locale("ko")],
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: msg.hello('Flutter')),
    );
  }
}
```
