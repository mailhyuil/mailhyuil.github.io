# flutter base lifecycle WidgetsBindingObserver

- 앱이 **백그라운드로 갈 때 API 호출 중단**
- 포그라운드 복귀 시 **데이터 새로고침**
- 앱 최소화 시 **타이머/애니메이션 중지**
- 화면 회전 시 **레이아웃 재계산**
- 텍스트 크기 변경 감지
- Widgets/Notifiers/Services/Controllers/etc.에서 사용할 수 있다.

## usage

```dart
class MyPageState extends State<MyPage> with WidgetsBindingObserver {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.detached || state == AppLifecycleState.paused) {
      // 앱이 종료되기 직전 또는 백그라운드 진입 시
      // 앱 종료는 호출을 보장하지 않음 (e.g. 강제 종료 등)
      // do something
    }
  }
}
```

### 앱종료 & 백그라운드 & 포그라운드 & 비활성화 감지

```dart
@override
void didChangeAppLifecycleState(AppLifecycleState state) {
  switch (state) {
    case AppLifecycleState.resumed:
      // 앱이 포그라운드로 돌아옴
      break;
    case AppLifecycleState.inactive:
      // 전화 수신, 시스템 UI 등장 등
      break;
    case AppLifecycleState.paused:
      // 백그라운드 진입
      break;
    case AppLifecycleState.detached:
      // 앱이 완전히 종료되기 직전
      break;
  }
}
```

### 화면 크기 변경 (회전 등)

```dart
@override
void didChangeMetrics() {
  // MediaQuery size 변경 감지
}
```

### 텍스트 배율 변경

```dart
@override
void didChangeTextScaleFactor() {
  // 시스템 글자 크기 변경
}
```

### 접근성 설정 변경

```dart
@override
void didChangeAccessibilityFeatures() {
  // 접근성 옵션 변경
}
```
