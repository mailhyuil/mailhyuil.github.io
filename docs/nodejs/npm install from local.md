# npm install from local

## install

```sh
npm i ./child # 로컬에 있는 라이브러리 설치
```

## package.json (local)

```json
{
  "name": "@mailhyuil/local",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## package.json (main)

```json
"dependencies": {
    "@mailhyuil/local": "file:local"
}
```
