# flutter 정규표현식 - RegExp

```dart
final regExp = RegExp(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
if (!regExp.hasMatch(_email)) {
    return "Email is not valid";
}
```
