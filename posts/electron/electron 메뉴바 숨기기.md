## electron 메뉴바 숨김

```js
app.on("ready", function () {
  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 768,
    minWidth: 400,
    minHeight: 200,
    resizable: true,
    backgroundColor: "#222",
    center: true,
    autoHideMenuBar: true, /// 추가
  });
});
```
