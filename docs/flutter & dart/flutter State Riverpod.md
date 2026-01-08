# flutter State Riverpod

| Riverpod                | Angular                       | 설명                                   |
| ----------------------- | ----------------------------- | -------------------------------------- |
| State                   | Component State / Model       | 템플릿이 그리는 순수 데이터            |
| Notifier                | Service / Store               | 상태를 관리하는 로직 계층              |
| Provider                | Injector + Store 등록         | 객체 생성, 보관, 연결                  |
| ref.watch               | async pipe / change detection | 상태 변경 시 UI 업데이트               |
| ref.read                | service method call           | 단순 액션 호출                         |
| ref.listen              | Effect / Subscription         | 사이드 이펙트 처리                     |
| -------------           | ----------------------------- | ---------------------------            |
| AsyncNotifier           | Service + HttpClient          | 비동기 상태 관리 로직 계층             |
| AsyncValue              | Observable                    | 비동기 상태 관리                       |
| AsyncValue.when         | Observable.subscribe          | 상태 변경 시 UI 업데이트               |
| AsyncValue.maybeWhen    | Observable.subscribe          | 일부 상태만 처리하고 나머지는 fallback |
| AsyncValue.whenOrNull   | Observable.subscribe          | 필요한 상태만 처리, 나머지는 null      |
| AsyncValue.value        | Observable.subscribe          | data 상태면 값 반환                    |
| AsyncValue.valueOrNull  | Observable.subscribe          | data 상태면 값 반환                    |
| AsyncValue.requireValue | Observable.subscribe          | data 상태가 아니면 에러                |
| AsyncValue.guard        | -                             | -                                      |

## 1. Provider의 기본 타입들 (Foundation)

### Provider

- 읽기 전용 값을 제공
- **Dependency Injection 용도**

### StateProvider

- 상태 변경 가능한 값을 제공
- int, bool, enum 등에 적합

## 2. 비동기 전용 Provider

### FutureProvider

- 1회성 비동기 데이터 fetch
- 자동 캐싱
- 로딩 및 에러 상태 자동 관리
- 단순 조회용

### StreamProvider

- Stream 기반 상태 관리
- 실시간으로 값이 계속 바뀌는 데이터에 적합
- socket, firestore 같은 실시간 데이터에 적합

## 3. 현대 Riverpod의 중심

### Notifier

- angular의 service와 비슷한 역할
- 동기 상태 관리
- immutable state 기반
- 비즈니스 로직 중심

### AsyncNotifier

- angular의 service + http와 비슷한 역할
- 비동기 상태 관리의 표준
- loading, error, data lifecycle 포함
- refresh, mutation, retry 구현에 유리

## 4. Provider 생성 방식 확장

### family

- Provider에 파라미터 전달
- id 기반 데이터 조회
- 상세 화면에서 필수적으로 사용

### autoDispose

- 참조가 끊기면 자동으로 dispose
- 메모리 관리에 유리
- 탭 또는 라우트 단위 상태에 적합

## 5. 상태 관찰 및 상호작용 API

### ref.watch

- 상태 변화를 관찰
- UI rebuild 트리거

### ref.read

- 상태를 한 번만 읽음
- 이벤트 또는 액션 처리에 사용

### ref.listen

- 상태 변화를 감지하여 side effect 처리
- navigation, snackbar, logging 등에 사용

### ref.invalidate

- Provider를 강제로 초기화
- 다음 접근 시 다시 실행됨

### ref.refresh

- invalidate 후 즉시 재실행

## 6. Provider 생명주기 및 메모리 관리

### Provider lifecycle

- create
- listen
- dispose

### onDispose

- Provider dispose 시점에 실행
- stream close, controller dispose 등 리소스 정리

### keepAlive

- autoDispose Provider의 dispose 방지
- 특정 조건에서 상태 유지

## 7. 에러 및 로딩 상태 모델

### `AsyncValue<T>`

- AsyncLoading
- AsyncData
- AsyncError

상태 분기는 일반적으로 다음 형태를 따른다  
data 상태  
loading 상태  
error 상태

## 8. 의존성 관리 및 재계산

### Provider dependency graph

- Provider가 다른 Provider를 watch
- 의존성이 변경되면 자동으로 재계산

### select

- 상태의 일부만 구독
- 불필요한 rebuild 방지

## 9. 테스트 관련 기술

### ProviderContainer

- 위젯 없이 Provider 테스트 가능
- 순수 로직 테스트에 사용

### overrideWith

- Provider 구현 교체
- mock 주입 및 환경별 설정

## 10. 앱 아키텍처 관련

### Global Provider와 Scoped Provider

- Global Provider는 앱 전역 상태
- Scoped Provider는 화면 또는 플로우 단위 상태

### ProviderObserver

- Provider 상태 변화 관찰
- 디버깅, 로깅, analytics 용도

## 11. Flutter 연동 전용 구성요소

### ConsumerWidget

### ConsumerStatefulWidget

### Consumer

- Flutter UI에서 Provider 접근
- ref.watch, ref.read 사용

## 12. 고급 패턴 및 실무 테크닉

- AuthGate 패턴
- Paywall 또는 PurchaseGate 패턴
- bootstrap provider
- optimistic update
- pagination과 AsyncNotifier 조합
- retry 및 backoff 전략
- cache와 TTL 전략

## 요약

DI는 Provider  
단순 상태는 StateProvider  
비동기 조회는 FutureProvider 또는 StreamProvider  
비즈니스 로직은 Notifier  
비동기 비즈니스 로직은 AsyncNotifier  
확장은 family와 autoDispose  
상태 제어는 ref.watch, ref.read, ref.listen, ref.refresh  
생명주기 관리는 onDispose와 keepAlive  
UI 연동은 Consumer 계열
