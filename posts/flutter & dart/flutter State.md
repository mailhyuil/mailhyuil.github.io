# flutter State

## Stateless

> 필요한 data가 없는 위젯

```
StatelessWidget
```

## Stateful

> data가 필요한 위젯
>
> > data가 변경될 때마다 화면을 다시 그려야 하는 위젯

```
StatefulWidget
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

```

```
