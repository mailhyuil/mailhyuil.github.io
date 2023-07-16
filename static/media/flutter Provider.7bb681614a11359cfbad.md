# flutter Provider

## install

```sh
flutter pub add provider
```

## count_provider.dart

```dart
import 'package:flutter/material.dart';

class CountProvider extends ChangeNotifier {
  int _count = 0;

  int get count => _count;

  void increase() {
    ++_count;
    notifyListeners();
  }

  void decrease() {
    --_count;
    notifyListeners();
  }
}
```

## main.dart

```dart
import 'package:flutter/material.dart';
import 'package:hahaha/services/count_provider.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      home: ChangeNotifierProvider(
        create: (_) => CountProvider(), // 생성!
        child: Home(),
      ),
    );
  }
}

class Home extends StatelessWidget {
  Home({Key? key}) : super(key: key);

  late CountProvider _countProvider; // 선언!

  @override
  Widget build(BuildContext context) {
    _countProvider = Provider.of<CountProvider>(context, listen: false); // 초기화!

    return Scaffold(
      appBar: AppBar(
        title: const Text('provider sample'),
      ),
      body: const CountHome(),
      floatingActionButton: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          IconButton(
            onPressed: () => _countProvider.increase(), // 사용!
            icon: const Icon(Icons.add),
          ),
          IconButton(
            onPressed: () => _countProvider.decrease(), // 사용!
            icon: const Icon(Icons.remove),
          ),
        ],
      ),
    );
  }
}

class CountHome extends StatelessWidget {
  const CountHome({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      // 사용!
      child: Consumer<CountProvider>(
        builder: (context, countProvider, child) => Text(
          Provider.of<CountProvider>(context).count.toString(),
          style: const TextStyle(fontSize: 60),
        ),
      ),
    );
  }
}
```
