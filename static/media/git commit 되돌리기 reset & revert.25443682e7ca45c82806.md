# git 되돌리기

> reset : 커밋이 로컬에만 존재하는 경우
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
git reset --hard HEAD@{1} # staging area와 현재 작업 중인 working directory도 해당 커밋의 모습과 동일하게 변합니다.
git reset --mixed HEAD@{1} # staging area도 해당 커밋의 모습과 동일하게 변합니다.
git reset --soft HEAD@{1} # 현재 작업 중인 working directory와 staging area는 아무런 영향을 받지 않습니다.

git revert HEAD # 특정 커밋의 내용을 되돌리는 새로운 커밋을 만듭니다.
```

## 최근 commit 취소 (reset)

```sh
git reset HEAD^ # 가장 최신 커밋 취소
git reset HEAD~n # n개의 최신 커밋 취소
```

## git merge 취소하고 되돌리기

```sh
git reset --merge ORIG_HEAD
```
