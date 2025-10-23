# dart Named Parameter

> 파라미터에 {}를 붙이면 named parameter로 전달할 수 있음

```dart
User({required this.name, required this.password});

String hi({String name, int age}){
    print("hi");
}

hi(name: "hyuil", age: 12);
```
