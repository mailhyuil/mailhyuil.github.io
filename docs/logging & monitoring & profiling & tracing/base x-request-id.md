# base x-request-id

특정 요청에서 발생한 에러를 추적하기 위한 id  
로그에 x-request-id를 추가하여 특정 요청에서 발생한 에러를 추적할 수 있다.

1. client에서 요청 시 x-request-id 헤더를 추가

```ts
const apiReq = req.clone({
  withCredentials: true,
  setHeaders: {
    "x-request-id": uuidv4(),
  },
});
```

2. 모든 로그 시스템에 x-request-id를 추가

```ts
this.logger.error(`
REQUEST_ID=${req.headers["x-request-id"]}
CLIENT_IP=${req.ip}
USER_AGENT=${req.headers["user-agent"]}
METHOD=${req.method}
PATH=${req.path}
STATUS_CODE=${errorStatusCode}
MESSAGE=${devMessage}
TIMESTAMP=${clientResponse.timestamp}
ERROR=${JSON.stringify(errorInfo)}
ERROR_STACK=${errorStack}
CAUSE=${cause}
`);
```

3. 문제가 발생 시 에러 로그를 찾음
4. 다른 로그 시스템 (e.g. datadog, sentry)에서 x-request-id를 검색하여 특정 요청에서 발생한 에러를 추적할 수 있다.
