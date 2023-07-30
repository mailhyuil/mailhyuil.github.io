# flutter WebSocket

## install

```sh
dart pub add web_socket_channel
```

## 웹소켓 채널 생성 및 접속

```dart
// _channel = IOWebSocketChannel.connect('$serverUrl/$socketPath');
final channel = WebSocketChannel.connect(
    Uri.parse('wss://127.0.0.1:3001/my_events'),
  );
```

## 메시지 전송

```dart
channel.sink.add(_controller.text);
```

## 메시지 수신

```dart
// Stream을 처리하기 위한 StreamBuilder 추가
StreamBuilder(
    // 채널의 스트림을 stream 항목에 설정. widget을 통해 MyHomePage의 필드에 접근 가능
    stream: widget.channel.stream,
    // 채널 stream에 변화가 발생하면 빌더 호출
    builder: (context, snapshot) {
    return Padding(
        padding: const EdgeInsets.symmetric(vertical: 24.0),
        // 수신 데이터가 존재할 경우 해당 데이터를 텍스트로 출력
        child: Text(snapshot.hasData ? '${snapshot.data}' : ''),
    );
    },
)
```

## 연결 종료

```dart
channel.sink.close();
```
