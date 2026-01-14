# dart 반목문

```dart
for (int i = 0; i < 5; i++) {
  print(i);
}
// iterable
for (final item in items) {
  print(item);
}
// stream
await for (final event in stream) {
  print(event);
}
// object
for (final entry in map.entries) {
  print('${entry.key}: ${entry.value}');
}
// object keys
for (final key in map.keys) {
  print(key);
}
// object values
for (final value in map.values) {
  print(value);
}
```
