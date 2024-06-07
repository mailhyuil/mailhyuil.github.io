# typescript tsconfig paths

> baseUrl을 기준으로 상대경로를 이용해서 설정
>
> > tsc는 paths를 매핑하지 못한다. paths 사용 시 tsconfig-paths를 ts-node나 번들러에서 사용하여 매핑시켜줘야한다.

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

## install

```sh
npm i -D tsconfig-paths
```

## usage

```sh
ts-node -r tsconfig-paths/register src/main.ts
```
