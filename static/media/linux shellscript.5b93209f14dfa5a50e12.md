# shell script

> 단일 명령으로 하지 못하는 일을 처리하는 스크립트
>
> > 파일이름.sh
> >
> > > 파일의 가장 위 첫 라인은 #!/bin/bash로 시작한다. shell의 종류에 따라 다름 ash, zsh, sh ...
> > >
> > > > 코드를 작성한 후에는 실행 권한을 부여해야한다.
> > > >
> > > > > > Linux 시스템에서는 기본적으로 루트 디렉토리에 있는 파일에 대해 실행 권한을 부여하지 않습니다. 이것은 보안 상의 이유로 결정된 것입니다. 따라서 sh 파일을 직접 루트 디렉토리에서 실행할 수는 없습니다.

## 실행

```sh
sh test.sh
sh -c "while true; do echo hello world; sleep 1; done" # -c 옵션은 인자로 받은 문자열을 명령어로 실행
```

## sh 파일 실행권한 설정

```sh
chmod +x test.sh
```

## 변수 선언 및 사용

```sh
mysql_id='root'
mysql_directiory='/etc/mysql'

echo $mysql_id
echo $mysql_directory
```

## 연산자

> expr 사용

```sh
num=`expr \( 3 \* 5 \) / 4 + 7`
```
