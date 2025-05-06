# npm package 자동 업데이트

## install

```sh
npm i -g npm-check-updates
```

## workspace에서

```sh
ncu # 전체 업데이트 목록 확인
ncu --target patch # patch 업데이트 목록 확인
ncu --target minor # minor 업데이트 목록 확인
ncu --target major # major 업데이트 목록 확인

ncu -u # 전체 업데이트
ncu --target patch -u # patch만 업데이트
ncu --target minor -u # minor만 업데이트
ncu --target major -u # major만 업데이트

ncu -i # 특정 패키지만 선택해서 업데이트
ncu -i --format group # 특정 그룹만 (e.g. minor update, major update ..)
```
