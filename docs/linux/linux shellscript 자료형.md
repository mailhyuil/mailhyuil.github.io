# linux shellscript 자료형

## 배열

```sh
daemons=("httpd" "mysqld" "vsftpd") # 배열 변수 선언
echo ${daemons[1]} # $daemons 배열의 두 번째 인덱스에 해당하는 myspld 출력
echo ${daemons[@]} # $daemons 배열의 모든 데이터 출력
echo ${daemons[*]} # $daemons 배열의 모든 데이터 출력
echo ${#daemons[@]} # $daemons 배열의 배열 크기 출력

filelist=( $(ls) ) # 해당 쉘 스크립트 실행 디렉토리의 파일 리스트를 배열로 변수 선언
echo ${filelist[*]} # $filelist 모든 데이터 출력
```
