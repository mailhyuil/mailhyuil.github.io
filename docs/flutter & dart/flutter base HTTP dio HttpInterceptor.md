# flutter base HTTP dio HttpInterceptor

> dio 또는 http_interceptor 라이브러리로 구현

## dio.interceptors.add 사용

```dart
import 'package:flutter/material.dart';
import 'package:dio/dio.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  final Dio dio = Dio();

  MyApp() {
    dio.interceptors.add(InterceptorsWrapper(
      onRequest: (options, handler) {
        // 요청 전에 수행할 작업
        // 예: 헤더 수정, 데이터 수정 등

        return handler.next(options); // 다음 인터셉터로 진행
      },
      onResponse: (response, handler) {
        // 응답 전에 수행할 작업
        // 예: 응답 데이터 수정, 에러 처리 등

        return handler.next(response); // 다음 인터셉터로 진행
      },
      onError: (DioError error, handler) {
        // 에러 핸들링
        // 예: 에러 메시지 처리, 재시도 등

        return handler.next(error); // 다음 인터셉터로 진행
      },
    ));
  }

  @override
  Widget build(BuildContext context) {
    // 앱을 구성하는 나머지 코드
    // ...
  }
}
```
