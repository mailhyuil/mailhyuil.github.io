# typescript tsconfig.json

> tsconfig.json이 있는 디렉토리가 프로젝트의 루트 디렉토리가 된다.
>
> > tsconfig.json은 TypeScript가 타입 체크를 하는 방법을 결정한다. (tsc, ts-node, IDE 등이 사용)
> >
> > > package.json의 type이 commonjs면 ts파일은 commonjs로 해석된다.
> > >
> > > package.json의 type이 module이면 ts파일은 esm로 해석된다.

```json
{
  "compileOnSave": false, /// 저장할 때마다 컴파일 할 것인지
  "compilerOptions": {
    "rootDir": ".",
    "sourceMap": true,
    "declaration": false, /// .d.ts 파일을 생성할 것인지
    "importHelpers": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es2015", /// ts를 어떤 버전의 js로 컴파일 할 것인지
    "module": "esnext", /// 어떤 모듈 시스템을 사용할 것인지
    "moduleResolution": "node",
    "lib": ["es2020", "dom", "dom.iterable"], /// 사용할 라이브러리
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@app/api": ["api/src/index.ts"],
      "@hyuil/libs": ["libs/src/index.ts"]
    },
    "strictPropertyInitialization": false
  },
  "exclude": ["node_modules", "tmp"]
}
```
