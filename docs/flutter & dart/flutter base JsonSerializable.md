# flutter base JsonSerializable

> 중대형 프로젝트에서 사용
>
> > @JsonSerializable 어노테이션을 사용하여 json을 dart 클래스로 변환
> >
> > > part '\*.g.dart'; 추가
> > >
> > > > fromJson, toJson 메서드를 자동으로 생성해줌

## install

```sh
flutter pub add json_serializable --dev
flutter pub add build_runner --dev
flutter pub add json_annotation

flutter run build_runner build
```

## user_model.dart

```dart
import 'package:json_annotation/json_annotation.dart';
// 추가
part 'user_model.g.dart';

@JsonSerializable()
class UserModel {
  final String name;
  final String email;
  final int age;

  UserModel({
    required this.name,
    required this.email,
    required this.age,
  });

  // 팩토리 생성자를 사용하여 JSON에서 UserModel을 생성할 수 있도록 합니다.
  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      name: json['name'],
      email: json['email'],
      age: json['age'],
    );
  }

  // UserModel을 다시 JSON으로 변환합니다.
  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'email': email,
      'age': age,
    };
  }
}
```
