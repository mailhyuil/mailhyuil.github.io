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
