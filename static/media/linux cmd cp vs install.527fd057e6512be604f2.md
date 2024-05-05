# linux cmd install

> cp와 비슷하지만 더 많은 기능을 제공
>
> > install은 지정한 파일의 권한, 속성, 소유자, 그룹명등을 지정하여 복사하는 명령어

```sh
# -d : 복사될 경로에 디렉토리가 없다면 생성해준다
# -m : 권한 지정 // 755
# -g : 그룹 지정
# -o : 소유자 지정

install -d -m 755 -g root -o root /path/to/file
```
