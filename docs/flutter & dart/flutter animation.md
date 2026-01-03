# flutter Animation

> curve : easeIn, boundInOut 같은 거

## 암묵적 애니메이션

> 위젯 내에서 지원하는 애니메이션
>
> > 밑의 클래스로 애니메이션 시킬 요소를 감싸준다.

```dart
AnimatedContainer: 애니메이션 동안 컨테이너의 속성을 자동으로 보간하여 애니메이션 효과를 줍니다.
AnimatedOpacity: 투명도를 애니메이션화하여 페이드 인 및 페이드 아웃 효과를 생성합니다.
AnimatedCrossFade: 두 개의 다른 위젯 사이를 애니메이션화하며 부드러운 크로스 페이드 효과를 만듭니다.
AnimatedDefaultTextStyle: 텍스트 스타일을 애니메이션화하여 부드러운 텍스트 스타일 변경을 가능하게 합니다.
AnimatedAlign: 위젯의 정렬을 애니메이션화하여 위치 이동 효과를 만듭니다.
AnimatedPositioned: 위젯의 위치를 애니메이션화하여 부드러운 이동 효과를 만듭니다.
AnimatedPadding: 패딩 값을 애니메이션화하여 부드러운 패딩 변경 효과를 생성합니다.
AnimationController: 애니메이션의 제어를 위한 컨트롤러로, 애니메이션의 시작, 정지 및 반복을 관리합니다.
```

## 명시적 애니메이션

> 커스텀 애니메이션
>
> > ~~Transition으로 끝나는 빌트인 위젯을 사용하거나 AnimationBuilder를 사용해서 커스텀하는 방법이 있다.

```dart
Animation: 애니메이션의 현재 값과 상태를 나타내는 클래스입니다.
AnimationController: 애니메이션의 제어를 위한 컨트롤러로, 애니메이션의 시작, 정지, 반복 및 시간 제어를 관리합니다.
Tween: 애니메이션 값 범위를 지정하고 애니메이션 효과를 만들기 위해 사용됩니다. 주어진 시작 값과 종료 값 사이의 애니메이션을 생성합니다. AnimationController와 함께 사용됩니다.
// Animation<double> _animation = Tween(begin: 0.0, end: 1.0).animate(_controller);
CurvedAnimation: 애니메이션에 사용할 곡선을 정의하는 클래스입니다. 애니메이션의 진행률에 대한 커브를 지정하여 애니메이션 효과를 커스텀하게 조정할 수 있습니다.
AnimatedBuilder: 커스텀 애니메이션을 구현하기 위해 사용되며, 애니메이션의 중간 값을 계산하는 데 사용됩니다. 애니메이션 값을 사용하여 위젯을 다시 빌드하고 업데이트할 수 있습니다.
AnimatedWidget: 위젯의 특정 속성을 애니메이션화하는 데 사용되는 추상 클래스입니다. 자체적으로 위젯이므로 AnimatedBuilder와 같이 사용하지 않아도 됩니다.
AnimatedList: 리스트의 항목을 추가, 삭제 또는 재정렬하는 애니메이션을 지원하는 위젯입니다.
AnimatedOpacity: 투명도를 애니메이션화하여 페이드 인 및 페이드 아웃 효과를 생성합니다.
AnimatedPositioned: 위젯의 위치를 애니메이션화하여 부드러운 이동 효과를 만듭니다.
AnimatedCrossFade: 두 개의 다른 위젯 사이를 애니메이션화하며 부드러운 크로스 페이드 효과를 만듭니다.
AnimatedSwitcher: 자식 위젯을 전환하는 애니메이션을 제공합니다. 위젯 전환 시 부드러운 애니메이션 효과를 적용할 수 있습니다.
```

# vsync in AnimationController

> 애니메이션 최적화 및 언제 재생할지 시간을 세어주는 등의 기능을 위해 필요하다.
>
> > 여기서는 this 라고 되어 있는데,
> >
> > > 그말은 즉 위에서 레퍼런스가 존재하는 '객체' 가 vsync역할을 해준다는 의미이다.
> > >
> > > > mixin을 사용했기에 가능하다.
