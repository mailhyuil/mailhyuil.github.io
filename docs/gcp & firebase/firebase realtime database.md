# firebase realtime database

- JSON 트리 구조
- online / offline, lastSeen, current location, typing status등을 구현할 때 사ㅇ
- read/write는 비용이 매우 저렴하지만 스토리지 비용은 비싸다. (5$ / GB)

## install

```sh
flutter pub add firebase_database

# console에서 realtime database 생성 후
flutterfire configure
```

## setup

```dart
import 'package:firebase_database/firebase_database.dart';

final db = FirebaseDatabase.instance.ref();

Future<void> setupPresence(String userId) async {
  final userStatusRef = db.child('status/$userId'); // 유저의 상태를 저장하는 경로
  final connectedRef = db.child(
    '.info/connected',
  ); // 특수 경로 .info/connected는 연결 상태를 나타냄

  connectedRef.onValue.listen((event) {
    // 연결 상태가 변경될 때 마다 실행
    final isConnected = event.snapshot.value as bool? ?? false;

    if (isConnected) {
      userStatusRef.onDisconnect().set({
        'state': 'offline',
        'lastChanged': ServerValue.timestamp,
      });

      userStatusRef.set({
        'state': 'online',
        'lastChanged': ServerValue.timestamp,
      });
    }
  });
}
```

## onChildAdded

- 마지막 데이터가 추가될 때마다 실행된다.

```dart
_onAddedSub = db.ref('users')
.orderByChild('timestamp')
.limitToLast(1)
.onChildAdded
.listen((event) {
  print(event.snapshot.value);
});

ref.onDispose(() => _onAddedSub?.cancel());
```

## onChildChanged

- 데이터가 변경될 때마다 실행된다.
