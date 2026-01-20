# firebase cloud functions

- aws의 lambda와 비슷한 서비스
- cloud run이나 gcloud CLI등 api로 배포해야한다.

```sh
# init
firebase init functions

# deploy
firebase deploy --only functions
firebase deploy --only functions:<function-name>

# env
firebase functions:config:set UPSTASH_REDIS_REST_URL
firebase functions:config:get UPSTASH_REDIS_REST_URL
# process.env.UPSTASH_REDIS_REST_URL

# flutter
flutter pub add cloud_functions
```

## file structure

```txt
functions
  |-- src
    |-- shared
    |-- index.ts // 각 function을 export하면 다른 function으로 인식
    |-- functions1.ts
    |-- functions2.ts
  |-- tsconfig.json
  |-- package.json
  |-- package-lock.json
  |-- node_modules
```

## ts

```ts
export const helloWorld = onCall((context, request) => {
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

## flutter

```dart
import 'package:cloud_functions/cloud_functions.dart';

final functions = FirebaseFunctions.instance;

functions.httpsCallable('helloWorld').call({
  'uid': '123',
  'data': {
    'message': 'Hello World',
  },
});
```
