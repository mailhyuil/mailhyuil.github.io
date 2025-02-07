# npm publish angular

> root가 아닌 packages/my-lib/package.json에서 라이브러리를 설정하고 빌드 후
>
> > dist/my-lib에서 npm publish를 실행한다.

```sh
npm i -g @angular/cli

ng new angular-library --create-application=false

ng generate library my-lib
```

## /packages/my-lib/package.json

```json
{
  "name": "@mailhyuil/ng-libs",
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

### prepack script

```json
scripts: {
  "prepack": "npm version patch", // prepack은 npm publish를 실행하기 전에 실행되는 스크립트이다.
}
```
