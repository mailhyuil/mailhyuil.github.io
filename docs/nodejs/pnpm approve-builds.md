# pnpm approve-builds

> pnpm install 중 postinstall scripts를 실행해야할 때 명시적으로 승인을 요구하는 명령어
>
> > pnpm은 로컬 환경에서 빌드가 필요한 패키지의 경우 보안 문제를 방지하기 위해 빌드 과정에 대한 명시적인 승인을 요구

```sh
pnpm approve-builds

# install 시 무시
pnpm install --frozen-lockfile --ignore-scripts=false

# 설정 끄기
pnpm config set ignore-scripts false
# 설정 확인
pnpm config get ignore-scripts
```

## `.npmrc` 에서 설정

```sh
# .npmrc
ignore-scripts=false
auto-install-peers=true
```

## 특정 패키지의 script만 허용하기 (onlyBuiltDependencies)

> package.json 또는 pnpm-workspace.yaml에 `onlyBuiltDependencies`가 설정되어 있는 경우 요구를 하지 않음

```json
{
  "pnpm": {
    "onlyBuiltDependencies": [
      "@nestjs/core",
      "@parcel/watcher",
      "@prisma/client",
      "@prisma/engines",
      "@swc/core",
      "bcrypt",
      "esbuild",
      "lmdb",
      "msgpackr-extract",
      "nx",
      "prisma",
      "sharp",
      "unrs-resolver"
    ]
  }
}
```
