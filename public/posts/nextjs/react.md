# react

## create project

### create-react-app

```sh
npm install -g create-react-app #전역설치

npx create-react-app hello-world
```

## create-react-app typescript

```sh
yarn create react-app my-app --template typescript
```

### npm

```sh
npm init react-app <프로젝트>

```

### yarn

```sh
yarn create react-app <프로젝트>
```

### vite

```sh
npm create vite@latest <프로젝트>
```

## React에서 Local Image 불러오기

### public 폴더 사용

`<img src="/img/file.jpg"/>`

### import 사용

```
import file from './file.jpg';
<img src={file} />
```

### require 사용

- src 폴더에서 사용 가능

```
<img src={require("./file.jpg").default}/>
```
