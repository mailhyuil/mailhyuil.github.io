# git merge & rebase

> merge는 두 브랜치를 합치는 것이고, rebase는 브랜치를 다른 브랜치에 놓는 것이다.
>
> > merge는 변경 내용의 이력이 모두 그대로 남아 있기 때문에 이력이 복잡해짐.
> >
> > > rebase는 이력은 단순해지지만, 원래의 커밋 이력이 변경됨. 정확한 이력을 남겨야 할 필요가 있을 경우에는 사용하면 안됨.
> > >
> > > > develop 브랜치에서 main에 merge할 때는 rebase를 사용한다.

```sh
git rebase main # origin을 사용할 필요없음
```
