# Flutter base Json

- Json을 Dart가 이해할 수 있는 자료구조(Map<String, dynamic>)로 변환
- dio, firebase SDK.. 라이브러리에서 대신 수행해준다.
- 라이브러리를 사용하지 않을 시에는 직접 수행해야한다.

## encode / decode

- json.decode -> jsonDecode
- json.encode -> jsonEncode

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

- jsonDecode 되어 `Map<String, dynamic>` 타입을 Model(Object)의 타입으로 변환

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
