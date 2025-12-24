# js 디바운싱 & 쓰로틀링

## 디바운싱

모든 이벤트가 끝나고 200ms 후에 요청

```ts
timer: NodeJS.Timeout | undefined;

getSomething() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => console.log('Request'), 200);
}
```

## 쓰로틀링

200ms마다 요청

```ts
timer: NodeJS.Timer;

getSomething() {
  if (!this.timer) {
    this.timer = setTimeout(() => {
      this.timer = null;
      console.log('Request');
    }, 200);
  }
}
```
