# git submodule 삭제

1. 먼저 git submodule deinit -f 명령어를 통해서 해당 모듈을 deinit 해줍니다.

```sh
git submodule deinit -f
```

2. 그 다음 .git/modules 폴더에 들어가서 해당 폴더를 삭제합니다.

```sh
git submodule deinit -f test_app
```

3. 마지막으로 git에서 해당 폴더를 제거해주면 됩니다.

```sh
git rm -f test_app
```
