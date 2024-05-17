# tsc

> 타입스크립트 컴파일 명령어

```sh
npx tsc
```

## 컴파일

```sh
npx tsc app.ts
```

## 컴파일 타겟 지정

> 문법 버전에 맞게 컴파일

```sh
npx tsc --target es6 app.ts
```

## 모듈

```sh
npx tsc --module es6 hello.ts utils.ts
```

## tsconfig.json

> tsc --optionName 대신 tsconfig.json의 설정을 읽어서 실행시킬 수 있다.

```json
{
  "include": ["src"], // 읽을 ts 파일 경로 **/*.ts로 하면 전부 읽음
  "compilerOptions": {
    "outDir": "build",
    "target": "ES6",
    "lib": ["ES6", "DOM"],
    "strict": true,
    "allowJs": true
  }
}
```
