# flutter Stack

> relative, absolute와 같은 개념

## 사용

> Positioned는 top, left, right, bottom을 사용하여 위치를 지정할 때 사용

```dart
Stack(
  alignment: Alignment.center, // 위젯들의 정렬 방식을 지정합니다.
  children: [
    Container(
      width: 200,
      height: 200,
      color: Colors.red,
    ),
    Positioned(
      top: 50,
      left: 50,
      child: Container(
        width: 100,
        height: 100,
        color: Colors.blue,
      ),
    ),
    Positioned(
      bottom: 50,
      right: 50,
      child: Container(
        width: 150,
        height: 150,
        color: Colors.green,
      ),
    ),
  ],
)
```
