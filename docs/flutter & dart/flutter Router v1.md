# flutter Route & Navigator

> 초기에 쓰던 라우터 방식
>
> > 웹에서 사용시 앞으로 가기 버튼이 작동하지 않는다.
> >
> > > url로 접근 불가능

## push 방식

> 한 화면에서 다른 화면으로 전환할 때 임시적으로 사용
>
> > 간단한 전환에 사용

```dart
onPressed:(){
   const res =  Navigator.push(context, MaterialPageRoute(builder: (context) => DetailPage()));
   print(res);
}

onPressed:(){
    Navigator.pop('res');
}
```

## pushNamed 방식

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

onPressed:(){
    Navigator.pop();
}
```

# pushAndRemoveUntil

> 특정 화면으로 이동하고 이전 화면들을 모두 제거

```dart
Navigator.pushAndRemoveUntil(
    context,
    MaterialPageRoute(builder: (context) => HomeScreen()),
    (route) => false,
);
```
