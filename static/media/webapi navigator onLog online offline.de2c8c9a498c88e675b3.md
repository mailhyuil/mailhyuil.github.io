# webapi navigator online offline

## online인 상태인지 확인

```js
if (navigator.onLine) {
  console.log("online");
} else {
  console.log("offline");
}
```

## online offline event

```js
window.addEventListener("offline", (e) => {
  console.log("offline");
});

window.addEventListener("online", (e) => {
  console.log("online");
});
```
