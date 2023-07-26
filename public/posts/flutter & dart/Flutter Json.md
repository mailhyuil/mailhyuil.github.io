# flutter Json

> fromJson, toJson 구현

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

```dart
Map<String, dynamic> userMap = jsonDecode(jsonString);
var user = User.fromJson(userMap);

print('Howdy, ${user.name}!');
print('We sent the verification link to ${user.email}.');
```
