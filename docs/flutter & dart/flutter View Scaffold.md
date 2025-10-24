# flutter View Scaffold

> 기본적인 앱에서 디자인적인 뼈대를 구성하는 위젯
>
> > appBar, body, bottomNavigationBar 등의 기본적인 레이아웃을 구성할 수 있다.

```dart
Scaffold(
    appBar: AppBar(
        title: Text('title'),
    ),
    body: Center(
        child: Text('body'),
    ),
    bottomNavigationBar: BottomNavigationBar(
        items: [
        BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'home',
        ),
        BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'person',
        ),
        ],
    ),
)
```
