# flutter State Stateless & Stateful Widget

## Stateless

> 필요한 data가 없는 위젯

```txt
StatelessWidget
```

## Stateful

> data가 필요한 위젯
>
> > data가 변경될 때마다 화면을 다시 그려야 하는 위젯

```dart
import 'package:flutter/material.dart';
import 'package:hahaha/widgets/button.dart';

class CounterScreen extends StatefulWidget {
  @override
  CounterScreenState createState() => CounterScreenState();
}

class CounterScreenState extends State<CounterScreen> {
  int counter = 0;

  void increment() {
    counter++;
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Button(
      text: "Increment",
      onClicked: () => increment(),
    );
  }
}
```

## setState(() {})

```dart
void onPressed() {
  setState(() {
    counter = counter + 1;
  });
}

// 위와 같은 코드
void onPressed() {
  counter = counter + 1;
  setState(() {});
}
```
