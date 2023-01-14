# shell script

> 단일 명령으로 하지 못하는 일을 처리하는 스크립트
>
> > 파일이름.sh
> >
> > > 파일의 가장 위 첫 라인은 #!/bin/bash로 시작한다. shell의 종류에 따라 다름 ash, zsh, sh ...
> > >
> > > > 코드를 작성한 후에는 실행 권한을 부여해야한다.

## sh 파일 실행권한 설정

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

### 조건

> 띄어쓰기에 유의
>
> > [띄고 값 띄고 조건 띄고 값 띄고]

```
if [ 값 조건 값2 ]
```

```
[] && []
[] || []
! []
[ ! ]
```

```
비교식
[ -z ${A} ] : A 문자열의 길이가 0이면 TRUE
[ -n ${A} ] : A 문자열의 길이가 0이 아니면 TRUE
[ ${A} -eq ${B} ] : A와 B값이 같으면 TRUE
[ ${A} -ne ${B} ] : A와 B값이 다르면 TRUE
[ ${A} -gt ${B} ] : A가 B보다 크면 TRUE
[ ${A} -ge ${B} ] : A가 B보다 크거나 같으면 TRUE
[ ${A} -lt ${B} ] : A가 B보다 작으면 TRUE
[ ${A} -le ${B} ] : A가 B보다 작거나 같으면 TRUE

[ 조건식A -a 조건식B ] : 조건식 A와 B가 모두 TRUE이면 TRUE (&& 와 동일)
[ 조건식A -o 조건식B ] : 조건식 A가 TRUE거나 조건식B가 TRUE면 TRUE (|| 와 동일)

파일관련
[ -d ${A} ] : A 파일이 디렉토리면 TRUE
[ -e ${A} ] : A 파일이(노드, 디렉토리, 소켓 등등 모두) 존재하면 TRUE
[ -L ${A} ] : A 파일이 심볼릭 링크면 TRUE
[ -r ${A} ] : A 파일이 읽기 가능하면 TRUE
[ -s ${A} ] : A 파일의 크기가 0 보다 크면 TRUE
[ -w ${A} ] : A 파일이 쓰기 가능하면 TRUE
[ -x ${A} ] : A 파일이 실행 가능하면 TRUE
[ -c ${A} ] : A 파일이 Special character file 이면 TRUE
[ -f ${A} ] : A 파일이 디렉토리가 아닌 일반 regular 파일이면 TRUE
[ -S ${A} ] : A 파일이 소켓이면 TRUE
[ ${A} -nt ${B} ] : A 파일 B 파일보다 최신파일이면 참
[ ${A} -ot ${B} ]  : A 파일이 B 파일보다 이전파일이면 참
[ ${A} -ef ${B} ] : A 파일과 B 파일이 같은 파일이면 참

-eq : EQual

-ne : NEgative

-gt : Greater Than

-ge : Greater than Equal

-lt : Less Than

-le : Less than Equal

-d : Directory

-e : Exist

-L : symbolic Link

-r : Readable

-w : Writeable

-x : eXecute

-nt : Newer Than

-ot : Older Than

-ef : Equal File
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
