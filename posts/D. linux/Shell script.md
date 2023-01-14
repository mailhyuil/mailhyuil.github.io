# shell script

> 파일이름.sh
>
> > 파일의 가장 위 첫 라인은 #!/bin/bash로 시작한다. shell의 종류에 따라 다름 ash, zsh, sh ...
> >
> > > 주석은 #내용
> > >
> > > > 코드를 작성한 후에는 실행 권한을 부여해야한다.

## sh 파일 권한 설정

```
chmod +x test.sh
```

```
#!/bin/bash

echo "Hello Bash!"
```

## 변수 선언 및 사용

```
mysql_id='root'
mysql_directiory='/etc/mysql'

echo $mysql_id
echo $mysql_directory
```

## 배열

```
daemons=("httpd" "mysqld" "vsftpd") // 배열 변수 선언
echo ${daemons[1]} // $daemons 배열의 두 번째 인덱스에 해당하는 myspld 출력
echo ${daemons[@]} // $daemons 배열의 모든 데이터 출력
echo ${daemons[*]} // $daemons 배열의 모든 데이터 출력
echo ${#daemons[@]} // $daemons 배열의 배열 크기 출력

filelist=( $(ls) ) // 해당 쉘 스크립트 실행 디렉토리의 파일 리스트를 배열로 변수 선언
echo ${filelist[*]} // $filelist 모든 데이터 출력
```

## 키워드

```
$$ : 쉘의 프로세스 번호 (pid)
$0 : 쉘 스크립트 이름
$1~$9 : 명령줄 인수
$* : 모든 명령줄 인수 리스트
$# : 인수의 개수
$? : 최근 실행한 명령어의 종료 값
```

## 연산자

> expr 사용

```
num=`expr \( 3 \* 5 \) / 4 + 7`
```

## 조건문

```
if [ 조건 ]

then

     명령문

fi
```

```
문자1 == 문자2    // 문자 1과 문자 2가 일치

문자1 !=  문자2    // 문자 1과 문자 2가 일치하지 않는다.

-z 문자               // 문자가 null 이면 참(값이 없으면 true)

-n 문자               // 문자가 null 이 아니면 참
```

## 수치 비교

> <,>도 사용하지만 기본적으로 다음 문법을 사용한다.

```
값1 -eq 값2       //값이 같음(equal)
값1 -ne 값2       //값이 같지 않음(not equal)
값1 -lt 값2        //값1이 값2보다 작음(less than)
값1 -le 값2        //값1이 값2보다 작거나 같음(less or equal)
값1 -gt 값2       //값1이 값2보다 큼(greater than)
값1 -ge 값2       //값1이 값2보다 크거나 같음(greater or equal)
```

## 파일 검사

```
-e 파일명   //파일이 존재하면 참
-d 파일명   //파일이 디렉토리면 참
-h 파일명   //파일이 심볼릭 링크 파일이면 참
-f 파일명   //파일이 일반파일이면 참
-r 파일명   //파일이 읽기 가능하면 참
-s 파일명   //파일크기가 0이 아니면 참
-u 파일명   //파일이 set-user-id가 설정되면 참
-w 파일명   //파일이 쓰기 가능이면 참
-x 파일명   //파일이 실행 가능이면 참
```
