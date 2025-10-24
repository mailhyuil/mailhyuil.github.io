# flutter

## install

> Flutter SDK 설치
>
> > Dart SDK 설치
> >
> > > vscode Dart, Flutter extension 설치
> > >
> > > > Android Studio, Xcode 설치

## issue check

> flutter doctor 커맨드를 실행해서 issue를 확인 및 해결

```sh
flutter doctor
```

## JDK 설치

```sh
# mac
brew install --cask adoptopenjdk14
```

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

## flutter unable to find git in your path.

> powershell 관리자모드에서

```sh
git config --global --add safe.directory '*'
```
