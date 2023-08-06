# flutter GoRouter

## install

```sh
flutter pub add go_router
```

## config

```dart
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: _router,
    );
  }
}

// GoRouter configuration
final _router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => HomeScreen(),
    ),
    GoRoute(
      path: '/test',
      builder: (context, state) => const TestScreen(),
    ),
  ],
);
```

## go

```dart
ElevatedButton(
          onPressed: () => context.go('/test'),
          child: const Text('Go to Test Screen'),
        )
```
