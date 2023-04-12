# jest

## install

```
npm i jest --global
npm i --save-dev jest

yarn add jest -g
yarn add jest -D
```

## init

```
jet --init
```

## src/test

> 파일명은 file.test.ts or file.spec.ts

## 테스트 자동화

> jest --watch 옵션 현재 수정중인 파일만 검사 (git에 커밋된 상태인 파일은 검사하지 않는다!)
>
> > jest --watchAll 옵션 모든 파일 검사

```
"scripts": {
    "test": "jest --watch"
},
```
