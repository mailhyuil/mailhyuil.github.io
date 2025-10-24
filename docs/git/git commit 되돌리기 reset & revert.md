# git commit 되돌리기 reset & revert

> reset : 커밋이 로컬에만 존재하는 경우
>
> revert : 커밋이 원격 저장소에도 존재하는 경우 (커밋 기록을 덮어쓰지 않는다.)

## 커밋 조회

> log & reference log
>
> > 커밋 히스토리 보기

```sh
git log
git reflog
```

## commit 되돌리기

```sh
# default: --mixed
git reset HEAD~ # 가장 최신 commit + add 취소 (staging area)
git reset HEAD~n # n개의 가장 최신 commit + add 취소 (staging area)
git reset --mixed HEAD@{1} # commit 취소 + add 취소 (staging area) + working directory는 변경하지 않음

git reset --soft HEAD@{1} # commit 취소 + add 유지 (staging area) + working directory는 변경하지 않음
git reset --hard HEAD@{1} # commit 취소 + add 취소 (staging area) + working directory를 해당 커밋으로 변경

git revert HEAD # 특정 커밋의 내용을 되돌리는 새로운 커밋을 만듭니다.
```

## git merge 취소하고 되돌리기

```sh
git reset --merge ORIG_HEAD
```
