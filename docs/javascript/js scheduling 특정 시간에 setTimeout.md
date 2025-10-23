# js scheduling 특정 시간에 setTimeout

```js
// 00:00 시에 실행
const now = new Date();
const targetDate = new Date();
targetDate.setDate(now.getDate() + 1);
targetDate.setHours(0, 0, 0, 0);
const ms = targetDate.getTime() - now.getTime();

setTimeout(() => {
  App.application.relaunch();
  App.application.quit();
}, ms);
```
