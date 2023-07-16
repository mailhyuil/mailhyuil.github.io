# flutter GestureDetector & InkWell

> Widget에 사용되는 event를 달아주는 방법
>
> > GestureDetector와 InkWell의 차이점은 InkWell은 Material Design의 Ripple 효과를 제공한다는 것이다.

## GestureDetector

```dart
body: GestureDetector(
      onTap: () {
        Navigator.push(context, route)
      },
      child: UserListV2(),
      )
```
