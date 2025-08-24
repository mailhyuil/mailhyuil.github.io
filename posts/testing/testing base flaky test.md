# testing base flaky test

> **플레이키 테스트**는 동일한 코드에 대해 실행할 때마다 결과가 달라지는 불안정한 테스트를 의미합니다.
>
> > 플레이키 테스트는 CI/CD 파이프라인의 신뢰성을 떨어뜨리므로 발견 즉시 수정해야 합니다.

### 주요 특징

- 🔄 **비결정적(Non-deterministic)**: 같은 조건에서도 성공/실패가 무작위로 발생
- ⏰ **타이밍 의존적**: 실행 시간이나 순서에 따라 결과가 변함
- 🌐 **환경 의존적**: 네트워크, 시스템 리소스 등 외부 요인에 영향받음

### 일반적인 원인들

1. **비동기 처리 문제**

   ```javascript
   // 잘못된 예 - 타이밍 이슈
   test("flaky async test", () => {
     fetchData();
     expect(data).toBeDefined(); // data가 아직 로드되지 않을 수 있음
   });
   ```

2. **날짜/시간 의존성**

   ```javascript
   // 플레이키한 코드
   expect(new Date().getHours()).toBe(9); // 실행 시간에 따라 실패
   ```

3. **전역 상태 공유**
   ```javascript
   // 테스트 간 상태 공유로 인한 문제
   let globalCounter = 0;
   ```

### React 프로젝트에서의 해결방안

1. **적절한 대기 처리**

   ```javascript
   // Jest + React Testing Library
   await waitFor(() => {
     expect(screen.getByText("로딩 완료")).toBeInTheDocument();
   });
   ```

2. **Mock 사용**

   ```javascript
   // 날짜 Mock
   jest.spyOn(Date, "now").mockReturnValue(1234567890);
   ```

3. **독립적인 테스트 환경**
   ```javascript
   beforeEach(() => {
     // 각 테스트마다 초기화
     cleanup();
   });
   ```
