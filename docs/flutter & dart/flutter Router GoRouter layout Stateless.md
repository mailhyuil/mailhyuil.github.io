# flutter Router GoRouter layout Stateless

- ShellRoute: 상태를 유지하지 않는 레이아웃

## main.dart

```dart
final GlobalKey<NavigatorState> _rootNavigatorKey = GlobalKey<NavigatorState>();

final router = GoRouter(
  navigatorKey: _rootNavigatorKey,
  routes: [
    ShellRoute(
      // 여기서 navigationShell 대신 단순 child를 받습니다.
      builder: (context, state, child) {
        return Scaffold(
          body: child, // 전환되는 페이지
          bottomNavigationBar: BottomNavigationBar(
            onTap: (index) {
              if (index == 0) context.go('/a');
              else context.go('/b');
            },
            items: const [
              BottomNavigationBarItem(icon: Icon(Icons.home), label: 'A'),
              BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'B'),
            ],
          ),
        );
      },
      routes: [
        GoRoute(path: '/a', builder: (context, state) => const PageA()),
        GoRoute(path: '/b', builder: (context, state) => const PageB()),
      ],
    ),
  ],
);
```
