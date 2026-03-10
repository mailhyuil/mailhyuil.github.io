# pnpm workspace

> root에 pnpm-workspace.yaml이 필요

```sh
pnpm add express --filter @hyuil/server
```

## pnpm-workspace.yaml

- workspace 범위를 정의

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

## 로컬 패키지 연결
