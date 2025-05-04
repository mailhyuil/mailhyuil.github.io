# electron electron-log

## install

```sh
npm i electron-log
```

## usage

```js
/// main에서 사용
import log from "electron-log/main";
log.info("Log from the main process");

/// renderer에서 사용
import log from "electron-log/renderer";
log.info("Log from the renderer process");
```
