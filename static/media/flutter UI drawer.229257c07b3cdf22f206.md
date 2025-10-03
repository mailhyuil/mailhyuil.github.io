# flutter Drawer

```dart
drawer: Drawer(
    child: ListView(
    padding: EdgeInsets.zero,
    children: [
        const DrawerHeader(
        decoration: BoxDecoration(
            color: Colors.blue,
        ),
        child: Text('Drawer Header'),
        ),
        ListTile(
        title: const Text('Item 1'),
        onTap: () {
            Navigator.pop(context);
        },
        ),
        ListTile(
        title: const Text('Item 2'),
        onTap: () {
            Navigator.pop(context);
        },
        ),
    ],
    ),
),
```
