# flutter JsonSerialiable

> @JsonSerializable 어노테이션을 사용하여 json을 dart 클래스로 변환
>
> > fromJson, toJson 메서드를 자동으로 생성해줌

## install

```sh
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
