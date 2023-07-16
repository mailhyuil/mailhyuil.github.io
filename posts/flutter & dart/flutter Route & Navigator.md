# flutter Route & Navigator

> 라우트를 명시하는 방식과 Navigator를 사용하는 방식이 있다.

## Routes 명시 방식

```dart
MaterialApp(
    initialRoute: '/',
    routes: {
        '/': (context) => HomeScreen(),
        '/second': (context) => SecondScreen(),
    },
)

onPressed:(){
    Navigator.pushNamed(context, '/second');
}
```

## MaterialPageRoute 방식

> 한 화면에서 다른 화면으로 전환할 때 임시적으로 사용
>
> > 간단한 전환에 사용

```dart
onPressed:(){
    Navigator.push(context, MaterialPageRoute(builder: (context) => DetailPage()));
}
```
