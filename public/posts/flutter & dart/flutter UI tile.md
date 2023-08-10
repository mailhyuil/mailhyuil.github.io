# flutter UI tile

> 사용자 인터페이스 디자인에서 작은 정보 조각 또는 항목을 나타내는데 사용되는 용어
>
> > ListTile, GridTile, CheckboxListTile, SwitchListTile..

## ListTile

```dart
ListTile(
    leading: Icon(Icons.map),
    title: Text('Map'),
    subtitle: Text('Map subtitle'),
    trailing: Icon(Icons.more_vert),
    onTap: () {},
    onLongPress: () {},
    selected: true,
    enabled: true,
    dense: true,
    contentPadding: EdgeInsets.all(10),
    shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
    ),
    tileColor: Colors.grey[200],
    focusColor: Colors.grey[300],
    hoverColor: Colors.grey[400],
    autofocus: true,
    horizontalTitleGap: 10,
    minVerticalPadding: 10,
    minLeadingWidth: 10,
)
```
