# html input number digit만 허용

> keyup에 넣어주기

```js
onInput(event: KeyboardEvent): void {
  const inputElement = event.target as HTMLInputElement;
  if (event.key.length > 0 && /\D/.test(event.key)) {
    event.preventDefault();
    return;
  }
}
```
