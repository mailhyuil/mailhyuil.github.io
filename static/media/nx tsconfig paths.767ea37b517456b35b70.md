# nx tsconfig paths

> baseUrl을 기준으로 상대경로를 이용해서 설정

## apps/admin/tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2022",
    "useDefineForClassFields": false,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "paths": {
      "@_admin/common": ["apps/admin/src/common/index.ts"]
    }
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    },
    {
      "path": "./tsconfig.editor.json"
    }
  ],
  "extends": "../../tsconfig.base.json",
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
```
