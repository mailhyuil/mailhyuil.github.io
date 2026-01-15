# flutter Router GoRouter layout Stateful

- StatefulShellRoute: 상태를 유지하는 레이아웃
- StatefulShellRoute.indexedStack: 탭별 Navigator + State 유지, 바텀탭 정석, MatchingPage 같은 탭 페이지가 dispose 안 됨
- StatefulShellBranch: 각 탭의 줄기, 하나의 브랜치는 하나의 독립적인 네비게이션 스택을 가진다.
- StatefulNavigationShell: 현재 어떤 탭이 선택되었는지 정보를 담고 있으며, 탭을 전환하는 goBranch 메서드를 제공합니다. (angular의 router outlet과 같은 역할)

## router.dart

```dart
final router = GoRouter(
  initialLocation: '/home',
  routes: [
    StatefulShellRoute.indexedStack(
      // navigationShell이 현재 인덱스와 이동 메서드를 모두 가지고 있습니다.
      builder: (context, state, navigationShell) {
        return Scaffold(
          body: navigationShell, // IndexedStack이 내장된 본체
          bottomNavigationBar: BottomNavigationBar(
            currentIndex: navigationShell.currentIndex,
            onTap: (index) => navigationShell.goBranch(index),
            items: const [
              BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
              BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
            ],
          ),
        );
      },
      branches: [
        // 1번 탭: 홈 브랜치
        StatefulShellBranch(
          routes: [
            GoRoute(path: '/home', builder: (context, state) => const HomeView()),
          ],
        ),
        // 2번 탭: 프로필 브랜치
        StatefulShellBranch(
          routes: [
            GoRoute(path: '/profile', builder: (context, state) => const ProfileView()),
          ],
        ),
      ],
    ),
  ],
);
```
