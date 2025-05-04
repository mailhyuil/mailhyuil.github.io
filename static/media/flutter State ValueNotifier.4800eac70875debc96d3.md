# flutter State ValueNotifier

> 하나의 값만 관심이 있다면 사용

## Notifier class

```dart
final someNotifier = ValueNotifier<int>(0);
```

## Listener

> 그냥 Notifier를 사용하면 처음 한번만 듣고 업데이트 되지 않는다.
>
> > AnimatedBuilder 또는 addListener 또는 ValueListenableBuilder를 사용

### AnimatedBuilder 사용

```dart
AnimatedBuilder(
    animation: someNotifier,
    builder: (context, child) {
        return TextButton(
            child: someNotifier.value.toString()
            onPressed: () {
                someNotifier.value = someNotifier.value + 1;
            },
        );
    },
)
```

### addListener 사용

```dart
int _count = someNotifier.value;

someNotifier.addListener(() {
    setState(() {
        _count = someNotifier.value;
    });
});

TextButton(
    child: _count.toString()
    onPressed: () {
        someNotifier.value = someNotifier.value + 1;
    },
)
```

### ValueListenableBuilder 사용

```dart
ValueListenableBuilder(
    valueListenable: someNotifier,
    builder: (context, value, child) {
        return TextButton(
            child: value.toString()
            onPressed: () {
                someNotifier.value = someNotifier.value + 1;
            },
        );
    },
)
```
