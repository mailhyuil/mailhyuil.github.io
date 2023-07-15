# flutter ListView

## Column & Row 내에서 사용

> Expanded로 감싸고 SizedBox로 크기 조절

```dart
Row(
    mainAxisAlignment: MainAxisAlignment.spaceBetween,
    children: <Widget>[
    Expanded(
        child: SizedBox(
        height: 200.0,
        child: ListView.builder(
            scrollDirection: Axis.vertical,
            itemCount: products.length,
            itemBuilder: (BuildContext context, int index) {
            return Text(products[index]);
            },
        ),
        ),
        ),
    ],
)
```
