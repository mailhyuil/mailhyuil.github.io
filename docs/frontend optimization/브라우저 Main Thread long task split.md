# long task split

```js
// 같은 함수에 감싸져 있으면 하나의 태스크로 실행됨
function saveSettings() {
  validateForm();
  showSpinner();
  saveToDatabase();
  updateUI();
  sendAnalytics();
}

// setTimeout을 사용하면 별도의 작업으로 분리된다. defer
function saveSettings() {
  // Do critical work that is user-visible:
  validateForm();
  showSpinner();
  updateUI();

  // Defer work that isn't user-visible to a separate task:
  setTimeout(() => {
    saveToDatabase();
    sendAnalytics();
  }, 0);
}
```
