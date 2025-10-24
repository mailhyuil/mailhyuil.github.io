# angular basic

## install

```sh
npm install -g @angular/cli

ng new my-app
```

## tsconfig.json

> constructor 안에서 초기화하라는 오류 없애기

```json
"compilerOptions":{
    "strictPropertyInitialization": false,
}
```
