# testing jest expect

```js
/// 같은 값이지 확인 (참조값 포함) (===)
/// toBe() 대신 toEqual()을 사용하기를 권장
expect(1).toBe(1);
expect(1).not.toBe(2);

/// 내용이 같은지 확인 (참조값 무시) (==)
expect(1).toEqual(1);
expect({ a: 1 }).toEqual({ a: 1 });

/// (>) (>=) (<) (<=)
expect(1).toBeGreaterThan(0);
expect(1).toBeGreaterThanOrEqual(1);
expect(1).toBeLessThan(2);
expect(1).toBeLessThanOrEqual(1);

/// true, false
expect(true).toBeTruthy();
expect(false).toBeFalsy();

/// length
expect("hello").toHaveLength(5);

/// instanceof
expect(new A()).toBeInstanceOf(A);

/// 정규식
expect("hello").toMatch(/ello/);

/// 배열에 특정 요소가 있는지
expect(["a", "b", "c"]).toContain("b");

/// 비동기 코드 테스트
test("async test", async () => {
  const result = await asyncFunc();
  expect(result).toBe("hello");
});

/// 특정 시간 이내에 완료되는지
test("async test", async () => {
  const result = await asyncFunc();
  expect(result).toBe("hello");
}, 1000);

/// 함수 실행 여부
const mockFn = jest.fn();
mockFn();
expect(mockFn).toBeCalled();

/// 비동기
expect(asyncFunc()).resolves.toBe("hello");
expect(asyncFunc()).rejects.toBe("error");
```
