# webapi navigator serviceWorker

## 사용

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/serviceworker.js");
}
```

## serviceworker.js

```js
// This code executes in its own worker or thread
self.addEventListener("install", (event) => {
  console.log("Service worker installed");
});
self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});
```
