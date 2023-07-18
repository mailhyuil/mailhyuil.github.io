# flutter Stream

## 생성

> StreamController를 사용하여 생성

```dart
StreamController<int> _streamController = StreamController<int>();
```

## 데이터 전송

```dart
_streamController.add(1);
_streamController.add(2);
_streamController.add(3);

_streamController.close();
```

## 데이터 수신

```dart
final stream = _streamController.stream;

final subscription = stream.listen((data) {
    print(data);
});

// 이벤트 수신 완료
subscription.onDone(() {
    print('Stream completed');
});
```

## 데이터 변환

```dart
final stream = _streamController.stream;

final transformedStream = stream.map((data) => data * 2);

final subscription = transformedStream.listen((data) {
    print(data);
});
```
