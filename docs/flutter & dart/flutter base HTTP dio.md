# flutter base HTTP dio

http 패키지 또는 dio 패키지를 사용하여 http 통신을 할 수 있다.

## install

```sh
flutter pub add dio
```

## usage

```dart
import 'package:dio/dio.dart';

void main() {
  final dio = Dio();
  // GET 요청
  final response = await dio.get('https://jsonplaceholder.typicode.com/posts');
  print(response.data);

  // POST 요청
  final response = await dio.post('https://jsonplaceholder.typicode.com/posts', data: {
    'title': 'test',
    'body': 'test',
  });
  print(response.data);

  // PUT 요청
  final response = await dio.put('https://jsonplaceholder.typicode.com/posts/1', data: {
    'title': 'test',
    'body': 'test',
  });
  print(response.data);

  // DELETE 요청
  final response = await dio.delete('https://jsonplaceholder.typicode.com/posts/1');
  print(response.data);

  // PATCH 요청
  final response = await dio.patch('https://jsonplaceholder.typicode.com/posts/1', data: {
    'title': 'test',
  });
  print(response.data);
}
```
