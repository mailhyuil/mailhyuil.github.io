# flutter base lifecycle flutter_hooks

- flutter_hooks는 훅을 사용하여 상태를 관리하는 라이브러리입니다.
- riverpod는 Global State를 관리하고 Hooks는 Local State를 관리합니다.
- 생명주기·참조 안정성·dispose를 훅이 대신 관리해줍니다.
- useScrollController()는 rebuild가 아무리 일어나도 같은 ScrollController 인스턴스 유지

## install

```sh
flutter pub add flutter_hooks
flutter pub add hooks_riverpod
```

## usage

```txt
useEffect((){}, [dependency]): 최초 한번 실행 후, 배열내의 값이 하나라도 값, 참조값이 변경될 때마다 실행
useListenable(listenable): listenable의 값이 변경될 때마다 실행
useState(initialValue): 리액트의 useState와 같습니다. 값이 바뀌면 위젯이 리빌드됩니다.
useMemoized(() => value): 계산 비용이 비싼 객체를 생성하고 저장해둡니다. (캐싱)
useRef(initialValue): 값이 바뀌어도 위젯을 리빌드하지 않는 저장공간입니다. (DOM 요소 접근이나 이전 값 보관용)

useTextEditingController(): 텍스트 입력 컨트롤러 생성. (자동 dispose)
useScrollController(): 리스트 스크롤 컨트롤러 생성. 이 controller는 위젯이 dispose 될 때 자동으로 dispose 됩니다.
usePageController(): PageView용 컨트롤러 생성.
useTabController(): 탭바용 컨트롤러 생성.
useFocusNode(): 포커스 관리용 노드 생성.

useAnimationController(): 애니메이션 컨트롤러 생성. (vsync 설정을 알아서 해줌)
useAnimation(animation): 애니메이션 값이 바뀔 때마다 위젯을 리빌드하게 함.

useOnAppLifecycleStateChange(): 앱이 백그라운드로 가거나 포그라운드로 올 때를 감지합니다.
useStream(): StreamBuilder 없이 스트림을 직접 구독합니다.
useFuture(): FutureBuilder 없이 비동기 데이터를 직접 구독합니다.
```
