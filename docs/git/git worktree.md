# git worktree

동일한 git 저장소에 여러 개의 독립된 작업 디렉토리를 갖을 수 있게 해준다.

```sh
git worktree add <path> [<branch>]
# git worktree add ../new-worktree main
# cd ../new-worktree
# git checkout some-branch
# ..working

# 워크트리 조회
git worktree list
# 워크트리 제거
git worktree remove <path>
# 워크트리 잠그기
git worktree lock <path>
# 유령 워크트리 제거, 실수로 rm -rf로 워크트리를 제거한 경우 정리
git worktree prune
# 이동된 워크트리 복구
git worktree repair
```

## 참고

```sh
git worktree add ../test main --detach # 두 워크트리는 같은 브랜치를 체크아웃할 수 없다. --detach 옵션을 사용하여 브랜치가 없는 상태로 워크트리를 추가할 수 있다.
```
