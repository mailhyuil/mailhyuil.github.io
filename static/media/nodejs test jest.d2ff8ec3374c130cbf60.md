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
jest --init
```

## babel

> jest는 esmodule과 잘 동작하지 않아서 commonjs로 변환 작업을 해줘야한다. ㅠㅠ

### install

```
npm i @babel/plugin-transform-modules-commonjs
```

### .babelrc

```
{
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"]
    }
  }
}
```

## src/test

> 파일명은 file.test.ts or file.spec.ts

## 테스트 자동화

> jest --watch 옵션 현재 수정중인 파일만 검사 (git에 커밋된 상태인 파일은 검사하지 않는다!)
>
> > jest --watchAll 옵션 모든 파일 검사

```json
"scripts": {
    "test": "jest --watch"
},
```

## mock

```
jest.fn()
```

## stub
