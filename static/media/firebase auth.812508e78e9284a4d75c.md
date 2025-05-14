# firebase auth

## install

```sh
npm i -g firebase-tools
npm i firebase
```

## firebase.init.ts

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // ...
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
```

## usage

```js
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
```

```js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
const user = auth.currentUser;
```
