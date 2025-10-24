# flutter State EventEmit

## 부모

```dart
// 부모
void updateMessage(String message) {
    setState(() {
      _message = message;
    });
}
children: <Widget>[
              Text(_message),
              ChildWidget(onButtonPressed: updateMessage),
        ],
```

## 자식

```dart
final Function(String) onButtonPressed;

onPressed: () {
        onButtonPressed('Button Pressed');
      },
```
