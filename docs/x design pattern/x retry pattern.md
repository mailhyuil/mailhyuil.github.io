# x retry pattern

> 에러 발생 시 재시도하는 패턴

```ts
const retry = async (callback: () => void, max: number = 3) => {
  let attempt = 0;
  let result;
  while (true) {
    try {
      result = callback();
      break;
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (attempt >= max - 1) {
        throw error;
      }
      attempt++;
    }
  }
  return result;
};

retry(() => {
  console.log("hello");
  throw new Error("error");
});
```
