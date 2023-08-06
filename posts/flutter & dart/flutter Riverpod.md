# flutter Riverpod

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

> 값을 읽고만 싶으면 Provider
>
> > 값을 변경하고 싶으면 StateProvider
> >
> > > 로직을 추가하고 싶으면 StateNotifierProvider

```dart
// Provider : 읽기만 가능
final counterProvider = Provider((ref) => 0);

// StateProvider : 읽기, 쓰기 가능
final counterProvider = StateProvider((ref) => 0);

// StateNotifierProvider : 읽기, 쓰기 가능, 리스너
final counterProvider = StateNotifierProvider((ref) => Counter());

// StreamProvider : 스트림 데이터
final counterProvider = StreamProvider((ref) => Stream.value(0));

// FutureProvider : 비동기 데이터
final counterProvider = FutureProvider((ref) => Future.value(0));

// (Async)NotifierProvider : 읽기, 쓰기 가능, 리스너

// ChangeNotifierProvider
```

## Provider

> Provider extends StateNotifier<int>

```dart
import 'package:flutter_riverpod/flutter_riverpod.dart';

class CountProvider extends StateNotifier<int> {
  CountProvider() : super(0);

  void increment() => state++;
  void decrement() => state--;
}
```

## ConsumerWidget

> Widget extends ConsumerWidget

```dart
class HomeScreen extends ConsumerWidget {
  final countProvider = StateNotifierProvider((ref) => CountProvider()); // Provider 불러오기
  HomeScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final count = ref.watch(countProvider); // Provider watch
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text('$count'),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => ref.read(countProvider.notifier).increment(), // Provider read
        child: const Icon(Icons.add),
      ),
      body: Center(
        child: Text(
          '$count',
          style: const TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    );
  }
}
```
