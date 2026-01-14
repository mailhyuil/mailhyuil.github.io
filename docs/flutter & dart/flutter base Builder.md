# flutter base Builder

- builder suffix가 붙은 메소드는 setState()를 호출하지 않아도 UI를 업데이트할 수 있게 해준다.
- 특정 데이터가 변경되었을 때, 그 데이터에 의존하는 위젯 트리만 부분적으로 다시 그리도록(Rebuild) 제어하는 로직을 캡슐화
- UI(위젯)을 동적으로 생성하는 클래스들
- build 메서드에 새로운 위젯을 반환하는 메서드를 정의하여 사용

```txt
FutureBuilder: Future가 완료될 때(성공/실패) 화면을 그립니다. (딱 한 번)
StreamBuilder: Stream에 새로운 데이터가 들어올 때마다 화면을 다시 그립니다. (실시간 채팅, 센서값)
ValueListenableBuilder: 특정 변수(ValueNotifier)의 값이 바뀔 때만 리빌드합니다. setState 범위를 최소화할 때 아주 유용합니다.
AnimatedBuilder: 애니메이션 값이 바뀔 때마다 실행됩니다. 애니메이션 로직과 위젯을 분리할 때 씁니다.

ListView.builder: 수백, 수천 개의 리스트 아이템 중 화면에 보이는 것만 생성합니다.
GridView.builder: 그리드(격자) 형태에서 필요한 부분만 생성합니다.
PageView.builder: 페이지가 넘어가는 시점에 다음 페이지를 생성합니다. (virtual scroll)

LayoutBuilder: 부모 위젯이 나에게 허용한 **최대 넓이/높이(BoxConstraints)**를 인자로 전달해 줍니다. 반응형 레이아웃의 핵심입니다.
OrientationBuilder: 화면이 가로인지 세로인지에 따라 다른 위젯을 만들게 해줍니다.

Builder: 가장 기본적인 빌더입니다. 현재 위젯 바로 아래의 새로운 BuildContext를 생성합니다. (예: Scaffold.of(context)를 호출하고 싶은데 현재 컨텍스트에 Scaffold가 없을 때 사용)
StatefulBuilder: 다이얼로그(showDialog)처럼 별도의 창 안에서 setState를 쓰고 싶을 때 사용합니다.

Consumer (Riverpod/Provider): 특정 프로바이더의 값이 바뀔 때만 해당 부분의 build를 실행합니다.
NavigationRail.builder / BottomNavigationBar.builder: UI 구성 요소 중 커스텀 아이템이 필요할 때 사용합니다.
```
