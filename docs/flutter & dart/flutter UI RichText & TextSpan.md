# flutter UI RichText & TextSpan

- 하나의 텍스트에 서로 다른 스타일을 적용할 수 있음
- RichText 내에서 TextSpan 사용

## usage

```dart
RichText(
    text: TextSpan(
        text: 'Hello ',
        style: TextStyle(color: Colors.black, fontSize: 30),
        children: const <TextSpan>[
        TextSpan(text: 'bold', style: TextStyle(fontWeight: FontWeight.bold)),
        TextSpan(text: ' world!'),
        ],
    ),
)
```
