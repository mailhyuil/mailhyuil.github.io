# flutter http

> http 패키지 또는 dio 패키지를 사용하여 http 통신을 할 수 있다.

## install

```
flutter pub add http

# or

flutter pub add dio
```

## usage

> http.get 으로 데이터를 가져오고
>
> > fromJson으로 json을 객체로 변환

```dart
import 'package:http/http.dart' as http;
class ApiService {
    final String baseUrl = "https://localhost:8080";

    void getSomething() async {
     final res = await http.get(Uri.parse("$baseUrl/something"))
    }

    if(res.statusCode == 200){
        final List<dynamic> json = jsonDecode(res.body);
        return json.map((e) => User.fromJson(e)).toList();
    } else {
        print(res.statusCode);
        throw Exception("Failed to load data");
    }
}
```

## Model

```dart
class User {
    final String username, realname, password;

    User({
        required this.username,
        required this.realname,
        required this.password,
    });

    User.fromJson(Map<String, dynamic> json)
        : username = json['username'],
          realname = json['realname'],
          password = json['password'];

}
```
