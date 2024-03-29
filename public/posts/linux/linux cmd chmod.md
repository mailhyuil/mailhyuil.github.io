# linux chmod

> 777은 사용 지양 (모든 권한이 부여된 상태)
>
> > 소유자는 파일이나 디렉토리를 생성한 사용자
> >
> > > 서비스를 실행한 유저가 서비스의 소유자 이다. 서비스가 파일을 변경하거나 생성할 때 소유자에게 권한이 있어야 한다.

```sh
0 --- 권한 없음
1 --x 실행
2 -w- 쓰기
4 r-- 읽기

5 r-x 읽기 + 실행
6 rw- 읽기 + 쓰기

# 소유자 / 그룹 / 모두(소유자와 그룹을 제외한 나머지) #

777 - 모든 권한 부여
755 - 소유자는 모든 권한, 그룹과 전체는 읽기와 실행 권한 부여
644 - 소유자는 읽기와 쓰기, 그룹과 전체는 읽기 권한 부여
600 - 소유자만 읽기와 쓰기 권한 부여
400 = 소유자만 읽기 권한 부여

777 === 0777 # 똑같음
```

## -R 옵션

> 디렉토리 내부의 모든 파일과 디렉토리에 권한을 부여

```sh
chmod -R 755 /home/user
```
