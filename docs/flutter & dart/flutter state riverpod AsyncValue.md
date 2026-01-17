# flutter state riverpod AsyncValue

비동기 상태를 값으로 표현하는 타입

## AsyncValue의 상태

```txt
AsyncData: 데이터 존재
AsyncLoading: 로딩 중
AsyncError: 에러 발생
```

## AsyncValue의 사용

```dart
AsyncValue<T> value = AsyncValue.data(value);
AsyncValue<T> value = AsyncValue.loading();
AsyncValue<T> value = AsyncValue.error(error);
```
