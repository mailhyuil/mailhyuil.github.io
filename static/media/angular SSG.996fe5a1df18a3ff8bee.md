# angular SSG (static site generation)

> SSG란 클라이언트에서 필요한 페이지들을 사전에 미리 준비해뒀다가 요청을 받으면 이미 완성된 파일을 단순히 반환하여 브라우저에서 뷰를 보여지게 된다.
>
> > scully는 angular에서 SSG를 구현하기 위한 프레임워크이다.
> >
> > > NextJS의 getStaticProps, getStaticPaths와 같은 기능을 제공한다.

## install

```sh
ng add @scullyio/init
npm i @scullyio/init
nx g @scullyio/init:install -- --project=<projectName>

npm i @scullyio/scully @scullyio/ng-lib
```

## main.ts

```ts
import { ScullyLibModule } from "@scullyio/ng-lib";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      [ScullyLibModule] //
    ),
  ],
};
```

## scully.config.ts

```ts
import { ScullyConfig } from "@scullyio/scully";

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "demo",
  distFolder: "./dist/[PROJECT_NAME]", // output directory of your Angular build artifacts
  outDir: "./dist/static", // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
};
```

## scully

> scully 폴더를 생성
>
> > tsconfig.json 생성

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "esModuleInterop": true,
    "importHelpers": false,
    "lib": ["ES2019", "dom"],
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "target": "es2018",
    "types": ["node"],
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "typeRoots": ["../node_modules/@types"],
    "allowSyntheticDefaultImports": true
  },
  "exclude": ["./**/*spec.ts"]
}
```
