# Flutter base Json

> fromJson, toJson 구현
>
> > 소규모 프로젝트에서는 직접 구현 (jsonDecode, jsonEncode)
> >
> > > 중대형 프로젝트에서는 코드 생성 패키지를 사용 (json_serializable)

## jsonDecode, jsonEncode

```dart
import 'dart:convert';

void main() {
  final items = [
    {'id': 1, 'title': 'Item 1'},
    {'id': 2, 'title': 'Item 2'},
  ];

  print(json.encode(items));
}

void main() {
  const String data = '[{'id':1,'title':'Item 1'},{'id':2,'title':'Item 2'}]';
  Map<String, dynamic> items = json.decode(data); // JSON데이타구조를 Map<String, dynamic>데이타 타입으로 변경해 준다.

  print(items.runtimeType);
  print(items[0]['title']);
}
```

## fromJson, toJson

> jsonDecode 되어 `Map<String, dynamic>` 타입을 Model의 타입으로 변환

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
