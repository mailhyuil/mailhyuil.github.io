# nx tsconfig paths

> baseUrl을 기준으로 상대경로를 이용해서 설정

## tsconfig.base.json

> 루트의 tsconfig.base.json에 설정

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "rootDir": ".",
    "sourceMap": true,
    "declaration": false,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "es2015",
    "module": "esnext",
    "lib": ["es2020", "dom"],
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@api": ["api/src/lib/index.ts"],
      "@common": ["apps/common/src/index.ts"],
      "@admin/*": ["apps/admin/src/app/*"],
      "@client/*": ["apps/client/src/app/*"]
    }
  },
  "exclude": ["node_modules", "tmp"]
}
```
