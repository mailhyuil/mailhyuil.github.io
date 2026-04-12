# git worktree

동일한 git 저장소에 여러 개의 독립된 작업 디렉토리를 갖을 수 있게 해준다.

```sh
git worktree add <path> [<new-branch>] # 이미 존재하는 브랜치에 워크트리 추가
git worktree add <path> -b [<new-branch>] # 브랜치 생성하면서 워크트리 추가
# git worktree add ../test -b sangbaek/test
# cd ../test
# git checkout some-branch
# ..working

# .worktreeinclude # 워크트리 생성시 .gitignore, .worktreeinclude에 동시에 명시된 파일만 복사
node_modules
.env.local
.cache
dist

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

## workflow

```sh
# 브랜치마다 워크트리 생성 후 각자 PR 날리기
git worktree add ../auth feature/auth
git add .
git commit -m "feat: auth"
git push origin feature/auth

# 브랜치마다 워크트리 생성 후 작업 후 integration branch에서 merge 후 PR 날리기
git worktree add ../auth feature/auth
git add .
git commit -m "feat: auth"
git checkout integration
git merge feature/auth
git push origin integration
```

## 참고

```sh
git worktree add ../test main --detach # 두 워크트리는 같은 브랜치를 체크아웃할 수 없다. --detach 옵션을 사용하여 브랜치가 없는 상태로 워크트리를 추가할 수 있다.
```
