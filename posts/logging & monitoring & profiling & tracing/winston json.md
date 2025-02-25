# winston json

```ts
this.logger.info(message, {
  appType: req.headers["X-APP-TYPE"],
  clientIp: req.ip,
  requestMethod: req.method,
  requestUrl: req.url,
  responseStatusCode: statusCode,
  userAgent: req.headers["user-agent"],
  requestBody: JSON.stringify(req.body),
  requestParams: JSON.stringify(req.params),
  requestQuery: JSON.stringify(req.query),
  responseTime: Date.now() - Number(req.headers["X-REQUEST-START"]),
} satisfies INFO_LOG);
```
