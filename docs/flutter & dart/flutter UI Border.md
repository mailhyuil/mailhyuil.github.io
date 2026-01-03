# flutter UI Border

> BoxDecoartion의 border 속성을 통해 border를 설정할 수 있다.
>
> > decoration을 사용하면 color를 Decoration 내에서 선언해야한다.

```dart
decoration: BoxDecoration(
    color: Colors.black,
    border: Border.all(
      color: Colors.red,
      width: 2,
      style: BorderStyle.solid,
    ),
  ),
```
