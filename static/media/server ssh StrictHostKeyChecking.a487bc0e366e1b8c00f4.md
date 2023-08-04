# StrictHostKeyChecking

> 리모트 서버에 처음 접속시 ~/.ssh/known_hosts에 로컬키를 추가할거냐고 물어봄 (yes/no)
>
> > -o StrictHostKeyChecking=no 옵션을 하면 no로 그냥 생략할 수 있다.
> >
> > > -o 는 기타 설정 옵션을 정의 할 수 있는 옵션 -o 뒤에 설정을 넣으면 된다

```
-o StrictHostKeyChecking=no
```
