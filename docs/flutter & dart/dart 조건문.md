# dart 조건문

## if

```dart
if (x > 10) {
  print('big');
}
// 패턴 매칭
// == v is int + cast
if (value case int ) {
  print(v + 1);
}

// null safety
if (value case final v?) {
  print(v); // non-null
}

// destructuring
if (value case (int x, int y)) {
  print('$x, $y');
}

// type guard
if (value case int v) {
  print(v + 1);
}
```

## switch

```dart
switch (value) {
  case int v:
    print(v + 1);
    break;
  case String s:
    print(s.toUpperCase());
    break;
  default:
    print('unknown');
    break;
}
// when guard
switch (value) {
  case int v when v > 10: // if문을 쓰는 것과 같다.
    print('big int');
  case int: // type guard
    print('small int');
}
```
