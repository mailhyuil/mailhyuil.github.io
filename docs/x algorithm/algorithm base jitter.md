# algorithm base jitter

```js
function jitter(value, range) {
  // range은 jitter의 범위입니다.
  // 예를 들어, range이 0.1이면 입력값에 최대 10%의 잡음이 추가됩니다.

  // 무작위로 -range와 range 사이의 값을 선택하여 입력값에 추가합니다.
  const jitterValue = Math.random() * 2 * range - range;

  // 입력값에 잡음을 추가하여 변환된 값을 반환합니다.
  return value + jitterValue;
}

// 사용 예시
const inputValue = 100;
const jitteredValue = jitter(inputValue, 0.1);
console.log(jitteredValue);
```
