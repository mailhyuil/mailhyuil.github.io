# flutter View ListView

> Expanded 내에서 사용

## builder

```dart
ListView.builder(
            scrollDirection: Axis.vertical,
            itemCount: products.length,
            itemBuilder: (BuildContext context, int index) {
            return Text(products[index]);
            },
        ),
```

## separatorBuilder

```dart
ListView.builder(
  scrollDirection: Axis.vertical,
  itemCount: products.length * 2 - 1,
  itemBuilder: (BuildContext context, int index) {
    if (index.isOdd) {
      // 홀수 인덱스일 경우 구분선을 반환합니다.
      return Divider();
    } else {
      // 짝수 인덱스일 경우 제품 항목을 반환합니다.
      int productIndex = index ~/ 2;
      return Text(products[productIndex]);
    }
  },
)
```
