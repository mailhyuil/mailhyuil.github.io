# dart function

```dart
String hi(){
    print("hi");
}

String hi() => print("hi");
```

## named parameter

> 파라미터에 {}를 붙이기

```dart
String hi({String name, int age}){
    print("hi");
}

hi(name: "hyuil", age: 12);
```

## optional parameter

```dart
String hi(required String name){
    print(name);
}

String hi(String name, [int age]){
    print("hi");
}
```
