# flutter base lifecycle mounted

- mounted는 State 객체가 아직 위젯 트리에 살아 있는지를 나타내는 boolean 값
- true → 화면에 아직 붙어 있음
- false → dispose()가 이미 호출됨 (화면에서 사라짐)
- Flutter의 State 클래스에 기본으로 있음.

```dart
if (mounted) {
  context.pop();
}
```
