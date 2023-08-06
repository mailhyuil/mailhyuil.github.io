# flutter Riverpod

> 리엑티브 캐싱, 데이터바인딩 프레임워크

## install

```sh
flutter pub add flutter_riverpod
```

## main.dart

```dart
void main() {
  const ProviderScope(child: MyApp());
  runApp(const MyApp());
}
```

## Providers

> 모든 위젯에서 공통적으로 사용하고 싶은 데이터를 정의

```dart
// Provider : 읽기만 가능
final counterProvider = Provider((ref) => 0);

// StateProvider : 읽기, 쓰기 가능
final counterProvider = StateProvider((ref) => 0);

// StreamProvider : 스트림 데이터
final counterProvider = StreamProvider((ref) => Stream.value(0));

// FutureProvider : 비동기 데이터
final counterProvider = FutureProvider((ref) => Future.value(0));

// StateNotifierProvider.autoDispose : 위와 동일, 위젯이 사라지면 상태 초기화
final counterProvider = StateNotifierProvider.autoDispose((ref) => Counter());

// (Async)NotifierProvider : 읽기, 쓰기 가능, 리스너

// ChangeNotifierProvider
```
