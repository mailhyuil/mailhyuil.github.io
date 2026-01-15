# flutter Router GoRouter NavigatorKey

- 어떤 위젯(Context)에서든 내비게이터에 직접 접근할 수 있게 해주는 "마스터키"
- 부모 route를 지정하여 그 부모로 직접 이동할 수 있다.

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
        GoRoute(
          path: '/full-screen-page',
          // 최상위 네비게이터 키를 지정하여 탭 바를 덮어버립니다.
          parentNavigatorKey: _rootNavigatorKey,
          builder: (context, state) => const FullScreenPage(),
        ),
        GoRoute(path: '/a', builder: (context, state) => const PageA()),
        GoRoute(path: '/b', builder: (context, state) => const PageB()),
      ],
    ),
  ],
);
```
