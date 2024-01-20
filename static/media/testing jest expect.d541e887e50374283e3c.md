# testing jest expect

```js
/// 같은 값이지 확인 (참조값 포함) (===)
expect(1).toBe(1);
expect(1).not.toBe(2);
expect(1).toBeGreaterThan(0);

/// 내용이 같은지 확인 (참조값 무시) (==)
expect(1).toEqual(1);
expect({ a: 1 }).toEqual({ a: 1 });

/// instanceof
expect(new A()).toBeInstanceOf(A);

/// 에러 발생 여부
expect(() => {
  throw new Error("error");
}).toThrow("error");

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
```
