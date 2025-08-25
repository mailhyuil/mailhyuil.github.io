# dart cascade notation

> ..은 hyuil을 가리킴

```dart
var hyuil = User(name: 'hyuil', age: 12)
  ..name = 'sb'
  ..age = 20;

// is the same as
var hyuil = User(name: 'hyuil', age: 12);
hyuil.name = 'sb';
hyuil.age = 20;
```
