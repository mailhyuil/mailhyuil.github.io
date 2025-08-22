# js error retry

```js
let retryCount = 3; // 최대 재시도 횟수

while (retryCount > 0) {
  try {
    const file = fs.readFileSync("hello.txt", "utf-8");
    return file;
  } catch (error) {
    console.error("Error from reading hello.txt", error);
    retryCount--;

    if (retryCount > 0) {
      console.log(`Retrying... (${retryCount} attempts left)`);
      // 일정 시간 동안 대기하거나, 다른 재시도 전략을 선택할 수 있습니다.
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1초 대기
    } else {
      // 최대 재시도 횟수를 초과했을 때의 처리
      console.error("Max retry count exceeded. Unable to read hello.txt");
      throw error; // 예외를 다시 던지거나, 특정 값을 반환할 수 있습니다.
    }
  }
}
```
