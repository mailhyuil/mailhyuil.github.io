# flutter GoRouter

> Router v2
>
> > url로 접근 가능

## install

```sh
flutter pub add go_router
```

## config

```dart
MaterialApp.router(
  routerConfig: _router,
);
```

```dart
final _router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => HomeScreen(),
    ),
    GoRoute(
      path: '/test/:id',
      builder: (context, state) {
        final id  = state.params.id;
        return const TestScreen(id : id)
      }
    ),
  ],
);
```

## 사용법

```dart
context.go('/test');
context.go('/test/1');
context.goNamed();
context.push('/test');
context.pop();
```
