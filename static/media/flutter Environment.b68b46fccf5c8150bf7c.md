# flutter Environment

## install

```sh
flutter pub add flutter_dotenv
```

## .env

```sh
SERVER=http://localhost:3000
```

## usage

```dart
import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

Future main() async {
  await dotenv.load();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    String apiKey = dotenv.env['API_KEY'];
    String baseUrl = dotenv.env['BASE_URL'];

    // 앱을 구성하는 나머지 코드
    // ...
  }
}

```
