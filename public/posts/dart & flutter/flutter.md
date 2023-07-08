# Flutter

## install

> Flutter SDK 설치

## lib/main.dart

> debug 모드로 실행

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(child: Text('Hello World')),
      ),
    );
  }
}
```
