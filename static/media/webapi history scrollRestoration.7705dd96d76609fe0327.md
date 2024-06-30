# webapi history scrollRestoration

```js
if ("scrollRestoration" in history) {
  // Back off, browser, I got this...
  history.scrollRestoration = "manual"; // auto, manual
}

history.popState;
history.pushState;
```
