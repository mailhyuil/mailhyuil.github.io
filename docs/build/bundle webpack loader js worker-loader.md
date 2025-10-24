# bundle webpack loader js worker-loader

> 웹워커 사용

## webpack.config.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: { loader: "worker-loader" },
      },
    ],
  },
};
```

## job.worker.js

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

## main.js

```js
import Worker from "./job.worker.js";

const worker = new Worker();

worker.postMessage({ type: "doHeavyJob" });

worker.onmessage = (event) => {
  console.log(event.data);
};

// 워커 종료하기
worker.terminate();
```
