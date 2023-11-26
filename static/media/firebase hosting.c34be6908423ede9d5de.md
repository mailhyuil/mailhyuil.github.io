# firebase hosting

> public directory로 설정된 폴더를 호스팅한다.
>
> > 빌드된 폴더(index.html을 가지고 있는)를 public directory로 지정

## install

```sh
npm i -g firebase-tools

firebase init
firebase deploy
```

## firebase.json

```json
{
  "public": "dist/angular",
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
  "hosting": [
    {
      "target": "angular",
      "source": ".",
      "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
      "frameworksBackend": {
        "region": "us-central1"
      }
    }
  ]
}
```
