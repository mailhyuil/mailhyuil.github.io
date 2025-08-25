# keydown event

> event.key 로 누른 키를 알 수 있다

```ts
const onKeydown = (event) => {
  const key = event.key;

  if (key === "ArrowDown") {
    toBeSelectedIndex.value !== props.items?.length - 1
      ? (toBeSelectedIndex.value += 1)
      : (toBeSelectedIndex.value = 0);
    scroll(toBeSelectedIndex.value);
  } else if (key === "ArrowUp") {
    toBeSelectedIndex.value !== 0
      ? (toBeSelectedIndex.value -= 1)
      : (toBeSelectedIndex.value = props.items?.length - 1);
    scroll(toBeSelectedIndex.value);
  } else if (key === "Enter") {
    selected.value = props.items[toBeSelectedIndex.value][props.bindLabel];
    emit(
      "update:modelValue",
      props.items[toBeSelectedIndex.value][props.bindValue]
    );

    isOpen.value = false;
    select.value?.blur();
  }
};
```
