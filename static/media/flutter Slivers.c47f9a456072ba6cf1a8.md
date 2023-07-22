# flutter Slivers

> 헤더 애니메이션 효과
>
> > 스크롤을 내리면 헤더가 변화하는 효과

```dart
class AnimatedContainerPageState extends StatefulWidget {
  AnimatedContainerPageState({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _AnimatedContainerPageStateState createState() =>
      _AnimatedContainerPageStateState();
}

class _AnimatedContainerPageStateState
    extends State<AnimatedContainerPageState> {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      body: CustomScrollView(
        slivers: <Widget>[
          new SliverAppBar(
            // 헤더 영역
            pinned: true, // 축소시 상단에 AppBar가 고정되는지 설정
            expandedHeight: 180.0, // 헤더의 최대 높이
            flexibleSpace: FlexibleSpaceBar(
              // 늘어나는 영역의 UI 정의
              title: new Text('Sliver'),
              background: Image.asset(
                'assets/IMG_9245.jpeg',
                fit: BoxFit.cover,
              ),
            ),
          ),
          SliverFillRemaining(
            // 내용 정의
            child: new Center(
              child: new Text('center'),
            ),
          ),
        ],
      ),
    );
```
