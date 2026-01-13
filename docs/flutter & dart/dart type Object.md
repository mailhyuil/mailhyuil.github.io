# dart type `Object` `Map<Object?, Object?>`

- Object는 모든 타입의 부모 타입
- ?는 null 가능한 타입
- 즉 null을 포함한 모든 타입이 가능한 맵
- 어떤 값이 들어올지 모르는 경우 사용

## convert to `Map<String, dynamic>`

```dart
Map<String, dynamic> convert(Map<Object?, Object?> map) {
    final rawMap = map as Map;
    return Map<String, dynamic>.from(rawMap);
}
```
