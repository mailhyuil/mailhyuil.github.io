# flutter base Rendering pipe

```txt
Widget -> Element -> RenderObject -> Layer -> GPU
```

## ✅ Flutter 렌더링 최적화 규칙 (핵심 리스트)

### 1️⃣ build 단계 (Widget)

- ❗ `build`는 **순수 함수**처럼 유지
- ❌ build 안에서 계산 / IO / Future 생성
- ✅ 가능한 `const` 위젯 사용
- ✅ 작은 위젯으로 쪼개기

### 2️⃣ setState / state 변경

- ❌ 큰 트리에서 setState
- ✅ 가장 아래 위젯에서 setState
- ❌ state 변경 후 같은 값 재할당
- ✅ immutable 업데이트

### 3️⃣ Layout 최적화

- ❌ 불필요한 `IntrinsicHeight / IntrinsicWidth`
- ❌ 중첩 `Expanded / Flexible`
- ✅ 고정 크기면 `SizedBox`
- ✅ 리스트면 `itemExtent` 지정

### 4️⃣ Paint 최적화

- ❌ 매 프레임 paint
- ✅ `shouldRepaint` 정확히 구현
- ✅ `RepaintBoundary`로 영역 분리
- ❌ 불필요한 `Opacity`
- ❌ 복잡한 `ClipPath`

### 5️⃣ Key 사용 규칙

- ❌ index 기반 Key
- ❌ GlobalKey 남용
- ✅ `ValueKey(id)`
- ✅ 리스트에서 identity 명확히

### 6️⃣ 이미지 최적화

- ❌ 원본 고해상도 그대로 사용
- ✅ 서버에서 리사이즈
- ✅ `cacheWidth / cacheHeight`
- ✅ `cached_network_image`

### 7️⃣ 리스트 / 스크롤

- ❌ `ListView(children: [...])`
- ✅ `ListView.builder`
- ✅ `cacheExtent` 조절
- ✅ pagination

### 8️⃣ 애니메이션

- ❌ build에서 애니메이션 값 계산
- ✅ `AnimatedBuilder`
- ✅ `TickerProvider` 정확히 관리
- ❌ AnimationController 누수

### 9️⃣ Async / isolate

- ❌ 큰 JSON 파싱 main isolate
- ✅ 필요 시 `compute`
- ❌ isolate 남용

### 🔟 디버깅 습관

- ✅ `RepaintRainbow` 확인
- ✅ `debugPrintRebuildDirtyWidgets`
- ✅ Flutter DevTools Timeline 사용

#### 안티 패턴

```text
• build 안에서 Future 생성
• GlobalKey 사용
• ListView(children: …)
• index 기반 Key
• Opacity + ClipPath 중첩
```
