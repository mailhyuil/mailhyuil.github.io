# firebase

1. firebase 웹사이트에서 프로젝트 생성
2. firebase 웹사이트에서 앱 생성
3. firebase install

```
npm i firebase
```

4. config setting

```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXukGjiGgYZ0j6v0SpgngiIiLckuEQ",
  authDomain: "test-f553.firebaseapp.com",
  projectId: "test-f553",
  storageBucket: "test-f563.appspot.com",
  messagingSenderId: "63529272138",
  appId: "1:63527272138:web:2790608ede4b7bd2a2c33",
};

export const firebase = initializeApp(firebaseConfig);
```

5. 사용법
   > firebase 객체 안에 있는 메소드 활용

[firebase reference](https://firebase.google.com/docs/reference)

```js
const defaultAuth = firebase.auth();
```
