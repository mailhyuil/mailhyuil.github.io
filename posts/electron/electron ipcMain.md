# electron ipcMain

## to Browser from Main

> preload.js

```js
// preload.js

const { contextBridge, ipcRenderer } = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld("api", {
  send: (channel, data) => {
    // whitelist channels
    let validChannels = ["toMain"];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel, func) => {
    let validChannels = ["fromMain"];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
});
```

## to Main from Browser

> ipcMain

```js
// ipcMain

ipcMain.on("toMain", (event, args) => {
  fs.readFile("path/to/file", (error, data) => {
    // Do something with file contents

    // Send result back to renderer process
    win.webContents.send("fromMain", responseObj);
  });
});
```

## Browser

```js
// Called when message received from main process
window.api.receive("fromMain", (data) => {
  console.log(`Received ${data} from main process`);
});

// Send a message to the main process
window.api.send("toMain", "some data");
```
