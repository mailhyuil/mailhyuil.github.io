# flutter base lifecycle WidgetsBindingObserver

- `WidgetsBindingObserver`는 **Flutter 앱의 생명주기(App Lifecycle)와 시스템 이벤트를 감지하기 위한 인터페이스**다.
- 앱이 **백그라운드로 가는지**, **다시 포그라운드로 돌아오는지**, **화면 회전/텍스트 배율 변경** 같은 변화를 감지할 때 사용한다.
- firebase를 사용한 유저의 상태 변화를 감지할 때 사용 - 유저가 강제로 앱을 종료해도 상태 변화를 감지할 수 있다.

---

## 1. WidgetsBindingObserver란?

`WidgetsBindingObserver`는 Flutter 프레임워크에서 제공하는 **Observer 패턴 기반 인터페이스**로,
앱 전반에서 발생하는 **플랫폼/시스템 이벤트**를 위젯에서 수신할 수 있게 해준다.

대표적으로 감지 가능한 이벤트:

- 앱 생명주기 변화 (foreground / background)
- 화면 크기 변경
- 텍스트 스케일 변경
- 플랫폼 접근성 설정 변경

---

## 2. 언제 사용하는가?

다음과 같은 상황에서 사용한다.

- 앱이 **백그라운드로 갈 때 API 호출 중단**
- 포그라운드 복귀 시 **데이터 새로고침**
- 앱 최소화 시 **타이머/애니메이션 중지**
- 화면 회전 시 **레이아웃 재계산**
- 텍스트 크기 변경 감지

👉 **화면 단위 로직이 아니라 “앱 상태 변화”를 감지해야 할 때** 사용한다.

---

## 3. 기본 사용 방법

### 1️⃣ State 클래스에 mixin

```dart
class MyPageState extends State<MyPage>
    with WidgetsBindingObserver {
```

### 2️⃣ Observer 등록

```dart
@override
void initState() {
  super.initState();
  WidgetsBinding.instance.addObserver(this);
}
```

### 3️⃣ Observer 해제 (중요)

```dart
@override
void dispose() {
  WidgetsBinding.instance.removeObserver(this);
  super.dispose();
}
```

⚠️ `dispose`에서 제거하지 않으면 **메모리 누수** 발생 가능

---

## 4. 가장 중요한 콜백: 앱 생명주기

### didChangeAppLifecycleState

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

### AppLifecycleState 의미

| 상태       | 설명                             |
| ---------- | -------------------------------- |
| `resumed`  | 앱이 활성화된 상태               |
| `inactive` | 전환 중 상태 (iOS에서 자주 발생) |
| `paused`   | 백그라운드                       |
| `detached` | Flutter 엔진과 분리됨            |

---

## 5. 기타 자주 쓰이는 콜백

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

---

## 6. 실전 예제: 백그라운드 진입 시 타이머 중지

```dart
class TimerPageState extends State<TimerPage>
    with WidgetsBindingObserver {

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.paused) {
      stopTimer();
    } else if (state == AppLifecycleState.resumed) {
      resumeTimer();
    }
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }
}
```

---

## 7. 자주 하는 실수

❌ `dispose()`에서 `removeObserver` 안 함
❌ 화면 생명주기(`initState`)와 앱 생명주기 혼동
❌ 단순 화면 이동 감지용으로 사용

👉 **페이지 이동 감지에는 `RouteObserver`**,
👉 **앱 상태 감지에는 `WidgetsBindingObserver`**

---

## 8. 정리 요약

- `WidgetsBindingObserver`는 **앱 전역 상태 변화 감지용**
- 가장 많이 쓰는 콜백은 `didChangeAppLifecycleState`
- 반드시 `addObserver` / `removeObserver` 쌍으로 관리
- 화면 단위 로직보다는 **시스템 이벤트 처리에 적합**

---

### 한 줄 요약

> **WidgetsBindingObserver는 “Flutter 앱이 지금 살아 있는지, 쉬고 있는지”를 알려주는 감시자다.**

---

원하면 다음 주제로도 정리해줄 수 있어요 👇

- RouteObserver vs WidgetsBindingObserver 차이
- 백그라운드 제한(Android/iOS) 대응 전략
- Riverpod / Bloc에서 생명주기 처리 패턴
