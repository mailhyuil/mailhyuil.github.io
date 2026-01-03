# flutter base HTTP dio HttpService

## install

```sh
flutter pub add dio
flutter pub add get_it # 의존성 주입을 위한 패키지 (service locator)
```

## main.ts

```dart
final locator = GetIt.instance;

void initLocator() {
  locator.registerSingleton<HttpService>(HttpService());
}

void main() {
  initLocator();
  runApp(const App());
}
```

## http_service.dart

```dart
import 'package:dio/dio.dart';

class HttpService {
  final Dio _dio = Dio();

  Future<dynamic> get(String url,
      {Map<String, dynamic>? queryParameters}) async {
    try {
      final response = await _dio.get(url, queryParameters: queryParameters);
      return response.data;
    } catch (e) {
      print('Error: $e');
      return null;
    }
  }

  Future<dynamic> post(String url, dynamic data) async {
    try {
      final response = await _dio.post(url, data: data);
      return response.data;
    } catch (e) {
      print('Error: $e');
      return null;
    }
  }

  Future<dynamic> patch(String url, dynamic data) async {
    try {
      final response = await _dio.patch(url, data: data);
      return response.data;
    } catch (e) {
      print('Error: $e');
      return null;
    }
  }

  Future<dynamic> put(String url, dynamic data) async {
    try {
      final response = await _dio.put(url, data: data);
      return response.data;
    } catch (e) {
      print('Error: $e');
      return null;
    }
  }

  Future<dynamic> delete(String url) async {
    try {
      final response = await _dio.delete(url);
      return response.data;
    } catch (e) {
      print('Error: $e');
      return null;
    }
  }
}

```

## usage

```dart
final HttpService _httpService = getIt<HttpService>();
```
