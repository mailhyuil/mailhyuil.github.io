# flutter Dismissable

## usage

```dart
Dismissable(
    key: Key('key'),
    child: Container(
        child: Text('text'),
    ),
    onDismissed: (direction) {
        // 방향에 따라 다른 동작 수행
        if (direction == DismissDirection.startToEnd) {
            // 왼쪽에서 오른쪽으로 swipe
        } else if (direction == DismissDirection.endToStart) {
            // 오른쪽에서 왼쪽으로 swipe
        }
    },
    background: Container(
        color: Colors.red,
        child: const ListTile(
            leading: Icon(Icons.delete, color: Colors.white, size: 36),
        ),
    ),
    secondaryBackground: Container(
        color: Colors.green,
        child: const ListTile(
            trailing: Icon(Icons.archive, color: Colors.white, size: 36),
        ),
    ),
)
```
