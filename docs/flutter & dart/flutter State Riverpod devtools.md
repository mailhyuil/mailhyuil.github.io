# flutter State Riverpod devtools

## riverpod_devtools

```sh
dart pub add riverpod_devtools
```

## main

```dart
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_devtools/riverpod_devtools.dart';

void main() {
  runApp(
    ProviderScope(
      observers: [
        RiverpodDevToolsObserver(),
      ],
      child: MyApp(),
    ),
  );
}
```
