# webapi Web Worker

## usage

```js
if (window.Worker) {
  const worker = new Worker("worker.js");

  worker.postMessage({ type: "doHeavyJob" });

  worker.onmessage = (event) => {
    console.log(event.data);
  };

  // 워커 종료하기
  worker.terminate();
}
```

## worker.js

```js
function doHeavyJob() {
  // ...
}

self.addEventListener("message", (event) => {
  const { data } = event;
  const { type } = data;

  switch (type) {
    case "doHeavyJob":
      doHeavyJob();
      postMessage("done");
      break;
  }
});
```
