# typescript tsconfig paths

> baseUrl을 기준으로 상대경로를 이용해서 설정

## tsconfig

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
  }
}
```
