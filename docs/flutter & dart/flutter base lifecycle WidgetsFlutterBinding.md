# flutter base lifecycle WidgetsFlutterBinding

- WidgetsBinding이란 dart 코드와 native 코드를 연결하는 역할을 한다.
- Dart(Widgets) <-> Flutter Engine <-> NativeOS
- NativeOS에서 온 이벤트를 Dart로 전달하거나 Dart에서 NativeOS로 이벤트를 전달하는 역할을 한다.

## WidgetsFlutterBinding

```dart
// WidgetsFlutterBinding의 실제 정의
class WidgetsFlutterBinding extends BindingBase
  with GestureBinding,          // 제스처 처리 (e.g. 터치, 스와이프, 확대/축소 등)
       SchedulerBinding,         // 프레임 스케줄링 (e.g. 애니메이션, 타이머, 비동기 작업 등)
       ServicesBinding,          // 플랫폼 서비스 (e.g. 알림, 푸시, 위치 등)
       PaintingBinding,          // 페인팅 (e.g. 그림, 이미지 렌더링)
       SemanticsBinding,         // 접근성 (e.g. 접근성 테스트)
       RendererBinding,          // 렌더링 (e.g. 렌더링 트리 관리)
       WidgetsBinding {          // 위젯 관리 (e.g. 위젯 트리 관리)

  static WidgetsBinding ensureInitialized() {
    // 싱글톤 인스턴스 반환
    WidgetsFlutterBinding();
    return WidgetsBinding.instance;
  }
}
```

## example

```dart
class GestureBinding {
  // 네이티브에서 온 이벤트를 Dart로 전달
  void handlePointerEvent(PointerEvent event) {
    // 터치 이벤트를 위젯에 전달
    dispatchEvent(event, hitTestResult);
  }

  // 이벤트 흐름만 관리
  HitTestResult hitTest(Offset position) {
    // 어떤 위젯이 터치됐는지만 찾아줌
  }
}
```
