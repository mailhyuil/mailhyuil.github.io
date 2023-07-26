# flutter Model

## Model

```dart
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

## Model with json_serializable

```dart
import 'package:json_annotation/json_annotation.dart';

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

  // _$UserModelFromJson과 _$UserModelToJson 메서드를 생성해줍니다.
  factory UserModel.fromJson(Map<String, dynamic> json) => _$UserModelFromJson(json);
  Map<String, dynamic> toJson() => _$UserModelToJson(this);
}
```

## 사용

```dart
void main() {
  // UserModel 인스턴스 생성
  UserModel user = UserModel(name: 'John Doe', email: 'john@example.com', age: 30);

  // UserModel -> JSON
  Map<String, dynamic> userJson = user.toJson();

  // JSON -> UserModel
  UserModel userFromJson = UserModel.fromJson(userJson);

  // 출력
  print('Name: ${userFromJson.name}');
  print('Email: ${userFromJson.email}');
  print('Age: ${userFromJson.age}');
}
```
