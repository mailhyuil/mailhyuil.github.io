# flutter Router GoRouter CustomTransitionPage

> pageBuilder 사용

```dart
GoRoute(
    path: '/some',
    pageBuilder: (context, state) {
    return CustomTransitionPage(
        child: const SomeScreen(),
        transitionsBuilder: (context, animation, secondaryAnimation, child) {
        return FadeTransition(
            opacity: animation,
            child: ScaleTransition(
            scale: animation,
            child: child,
            ),
        );
        },
    );
    },
),
```
