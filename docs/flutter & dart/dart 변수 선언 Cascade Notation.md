# dart cascade notation

```dart
// ❌ 일반 방식: 변수명을 계속 반복해서 써야 함
var path = Path();
path.lineTo(0, 0);
path.lineTo(10, 10);
path.close();

// ✅ Cascade 방식: 훨씬 간결하고 '하나의 작업 단위'로 보임
var path = Path()
  ..lineTo(0, 0)
  ..lineTo(10, 10)
  ..close();
```
