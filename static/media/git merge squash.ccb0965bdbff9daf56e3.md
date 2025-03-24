# git merge rebase squash

> 많은 커밋들이 그대로 메인 브랜치에 병합되어 불필요한 Working In Progress 와 같은 커밋들이 섞여있다면 전체 히스토리를 파악하기가 힘들어질
>
> > 작업 중에는 자주 커밋하고, PR 전에는 squash로 커밋을 정리해야한다.
> >
> > > git squash는 여러 개의 커밋을 하나의 커밋으로 합치는 방법
> > >
> > > > feature branch에서 develop branch로 merge할 때 사용한다.

## rebase -i 방식

```sh
# interactive 모드로 rebase
git rebase -i HEAD~[커밋 개수]

# pick -> squash 또는 s 로 변경
# 맨위는 pick 으로 유지
pick 5d1bd40 chore:update
pick f6aba9f chore:update to golang
# :wq로 저장하면 새로운 창이 뜨면서 커밋 메시지를 수정할 수 있다.
# first commit 메세지를 변경

git pull
```

## merge --squash 방식

```sh
git merge --squash [브랜치명]
```
