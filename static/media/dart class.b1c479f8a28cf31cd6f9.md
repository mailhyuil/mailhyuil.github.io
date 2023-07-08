# dart class

```dart
class User {
    late final String name;
    late int age;

    /*
    // constructor v1
    User(String name, int age) {
        this.name = name;
        this.age = age;
    }
    */

    // constructor v2
    User(this.name, this.age);

    // class method
    User.fromJson(Map<String, dynamic> json)
        : name = json['name'],
        age = json['age'];

    // class method
    Map<String, dynamic> toJson() => {
        'name': name,
        'age': age,
    };
}
```
