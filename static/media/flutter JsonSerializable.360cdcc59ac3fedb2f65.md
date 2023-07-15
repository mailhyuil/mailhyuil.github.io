# flutter JsonSerialiable

## install

```
dart pub add json_serializable --dev
```

## 사용

```dart
@JsonSerializable()
class User {
  User({
    required this.data,
  });

  Data data;

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);
  Map<String, dynamic> toJson() => _$UserToJson(this);
}
```
