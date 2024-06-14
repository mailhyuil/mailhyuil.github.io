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
      "@hyuil/api": ["api/src/lib/index.ts"],
      "@hyuil/common": ["apps/common/src/index.ts"],
      "@hyuil/admin/services/*": ["apps/admin/src/app/services/*"],
      "@hyuil/admin/components/*": ["apps/admin/src/app/components/*"],
      "@hyuil/admin/stores/*": ["apps/admin/src/app/stores/*"],
      "@hyuil/admin/pipes/*": ["apps/admin/src/app/pipes/*"],
      "@hyuil/admin/pages/*": ["apps/admin/src/app/pages/*"],
      "@hyuil/admin/layouts/*": ["apps/admin/src/app/layouts/*"],
      "@hyuil/admin/directives/*": ["apps/admin/src/app/directives/*"],
      "@hyuil/admin/factories/*": ["apps/admin/src/app/factories/*"],
      "@hyuil/admin/guards/*": ["apps/admin/src/app/guards/*"],
      "@hyuil/admin/utils/*": ["apps/admin/src/app/utils/*"],
      "@hyuil/client/services/*": ["apps/client/src/app/services/*"],
      "@hyuil/client/components/*": ["apps/client/src/app/components/*"],
      "@hyuil/client/stores/*": ["apps/client/src/app/stores/*"],
      "@hyuil/client/pipes/*": ["apps/client/src/app/pipes/*"],
      "@hyuil/client/pages/*": ["apps/client/src/app/pages/*"],
      "@hyuil/client/layouts/*": ["apps/client/src/app/layouts/*"],
      "@hyuil/client/directives/*": ["apps/client/src/app/directives/*"],
      "@hyuil/client/factories/*": ["apps/client/src/app/factories/*"],
      "@hyuil/client/guards/*": ["apps/client/src/app/guards/*"],
      "@hyuil/client/utils/*": ["apps/client/src/app/utils/*"]
    }
  },
  "exclude": ["node_modules", "tmp"]
}
```
