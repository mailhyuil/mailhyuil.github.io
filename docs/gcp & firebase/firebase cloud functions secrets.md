# firebase cloud functions

```sh
# secret
firebase functions:secrets:set UPSTASH_REDIS_REST_TOKEN
firebase functions:secrets:get UPSTASH_REDIS_REST_TOKEN
```

## ts

```ts
import { defineSecret } from "firebase-functions/params";

const upstashRedisRestToken = defineSecret("UPSTASH_REDIS_REST_TOKEN");

export const helloWorld = onCall({
  secrets: [upstashRedisRestToken], // dependency 등록
},(context, request) => {
  const authUser = context.auth;
  if (!authUser) {
    throw new HttpsError("unauthenticated", "unauthenticated");
  }
  const data = request.data;
  if(data.uid !== authUser.uid) {
    throw new HttpsError("permission-denied", "permission-denied");
  }
  // logic ...
  return { message: "Hello World" };
});
```
