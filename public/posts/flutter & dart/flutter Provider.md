# flutter Provider

## install

```sh
flutter pub add provider
```

## provider 생성

```dart
import 'package:flutter/material.dart';

class SomeProvider extends ChangeNotifier {
  int _count = 0;

  int get count => _count;

  void increase() {
    ++_count;
    notifyListeners();
  }

  void decrease() {
    --_count;
    notifyListeners();
  }
}
```

## Provider로 감싸기

```dart
MultiProvider(
      providers: [
        ChangeNotifierProvider<SomeProvider>(
          create: (context) => SomeProvider(),
        ),
      ],
      child: MaterialApp(
      ),
    );
```

## consumer

> provider를 사용하는 위젯

```dart
Consumer<SomeProvider>(
              builder: (context, someProvider, child) => Text(
                someProvider.count.toString(),
                style: const TextStyle(fontSize: 40),
              ),
            ),
```

## Provider.of<SomeProvider>()

> provider를 사용하는 위젯

```dart
Provider.of<CounterProvider>(context, listen: false).increment();
```
