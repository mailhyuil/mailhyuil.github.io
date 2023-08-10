# flutter Flame

> 게임 물리 엔진

```sh
flutter pub add flame
flutter pub add flame_forge2d
```

## main.dart

```dart
import 'package:flame/game.dart';
import 'package:flame_forge2d/flame_forge2d.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(GameWidget(game: MyGame()));
}

class MyGame extends Forge2DGame {
  @override
  Future<void> onLoad() async {
    // empty
  }
}
```
