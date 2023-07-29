# flutter WidgetTree, ElementTree, RenderTree

> 퍼모먼스 최적화를 위해 알아야 할 것들
>> 위젯 트리만으로 구성이 되어있다면 하나의 위젯이 바뀌면 그 자손의 위젯을 모두 다시 그려야 한다.
## Widget Tree
> 불변
>> 생성 및 파기 비용이 작다
## Element Tree
> 가변
>> 위젯 트리의 상태를 관리
>>> RenderObject Tree의 라이프 사이클을 관리
## Render Tree
> 가변
>> 렌더링, 페인팅 역할
>>> flutter가 실제로 참조하는 것은 RenderObject Tree이다