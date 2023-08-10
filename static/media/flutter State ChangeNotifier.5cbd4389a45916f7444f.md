# flutter State ChangeNotifier

> Props Drilling, InheritedWidget 대신 사용 가능
>
> > 하나의 값만 가지고 메소드가 필요없다면 ValueNotifier를 사용해라

## Notifier class

```dart
class SomeNotifier extends ChangeNotifier {
    int _count = 0;
    int get count => _count;

    void increment() {
        _count++;
        notifyListeners();
    }
}

final someNotifier = SomeNotifier();
```

## Listener

> 그냥 Notifier를 사용하면 처음 한번만 듣고 업데이트 되지 않는다.
>
> > AnimatedBuilder 또는 addListener를 사용

### AnimatedBuilder 사용

```dart
AnimatedBuilder(
    animation: someNotifier,
    builder: (context, child) {
        return TextButton(
            child: someNotifier.count.toString()
            onPressed: () {
                someNotifier.increment();
            },
        );
    },
)
```

### addListener 사용

```dart
int _count = someNotifier.count;

someNotifier.addListener(() {
    setState(() {
        _count = someNotifier.count;
    });
});

TextButton(
    child: _count.toString()
    onPressed: () {
        someNotifier.increment();
    },
)
```
