# flutter optimization

1. 과도한 리빌드 방지

   - 상태관리를 잘못하면 위젯이 과도하게 리빌드 된다.

2. 비효율적인 리스트 & 그리드 렌더링 방지

   - `itemBuilder`를 사용 (virtual scrolling)
   - 데이터 캐싱

3. 무거운 UI 스레드 사용 방지

   - 네트워크 요청, JSON 파싱, 이미지 처리, 데이터 처리는 `isolate`, `compute` 함수를 사용

4. 메모리 누수

   - 메모리 누수 방지를 위해 `dispose`, `cancel`, `close` 함수를 사용

5. 최적화되지 않은 이미지
   - 이미지 최적화를 위해 `Image.network`, `Image.asset` 함수를 사용
