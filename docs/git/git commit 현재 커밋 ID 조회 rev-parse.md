# git commit 현재 커밋 ID 조회 rev-parse

```sh
# 현재 커밋 ID 조회
git rev-parse HEAD

# 커밋 ID의 앞 8자리 조회
git rev-parse --short HEAD

# 현재 커밋의 부모 커밋 ID 조회 (이전 커밋 ID 조회)
git rev-parse HEAD^
```
