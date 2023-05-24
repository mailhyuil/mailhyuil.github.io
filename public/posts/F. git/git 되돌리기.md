# git 되돌리기

## 최근 commit 취소

```
git reset HEAD
```

## git reflog

> reference log
>
> > 커밋 히스토리 보기

## commit 되돌리기

```
git reset --hard HEAD@{1} # staged 파일 등등 포함
git reset --soft HEAD@{1} # staged 파일 등등 유지
```

## git merge 취소하고 되돌리기

```
git reset --merge ORIG_HEAD
```
