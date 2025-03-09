# testing angular Generic

> 비슷한 컴포넌트에서 공통적인 행동을 Generic으로 만들어 재사용성을 높이자.

```ts
function sharedBehavior<T>(component: T) {
  it("should be defined", () => {
    expect(component).toBeDefined();
  });
}
```
