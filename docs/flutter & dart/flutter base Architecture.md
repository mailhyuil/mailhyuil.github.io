# Flutter base Architecture

## 1. Widget

### 정의

> **UI를 선언하는 존재**

### 역할

- 화면 레이아웃과 UI 구성
- 사용자 입력을 받아 이벤트 트리거
- 상태를 “표현”만 함 (비즈니스 로직 ❌)

### 특징

- 선언적 (declarative)
- 불변(immutable)
- 가능한 한 가볍게 유지

### 예시

- `ReaderPage`
- `LoginScreen`
- `BookListView`

---

## 2. Provider (Riverpod 기준)

- ref.read(provider) = angular의 inject()
- ref.watch(provider.notifier) = angular의 inject() + watch

### 정의

> **상태나 의존성을 앱 전역에서 안전하게 제공·관리하는 통로**

⚠️ Provider는 **상태 그 자체가 아님**

### 역할

- 상태(State)를 감싸서 노출
- Service 같은 의존성 주입
- 생성 / 캐싱 / dispose 관리
- 테스트 시 override 가능

### 특징

- UI와 비즈니스 로직 사이의 연결 지점
- 전역 접근 가능
- lifecycle 관리 책임

### 예시

- `Provider`
- `Notifier`
- `AsyncNotifier`

---

## 3. Service

### 정의

> **UI와 무관한 비즈니스 로직을 수행하는 객체**

### 역할

- API 통신
- 로컬 DB 접근
- 파일 I/O
- 인증 / 결제 / 외부 SDK 래핑

### 특징

- Flutter 의존 ❌ (순수 Dart 권장)
- 재사용 가능
- 테스트 용이

### 예시

- `BookService`
- `AuthService`
- `ReadingProgressService`
- `PurchaseService`

---

## 4. Controller

### 정의

> **Widget의 행동(UI 내부 상태)을 명령형으로 제어하는 객체**

### 역할

- 텍스트 입력 제어
- 스크롤 위치 이동
- 애니메이션 시작/중지
- 페이지 이동

### 특징

- UI 전용
- Widget 생명주기와 함께 관리
- `dispose()` 필수
- 비즈니스 로직 ❌

### 예시

- `TextEditingController`
- `ScrollController`
- `PageController`
- `AnimationController`

---

## 전체 구조 흐름 (권장)

```text
Widget
 ├─ Controller (UI 제어)
 └─ Provider / Notifier
      └─ Service
           └─ API / DB / File / SDK
```
