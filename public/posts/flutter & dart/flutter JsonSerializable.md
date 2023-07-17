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
import 'package:json_annotation/json_annotation.dart';

@JsonSerializable()
class User {
  final String name;
  final int age;
  final String realname;
  final String email;
  final String tel;
  final String address;

  User(this.name, this.age, this.realname, this.email, this.tel, this.address);

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);
  Map<String, dynamic> toJson() => _$UserToJson(this);
}
```
