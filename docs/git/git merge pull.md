# git merge pull

> git pull은 git fetch + git merge FETCH_HEAD를 한번에 실행하는 것과 같습니다.

```sh
git fetch
git merge FETCH_HEAD
```

## fetch

> 최신 메타데이터 정보를 확인하라는 명령을 전달합니다.
>
> > 단 fetch는 원격 저장소에 변경사항이 있는지 확인만 하고,
> >
> > > 변경된 데이터를 로컬 Git에 실제로 가져오지는 않습니다.
> > >
> > > > 병합하기전에 확인하는 용도로 사용

## merge

> 브랜치들을 하나로 합치는 작업
>
> > merge는 변경 내용의 이력이 모두 그대로 남아 있기 때문에 이력이 복잡해짐.
