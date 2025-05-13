# express long polling

> send() 메서드를 미룸으로써 연결을 지속시킨다.

## client

> 재귀함수를 통해서 서버와 연결을 유지
>
> > 연결이 끊기면 다시 연결을 시도

```js
async function subscribe() {
  let response = await fetch("/subscribe");

  if (response.status == 502) {
    // Status 502 is a connection timeout error,
    // may happen when the connection was pending for too long,
    // and the remote server or a proxy closed it
    // let's reconnect
    await subscribe();
  } else if (response.status != 200) {
    // An error - let's show it
    showMessage(response.statusText);
    // Reconnect in one second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await subscribe();
  } else {
    // Get and show the message
    let message = await response.text();
    showMessage(message);
    // Call subscribe() again to get the next message
    await subscribe();
  }
}

subscribe();
```

## server

```js
const express = require("express");
const router = express.Router();

const subscribers = new Map();

/// /subscribe에 get요청이 오면 subscribers에 추가
router.get("/subscribe", function (req, res, next) {
  const subscriber = {
    id: Math.random(),
    res,
    send(message) {
      this.res.send(message);
    },
  };

  subscribers.set(subscriber.id, subscriber);

  req.on("close", () => {
    subscribers.delete(subscriber.id);
  });
});

/// /publish에 post요청으로 메시지를 보내면 subscribers에 있는 모든 구독자에게 메시지를 보냄
/// 그리고 subscribers를 비움
router.post("/publish", function (req, res, next) {
  const message = req.body.message;

  for (const subscriber of subscribers.values()) {
    subscriber.send(message);
  }

  subscribers.clear();

  res.send("ok");
});

module.exports = router;
```
