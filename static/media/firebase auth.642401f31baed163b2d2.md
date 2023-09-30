# firebase auth

## install

```sh
npm i -g firebase-tools
npm i firebase
```

## 사용

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // ...
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
```
