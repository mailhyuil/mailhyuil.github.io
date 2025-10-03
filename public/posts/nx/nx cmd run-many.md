# nx cmd run-many

```sh
# 모든 프로젝트에 대해 serve 타겟 병렬로 실행
npx nx run-many --target=serve --all --parallel
# 특정 프로젝트들에 대해 serve 타겟 병렬로 실행
nx run-many --target=serve --parallel --projects=server,client,admin
# 모든 프로젝트에 대해 build 타겟 실행
npx nx run-many --target=build --all
# 특정 프로젝트들에 대해 test 타겟 실행
npx nx run-many --target=test --projects=proj1,proj2,proj3
# 특정 프로젝트들에 대해 lint 타겟 실행, 병렬로 3개씩
npx nx run-many --target=lint --projects=proj1,proj2,proj3 --parallel=3
```
