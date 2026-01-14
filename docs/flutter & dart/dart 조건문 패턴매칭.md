# dart 조건문 패턴매칭

- dart3.1부터 지원하는 기능
- case, when 사용

```dart
int value = 1;
if (value case int v) {
  print(v + 1);
}
// null safety
if (value case final v?) { // null 체크 (!가 아니라 ?다)
  print(v); // non-null
}
// destructuring
if (value case (int x, int y)) { // tuple 패턴매칭
  print('$x, $y');
}
// object
if (user case User(:final id, :final name)) { // User class의 id, name 속성을 가져옴
  print('$id $name');
}
// switch
switch (value) {
  case int v:
    print(v + 1);
    break;
  case String s:
    print(s.toUpperCase());
    break;
}
// when guard
switch (value) {
  case int v when v > 10:
    print('big int');
  case int:
    print('small int');
}
```
