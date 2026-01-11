# flutter Router GoRouter layout

- ShellRoute를 사용하여 레이아웃을 관리

## main.dart

```dart
final router = GoRouter(
  routes: [
    ShellRoute(
      builder: (context, state, child) => MainLayout(child: child),
      routes: [
        GoRoute(
          path: '/',
          builder: (context, state) => HomeScreen(),
        ),
        GoRoute(
          path: '/test',
          builder: (context, state) => TestScreen(),
        ),
        GoRoute(
          path: '/test2',
          builder: (context, state) => Test2Screen(),
        ),
      ],
    ),
  ],
);
```
