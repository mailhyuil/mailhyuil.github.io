# flutter Expanded & Flexible

> Column, Row, Flex 위젯 내부에서 사용
>
> > 나머지 빈공간을 채우는 위젯
> >
> > > 반응형 디자인을 위한 위젯
> > >
> > > > 여러개를 같이 사용하면 비율에 맞게 나눠서 사용 가능
> > > >
> > > > > flex 속성을 사용하여 비율을 지정할 수 있음

## Expanded

> 자식이 부모보다 작은경우 Flexible은 크기변화 없음 Expanded는 최대 사이즈로 확장

```dart
Expanded(
  flex: 1,
  child: Container(
    color: Colors.red,
  ),
),
```

## Flexible

```dart
Flexible(
  flex: 1,
  child: Container(
    color: Colors.red,
  ),
),
```
