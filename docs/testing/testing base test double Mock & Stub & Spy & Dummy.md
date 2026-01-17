# testing base test double Mock & Stub & Spy & Dummy

> test double이란 실제 객체를 대신해서 테스트할 때 사용하는 대체 객체

## Dummy

- 단순히 “자리를 채우기 위한 객체”
- 테스트 대상 로직에서는 절대 사용되지 않는다.
- 테스트용 인자 역할, 실제 로직은 없음.
- 메서드 시그니처를 만족시키기 위함
- 인자가 필요하지만 값은 전혀 중요하지 않을 때

```dart
final dummyUser = User(id: 'dummy');
service.doSomething(dummyUser); // 실제로는 사용 안 됨
```

## Stub

- “호출되면 어떤 값을 반환할지를 정의해주는 객체"
- 테스트 흐름을 제어하기 위해 미리 정해진 결과를 제공

```dart
// ts
jest.mock('UserRepository').mockReturnValue({
  fetchUser: jest.fn().mockResolvedValue(User(id: 'u1')),
});
// dart
when(repo.fetchUser()).thenReturn(User(id: 'u1'));
```

## Mock

- 호출 검증 + 반환값 설정을 모두 지원하는 테스트 객체
- “이 메서드가 호출됐는가?”, “몇 번 호출됐는가?”, “어떤 인자로 호출됐는가?” 를 검증하기 위함
- stub 기능 포함, 호출 검증(verify) 가능

## Spy

- 실제 객체를 사용하면서 호출 기록만 추적하는 객체
- 실제 로직은 실행, 호출 정보만 관찰
