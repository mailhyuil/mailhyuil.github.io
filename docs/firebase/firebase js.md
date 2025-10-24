# firebase js

[firebase reference](https://firebase.google.com/docs/reference)

1. firebase 웹사이트에서 프로젝트 생성
2. firebase 웹사이트에서 앱 생성

```sh
npm i firebase
```

## config

```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXv0SpgasdflSIEN90iIiLckuEQ",
  authDomain: "test-a113.firebaseapp.com",
  projectId: "test-a113",
  storageBucket: "test-a113.appspot.com",
  messagingSenderId: "63529272138",
  appId: "1:63527272138:web:2790608ede4b7bd2a2c33",
};

export const firebase = initializeApp(firebaseConfig);
```

## usage

```js
const defaultAuth = firebase.auth();
```
