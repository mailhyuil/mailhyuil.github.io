# flutter event

## onPressed

> Button Widget에 사용되는 event
>
> > 함수 생성해서 등록

```dart
RaisedButton(
  onPressed: () {
    // 버튼이 클릭되었을 때 실행될 코드를 여기에 작성합니다.
    print('버튼이 클릭되었습니다!');
  },
  child: Text('버튼'),
)
```

## GestureDetector

```dart
body: GestureDetector(
      onTap: () {
        Navigator.push(context, route)
      },
      child: UserListV2(),
      )
```
