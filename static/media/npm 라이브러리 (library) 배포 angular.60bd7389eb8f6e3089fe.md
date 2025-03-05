# npm library angular

> root가 아닌 /projects/my-lib/package.json에서 라이브러리를 설정하고 빌드 후
>
> > dist/my-lib에서 npm publish를 실행한다.

## setting

```sh
npm i -g @angular/cli

ng new angular-library --create-application=false

ng generate library my-lib
```

## /projects/my-lib/package.json

```json
{
  "name": "@mailhyuil/my-lib",
  "version": "0.0.2",
  "description": "Simple UI components for Angular",
  "author": "mailhyuil",
  "license": "MIT",
  "keywords": ["angular", "ui", "components"],
  "peerDependencies": {
    "@angular/common": "^19.1.0",
    "@angular/core": "^19.1.0",
    "@angular/animations": "^19.1.0",
    "@angular/compiler": "^19.1.0",
    "@angular/forms": "^19.1.0",
    "@angular/material": "^19.1.3",
    "@angular/platform-browser": "^19.1.0",
    "@angular/platform-browser-dynamic": "^19.1.0",
    "@angular/router": "^19.1.0",
    "@angular/youtube-player": "^19.1.3",
    "file-saver-es": "^2.0.5",
    "ngx-cookie-service": "^19.1.0",
    "ngx-pagination": "^6.0.3",
    "ngx-quill": "^27.0.0",
    "quill": "^2.0.3",
    "quill-image-resizor": "^2.0.0",
    "rxjs": "~7.8.0",
    "swiper": "^11.2.2",
    "zone.js": "~0.15.0"
  },
  "dependencies": {
    "tslib": "^2.3.0"
  },
  "sideEffects": false
}
```

## /tsconfig.json

> paths를 package.json에 설정한 이름으로 설정해준다.

```json
{
  "compilerOptions": {
    "paths": {
      "@mailhyuil/my-lib": ["./dist/my-lib"],
      "@mailhyuil/my-lib/editor": ["./dist/my-lib/editor"]
    }
  }
}
```

## 배포

> 한번 publish를 하고 업데이트 하려면 버전 넘버를 올려줘야한다.

```sh
npm login
npm whoami # 로그인이 되었는지 확인
npm config ls -l # 설정 확인

npm version patch # 패치버전을 올려준다
npm version minor # 마이너버전을 올려준다
npm version major # 메이저버전을 올려준다

cd ./dist/my-lib && npm publish # 기본이 private 패키지다 private 패키지는 결제가 필요
cd ./dist/my-lib && npm publish --access=public # public 패키지로 publish
```

## secondary entry point

### /projects/my-lib/<component-name>

```txt
my-lib
  ├──button
  │   ├── src
  │   │   ├── button.component.ts
  │   │   ├── button.component.scss
  │   │   ├── button.service.ts
  │   │   ├── public-api.ts
  │   │   ├── index.ts
  │   ├── ng-package.json
  .....
  ├──src
  │   ├── public-api.ts
  ├──ng-package.json
  ├──package.json
```

### /projects/my-lib/<component-name>/ng-package.json

> dest를 없애준다.

```json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "lib": {
    "entryFile": "src/public-api.ts"
  }
}
```

## tailwindcss 적용

> 프로젝트의 tailwind.config.js에서 content에 node_modules의 경로를 추가해준다.

```txt
content: [
  join(
    __dirname,
    "../../node_modules/@mailhyuil/ng-libs",
    "**/*.{js,mjs,ts,html}",
  ),
],
```
