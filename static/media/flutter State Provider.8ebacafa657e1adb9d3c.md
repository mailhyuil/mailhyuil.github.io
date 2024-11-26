# flutter Provider

> InheritedWidget와 ChangeNotifier를 결합하여 사용하기 쉽게 만든 패키지

## install

```sh
flutter pub add provider
```

## Provider로 감싸기

> Notifier의 종류에 따라서 ChangeNotifierProvider, ListenableProvider, ValueListenableProvider, StreamProvider, FutureProvider, Provider이 있다.

```dart
MultiProvider(
      providers: [
        ChangeNotifierProvider<SomeNotifier>(
          create: (context) => SomeNotifier(),
        ),
      ],
      child: MaterialApp(
      ),
    );
```

## Notifier 생성

```dart
import 'package:flutter/material.dart';

class SomeNotifier extends ChangeNotifier {
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

## usage

> 값이 계속 바뀐다면 watch
>
> > 값이 바뀌지 않는다면 read (e.g. 메소드)

```dart
context.watch<SomeNotifier>().count
context.read<SomeNotifier>().increase()
context.read<SomeNotifier>().decrease()
```
