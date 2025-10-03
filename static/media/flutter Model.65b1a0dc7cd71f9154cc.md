# flutter Model

## UserModel

```dart
import 'package:cloud_firestore/cloud_firestore.dart';

class UserModel {
  String name;
  String email;
  int age;
  DateTime createdAt;
  DateTime updatedAt;

  UserModel({
    required this.name,
    required this.email,
    required this.age,
    required this.createdAt,
    required this.updatedAt,
  });

  UserModel.fromJson(Map<String, dynamic> json)
      : name = json['name'] ?? '',
        email = json['email'] ?? '',
        age = json['age'] ?? 0,
        createdAt = (json["createdAt"] as Timestamp).toDate(),
        updatedAt = (json["createdAt"] as Timestamp).toDate();

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'email': email,
      'age': age,
      'createdAt': createdAt,
      'updatedAt': updatedAt,
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

## usage

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
