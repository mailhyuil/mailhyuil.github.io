# flutter State Riverpod mixin

## define mixin

```dart
mixin class SomeEvent {
  void onBtnTapped() {
     ref.read(someProvider)
     // do something
 }
}
```

## use mixin

```dart
class SomeScreen extends ConsumerWidget with SomeEvent {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return TextButton(
      child: Text('Some'),
      onPressed: onBtnTapped,
    );
  }
}
```
