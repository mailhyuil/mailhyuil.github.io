# vue nextTick

1. 데이터를 변경한다.
2. Vue는 즉시 DOM을 바꾸지 않고 다음 "틱(Tick)"까지 기다린다.
3. 그동안 발생한 모든 변경사항을 모아 한 번에 DOM을 업데이트한다.
4. nextTick()은 바로 이 업데이트가 끝난 직후를 잡아내는 도구입니다.

```ts
const showInput = ref(false);
const inputRef = ref(null);

const handleClick = async () => {
  showInput.value = true; // 1. 데이터를 바꿈 (v-if로 인풋이 나타나야 함)

  // inputRef.value.focus(); // 에러! 아직 DOM에 인풋이 생기기 전임

  await nextTick(); // 2. DOM이 실제로 업데이트될 때까지 기다림

  inputRef.value.focus(); // 3. 이제 성공!
};
```
