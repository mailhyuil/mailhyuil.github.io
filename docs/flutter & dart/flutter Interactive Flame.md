# flutter Interactive Flame

## install

```sh
flutter pub add flame
flutter pub add flame_forge2d
```

## GameScreen

```dart
import 'dart:async';

import 'package:flame/game.dart';
import 'package:flame_forge2d/flame_forge2d.dart';
import 'package:flutter/material.dart';

class GameScreen extends StatelessWidget {
  const GameScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My First Game!'),
      ),
      body: GameWidget(
        game: MyGame(),
      ),
    );
  }
}

// GameWidget(game: MyGame())으로 감싸서 사용
class MyGame extends Forge2DGame {
  MyGame() : super(gravity: Vector2.zero(), zoom: 20);

  late final Ball _ball;

  @override
  Future<void> onLoad() async {
    await _initializeGame();

    _ball.body.applyLinearImpulse(Vector2(10, 10));
  }

  Future<void> _initializeGame() async {
    final boundary = Boundary();

    await add(boundary);

    _ball = Ball(
      radius: 0.5,
      position: size / 2,
    );
    await add(_ball);
  }
}

class Ball extends BodyComponent<MyGame> {
  final Vector2 position;
  final double radius;

  Ball({required this.position, required this.radius});

  @override
  Body createBody() {
    final bodyDef = BodyDef()
      ..type = BodyType.dynamic
      ..position = position;

    final ball = world.createBody(bodyDef);

    final shape = CircleShape()..radius = radius;

    final fixtureDef = FixtureDef(shape);

    ball.createFixture(fixtureDef);

    return ball;
  }
}

class Boundary extends BodyComponent<MyGame> {
  Vector2? size;

  Boundary({this.size}) {
    assert(size == null || size!.x >= 1.0 && size!.y >= 1.0);
  }

  late Vector2 boundarySize;

  @override
  Future<void> onLoad() {
    boundarySize = size ?? gameRef.size;
    return super.onLoad();
  }

  @override
  Body createBody() {
    final bodyDef = BodyDef()
      ..position = Vector2(0, 0)
      ..type = BodyType.static;

    final boundaryBody = world.createBody(bodyDef);

    final vertices = <Vector2>[
      boundarySize,
      Vector2(0, boundarySize.y),
      Vector2(0, 0),
      Vector2(boundarySize.x, 0),
    ];

    final chain = ChainShape()..createLoop(vertices);

    for (var index = 0; index < chain.childCount; index++) {
      boundaryBody.createFixture(
        FixtureDef(chain.childEdge(index))
          ..density = 2000.0
          ..friction = 0.0
          ..restitution = 0.4,
      );
    }

    return boundaryBody;
  }
}
```
