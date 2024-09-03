# firebase hosting

> public directory로 설정된 폴더를 호스팅한다.
>
> > 빌드된 폴더(index.html을 가지고 있는)를 public directory로 지정

## install

```sh
# 설치
npm i -g firebase-tools

# 로그인
firebase login
firebase login:list
firebase login:add mailhyuil@gmail.com
firebase login:use mailhyuil@gmail.com

# 초기화
firebase init
# 이미 firebase 콘솔에서 프로젝트를 만들었다면 Use an existing project를 선택
# 이미 angular로 프로젝트를 만들었다면 Do you want to use a web framework?를 생략
# public directory를 반드시 dist/angular(빌드된 index.html이 들어있는 폴더)로 설정!

# 배포
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
