# flutter Router GoRouter

- 딥링크(푸시 클릭 → 특정 화면)
- 웹 지원(URL 동기화)
- 중첩 네비게이션(BottomNav 탭마다 스택 유지)
- 가드/리다이렉트(AuthGate, PurchaseGate)
- 라우팅을 “상태”로 관리하고 싶음(Riverpod과 궁합 좋음)

## install

```sh
flutter pub add go_router
```

## main.dart

```dart
import 'package:go_router/go_router.dart';

void main() {
  runApp(
    MaterialApp.router(
      routerConfig: router,
    ),
  );
}
```

## router/router.dart

```dart
final router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => HomeScreen(),
    ),
    GoRoute(
      path: '/test/:id',
      builder: (context, state) {
        final id  = state.pathParameters['id'];
        final some_query = state.uri.queryParameters['some_query'];
        return const TestScreen(id : id)
      }
    ),
    GoRoute(
      path: '/test2/:tab(home|discover|inbox|profile)',
      builder: (context, state) {
        return const Test2Screen(id : id)
      }
    ),
  ],
);
```

## usage

```dart
context.go('/test');
context.go('/test/1');
context.goNamed();
context.push('/test');
context.pop();
```
