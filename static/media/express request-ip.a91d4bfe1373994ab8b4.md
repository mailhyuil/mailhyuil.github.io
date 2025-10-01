# express request-ip

> request ip를 얻을 수 있다.

## install

```sh
npm i request-ip
```

## usage

```js
import requestIp from "request-ip";

const ipMiddleware = function (req, res, next) {
  const ip = requestIp.getClientIp(req);
  next();
};
```
