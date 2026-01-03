# flutter UI Stack

> relative와 같은 개념
>
> > Positioned(absolute와 같은 개념)를 사용하여 위치를 지정

## usage

> Positioned는 top, left, right, bottom을 사용하여 위치를 지정할 때 사용

```dart
Stack( // relative
  alignment: Alignment.center,
  children: [
    Container(
      width: 200,
      height: 200,
      color: Colors.red,
    ),
    Positioned( // absolute
      top: 50,
      left: 50,
      child: Container(
        width: 100,
        height: 100,
        color: Colors.blue,
      ),
    ),
    Positioned( // absolute
      bottom: 50,
      right: 50,
      child: Container(
        width: 150,
        height: 150,
        color: Colors.green,
      ),
    ),
  ],
)
```
