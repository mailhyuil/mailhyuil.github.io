# flutter UI dialog alert

## usage

```dart
AlertDialog(
  title: Text('AlertDialog'),
  content: Text('AlertDialog content'),
  actions: [
    TextButton(onPressed: () => Navigator.pop(context), child: Text('OK')),
  ],
);
```
