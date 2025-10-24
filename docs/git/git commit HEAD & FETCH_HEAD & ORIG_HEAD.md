# git commit HEAD & FETCH_HEAD & ORIG_HEAD

## HEAD

> 가장 최근 커밋을 뜻함
>
> > .git/HEAD 에 저장되어 있음

## FETCH_HEAD

> 가장 최근에 원격 저장소로부터 가져온 커밋을 가리키는 참조
>
> > git fetch를 실행하면 원격 저장소의 변경사항을 가져오는데, 이때 FETCH_HEAD에 최신 커밋이 저장됨
> >
> > .git/FETCH_HEAD 에 저장되어 있음
> >
> > > FETCH_HEAD에 저장된 커밋을 git merge FETCH_HEAD 명령어로 병합할 수 있음

## ORIG_HEAD

> .git/ORIG_HEAD 에 저장되어 있음
