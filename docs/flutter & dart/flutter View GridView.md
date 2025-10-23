# flutter GridView

## builder

```dart
GridView.builder(
  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 2, // 열의 개수를 지정합니다.
    crossAxisSpacing: 10.0, // 열 사이의 간격을 지정합니다.
    mainAxisSpacing: 10.0, // 행 사이의 간격을 지정합니다.
  ),
  itemCount: products.length,
  itemBuilder: (BuildContext context, int index) {
    return Container(
      decoration: BoxDecoration(
        border: Border.all(color: Colors.grey),
        borderRadius: BorderRadius.circular(10.0),
      ),
      child: Center(
        child: Text(products[index]),
      ),
    );
  },
)
```

## count

```dart
GridView.count(
  crossAxisCount: 3, // 열의 개수를 지정합니다.
  crossAxisSpacing: 10.0, // 열 사이의 간격을 지정합니다.
  mainAxisSpacing: 10.0, // 행 사이의 간격을 지정합니다.
  children: List.generate(products.length, (index) {
    return Container(
      decoration: BoxDecoration(
        border: Border.all(color: Colors.grey),
        borderRadius: BorderRadius.circular(10.0),
      ),
      child: Center(
        child: Text(products[index]),
      ),
    );
  }),
)
```

## extent

```dart
GridView.extent(
  maxCrossAxisExtent: 150.0, // 열의 최대 너비를 지정합니다.
  crossAxisSpacing: 10.0, // 열 사이의 간격을 지정합니다.
  mainAxisSpacing: 10.0, // 행 사이의 간격을 지정합니다.
  children: List.generate(products.length, (index) {
    return Container(
      decoration: BoxDecoration(
        border: Border.all(color: Colors.grey),
        borderRadius: BorderRadius.circular(10.0),
      ),
      child: Center(
        child: Text(products[index]),
      ),
    );
  }),
)
```
