# winston log 분리 (user & admin)

```ts
import winston from "winston";

// 일반 API 로그
const userLogger = winston.createLogger({
  format: combine(timestamp(), json(), {
    transform: info => {
      info.category = "user";
      return info;
    },
  }),
  transports: [new winston.transports.File({ filename: "logs/user-api.log" })],
});

// 관리자 API 로그
const adminLogger = winston.createLogger({
  format: combine(timestamp(), json(), {
    transform: info => {
      info.category = "admin";
      return info;
    },
  }),
  transports: [new winston.transports.File({ filename: "logs/admin-api.log" })],
});
```
